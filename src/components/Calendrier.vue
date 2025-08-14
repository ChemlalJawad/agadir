<template>
  <div class="calendrier-container">
    <div class="calendrier-header">
      <h1 class="calendrier-title">📅 Calendrier de voyage</h1>
      <p class="calendrier-subtitle">Du 11 au 18 octobre 2025 • Planifiez vos activités au Maroc</p>
      
      <!-- Indicateur de connexion -->
      <div class="connection-status">
        <div v-if="isLoading" class="status loading">
          🔄 Chargement...
        </div>
        <div v-else-if="dbError" class="status error">
          ⚠️ {{ dbError }}
        </div>
        <div v-else-if="isDatabaseConnected" class="status connected">
          🟢 Connecté à Neon Database
        </div>
        <div v-else class="status local">
          🟡 Mode local (localStorage)
        </div>
      </div>
    </div>

    <div class="calendar-controls">
      <button @click="previousMonth" class="control-btn">← Mois précédent</button>
      <h2 class="current-month">{{ getCurrentMonthYear() }}</h2>
      <button @click="nextMonth" class="control-btn">Mois suivant →</button>
    </div>

    <div class="calendar-grid">
      <div class="calendar-header-days">
        <div class="day-header" v-for="day in dayHeaders" :key="day">{{ day }}</div>
      </div>
      
      <div class="calendar-days">
        <div 
          v-for="(day, index) in calendarDays" 
          :key="index"
          :class="['calendar-day', {
            'other-month': day.otherMonth,
            'today': day.isToday,
            'has-activity': day.activities && day.activities.length > 0,
            'travel-day': isTravelDay(day.date),
            'selected': selectedDate && isSameDay(day.date, selectedDate)
          }]"
          @click="selectDate(day)"
        >
          <span class="day-number">{{ day.date.getDate() }}</span>
          <div v-if="day.activities && day.activities.length > 0" class="activity-list">
            <div 
              v-for="activity in day.activities.slice(0, 3)" 
              :key="activity.id"
              class="activity-item-mini"
              :class="{ 'preset-activity': activity.isPreset }"
              @click.stop="openActivityModal(activity)"
            >
              <span class="activity-time">{{ activity.time }}</span>
              <span class="activity-title-mini">{{ activity.title.substring(0, 15) }}{{ activity.title.length > 15 ? '...' : '' }}</span>
            </div>
            <div v-if="day.activities.length > 3" class="more-activities" @click.stop="selectDate(day)">
              +{{ day.activities.length - 3 }} autres
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedDate" class="activity-panel">
      <h3 class="panel-title">
        📋 Activités du {{ formatDate(selectedDate) }}
        <span v-if="isTravelDay(selectedDate)" class="travel-badge">Jour {{ getTravelDayNumber(selectedDate) }}</span>
      </h3>
      
      <div class="activity-form">
        <input 
          v-model="newActivity.title"
          placeholder="Titre de l'activité"
          class="activity-input"
        />
        <input 
          v-model="newActivity.time"
          type="time"
          class="activity-input"
        />
        <textarea 
          v-model="newActivity.description"
          placeholder="Description (optionnel)"
          class="activity-textarea"
        ></textarea>
        <button @click="addActivity" class="add-btn">➕ Ajouter</button>
      </div>

      <div class="activities-list">
        <div 
          v-for="activity in getActivitiesForDate(selectedDate)" 
          :key="activity.id"
          class="activity-item"
          :class="{ 'preset-activity': activity.isPreset }"
          @click="openActivityModal(activity)"
        >
          <div class="activity-info">
            <span class="activity-time">{{ activity.time }}</span>
            <div class="activity-content">
              <span class="activity-title">{{ activity.title }}</span>
              <span v-if="activity.description" class="activity-description">{{ activity.description }}</span>
            </div>
          </div>
          <div class="activity-actions">
            <button @click.stop="editActivity(activity)" class="edit-btn">✏️</button>
            <button @click.stop="removeActivity(activity.id)" class="remove-btn">🗑️</button>
          </div>
        </div>
        
        <div v-if="getActivitiesForDate(selectedDate).length === 0" class="no-activities">
          Aucune activité prévue ce jour
        </div>
      </div>
    </div>

    <!-- Modal pour éditer une activité -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">{{ isEditing ? 'Modifier l\'activité' : 'Détails de l\'activité' }}</h3>
        
        <div class="modal-form">
          <input 
            v-model="modalActivity.title"
            placeholder="Titre de l'activité"
            class="modal-input"
            :disabled="!isEditing"
          />
          <input 
            v-model="modalActivity.time"
            type="time"
            class="modal-input"
            :disabled="!isEditing"
          />
          <textarea 
            v-model="modalActivity.description"
            placeholder="Description (optionnel)"
            class="modal-textarea"
            :disabled="!isEditing"
          ></textarea>
        </div>

        <div class="modal-actions">
          <button v-if="!isEditing" @click="startEditing" class="edit-modal-btn">✏️ Modifier</button>
          <button v-if="isEditing" @click="saveActivity" class="save-btn">💾 Sauvegarder</button>
          <button @click="removeActivity(modalActivity.id)" class="delete-modal-btn">🗑️ Supprimer</button>
          <button @click="closeModal" class="cancel-btn">❌ Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { 
  getActivities, 
  createActivity, 
  updateActivity, 
  deleteActivity,
  createActivitiesTable,
  initializePresetActivities 
} from '../utils/database.js'

// Dates du voyage : 11-18 octobre 2025
const TRIP_START = new Date(2025, 9, 11) // 11 octobre 2025
const TRIP_END = new Date(2025, 9, 18)   // 18 octobre 2025

const currentDate = ref(new Date(2025, 9, 1)) // Octobre 2025
const selectedDate = ref(null)
const activities = ref([])
const newActivity = ref({
  title: '',
  time: '',
  description: ''
})

// Modal state
const showModal = ref(false)
const isEditing = ref(false)
const modalActivity = ref({})

// Loading state
const isLoading = ref(false)
const dbError = ref(null)

const dayHeaders = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

// Variable pour accéder à l'environment dans le template
const isDatabaseConnected = computed(() => {
  return !!import.meta.env.VITE_DATABASE_URL
})

// Activités pré-définies du programme
const presetActivities = [
  // Jour 1 - 11 octobre
  { date: new Date(2025, 9, 11), time: '10:00', title: '✈️ Arrivée Agadir', description: 'Arrivée à l\'aéroport Al Massira et transfert hôtel', isPreset: true },
  { date: new Date(2025, 9, 11), time: '14:00', title: '🍽️ Déjeuner bienvenue', description: 'Premier repas traditionnel marocain en terrasse', isPreset: true },
  { date: new Date(2025, 9, 11), time: '16:00', title: '🏖️ Découverte plage', description: 'Session détente sur la plage d\'Agadir', isPreset: true },
  { date: new Date(2025, 9, 11), time: '18:00', title: '🌅 Corniche', description: 'Promenade sur la célèbre corniche', isPreset: true },
  
  // Jour 2 - 12 octobre
  { date: new Date(2025, 9, 12), time: '09:00', title: '🏞️ Vallée du Paradis', description: 'Excursion dans la vallée du Paradis', isPreset: true },
  { date: new Date(2025, 9, 12), time: '14:00', title: '🛍️ Souk El Had', description: 'Exploration du plus grand marché de la région', isPreset: true },
  { date: new Date(2025, 9, 12), time: '17:00', title: '🏰 Kasbah Agadir', description: 'Visite des ruines de la Kasbah', isPreset: true },
  
  // Jour 3 - 13 octobre
  { date: new Date(2025, 9, 13), time: '09:00', title: '🚗 Route vers Essaouira', description: 'Départ pour Essaouira (3h de route)', isPreset: true },
  { date: new Date(2025, 9, 13), time: '13:00', title: '🌊 Arrivée Essaouira', description: 'Installation et découverte de la plage', isPreset: true },
  { date: new Date(2025, 9, 13), time: '16:00', title: '🏛️ Remparts', description: 'Visite des remparts et fortifications', isPreset: true },
  
  // Jour 4 - 14 octobre
  { date: new Date(2025, 9, 14), time: '09:00', title: '🎨 Coopératives artisanales', description: 'Découverte marqueterie de thuya et bijoux berbères', isPreset: true },
  { date: new Date(2025, 9, 14), time: '14:00', title: '🦐 Plateau fruits de mer', description: 'Déjeuner spécialités océanes', isPreset: true },
  { date: new Date(2025, 9, 14), time: '16:00', title: '🪁 Kitesurf', description: 'Initiation kitesurf ou équitation sur plage', isPreset: true },
  
  // Jour 5 - 15 octobre
  { date: new Date(2025, 9, 15), time: '09:00', title: '🚗 Route Marrakech', description: 'Départ pour Marrakech (2h30)', isPreset: true },
  { date: new Date(2025, 9, 15), time: '13:00', title: '🌿 Jardin Majorelle', description: 'Visite du célèbre jardin bleu', isPreset: true },
  { date: new Date(2025, 9, 15), time: '15:00', title: '👗 Musée YSL', description: 'Découverte du musée Yves Saint Laurent', isPreset: true },
  { date: new Date(2025, 9, 15), time: '18:00', title: '🏨 Installation', description: 'Check-in hôtel et repos', isPreset: true },
  
  // Jour 6 - 16 octobre
  { date: new Date(2025, 9, 16), time: '09:00', title: '🛍️ Souks médina', description: 'Immersion dans les souks de Marrakech', isPreset: true },
  { date: new Date(2025, 9, 16), time: '13:00', title: '🍽️ Déjeuner médina', description: 'Repas traditionnel dans un riad', isPreset: true },
  { date: new Date(2025, 9, 16), time: '15:00', title: '🏺 Tombeaux Saadiens', description: 'Visite des merveilles architecturales', isPreset: true },
  { date: new Date(2025, 9, 16), time: '19:00', title: '🎭 Jemaa el-Fna', description: 'Spectacle de la place légendaire', isPreset: true },
  
  // Jour 7 - 17 octobre
  { date: new Date(2025, 9, 17), time: '09:00', title: '🐪 Palmeraie aventure', description: 'Balade dromadaire ou cheval dans la palmeraie', isPreset: true },
  { date: new Date(2025, 9, 17), time: '11:00', title: '🛍️ Shopping souvenirs', description: 'Derniers achats épices, huile d\'argan', isPreset: true },
  { date: new Date(2025, 9, 17), time: '13:00', title: '🍽️ Déjeuner adieu', description: 'Repas avec vue panoramique Atlas', isPreset: true },
  { date: new Date(2025, 9, 17), time: '16:00', title: '🎮 Activité groupe', description: 'Karting ou équitation entre potes', isPreset: true },
  
  // Jour 8 - 18 octobre
  { date: new Date(2025, 9, 18), time: '10:00', title: '🧳 Check-out', description: 'Préparatifs départ et bagages', isPreset: true },
  { date: new Date(2025, 9, 18), time: '13:00', title: '✈️ Transfert aéroport', description: 'Route vers aéroport Marrakech-Menara', isPreset: true },
  { date: new Date(2025, 9, 18), time: '16:00', title: '🛫 Vol retour', description: 'Départ pour la France', isPreset: true }
]

const getCurrentMonthYear = () => {
  return currentDate.value.toLocaleDateString('fr-FR', { 
    month: 'long', 
    year: 'numeric' 
  })
}

const isTravelDay = (date) => {
  return date >= TRIP_START && date <= TRIP_END
}

const getTravelDayNumber = (date) => {
  if (!isTravelDay(date)) return null
  const diffTime = date.getTime() - TRIP_START.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  return diffDays + 1
}

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  const days = []
  const today = new Date()
  
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    
    const dayActivities = activities.value.filter(activity => 
      isSameDay(activity.date, date)
    )
    
    days.push({
      date: date,
      otherMonth: date.getMonth() !== month,
      isToday: isSameDay(date, today),
      activities: dayActivities
    })
  }
  
  return days
})

const isSameDay = (date1, date2) => {
  if (!date1 || !date2) return false
  return date1.toDateString() === date2.toDateString()
}

const selectDate = (day) => {
  selectedDate.value = new Date(day.date)
}

const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}

const formatDate = (date) => {
  return date.toLocaleDateString('fr-FR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const getActivitiesForDate = (date) => {
  return activities.value.filter(activity => isSameDay(activity.date, date))
}

const addActivity = async () => {
  if (!newActivity.value.title || !selectedDate.value) return
  
  try {
    isLoading.value = true
    dbError.value = null
    
    const activityData = {
      title: newActivity.value.title,
      time: newActivity.value.time || '09:00',
      description: newActivity.value.description || '',
      date: new Date(selectedDate.value),
      isPreset: false
    }
    
    // Si on a une connexion DB, utiliser Neon, sinon localStorage
    if (import.meta.env.VITE_DATABASE_URL) {
      const newActivityFromDB = await createActivity(activityData)
      activities.value.push(newActivityFromDB)
    } else {
      // Fallback localStorage
      const activity = {
        ...activityData,
        id: Date.now()
      }
      activities.value.push(activity)
      await saveToLocalStorage()
    }
    
    newActivity.value = { title: '', time: '', description: '' }
  } catch (error) {
    console.error('Error adding activity:', error)
    dbError.value = 'Erreur lors de l\'ajout de l\'activité'
  } finally {
    isLoading.value = false
  }
}

const removeActivity = async (activityId) => {
  try {
    isLoading.value = true
    dbError.value = null
    
    if (import.meta.env.VITE_DATABASE_URL) {
      await deleteActivity(activityId)
    }
    
    activities.value = activities.value.filter(activity => activity.id !== activityId)
    
    if (!import.meta.env.VITE_DATABASE_URL) {
      await saveToLocalStorage()
    }
    
    closeModal()
  } catch (error) {
    console.error('Error removing activity:', error)
    dbError.value = 'Erreur lors de la suppression'
  } finally {
    isLoading.value = false
  }
}

const editActivity = (activity) => {
  modalActivity.value = { ...activity }
  isEditing.value = true
  showModal.value = true
}

const openActivityModal = (activity) => {
  modalActivity.value = { ...activity }
  isEditing.value = false
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  isEditing.value = false
  modalActivity.value = {}
}

const startEditing = () => {
  isEditing.value = true
}

const saveActivity = async () => {
  try {
    isLoading.value = true
    dbError.value = null
    
    if (import.meta.env.VITE_DATABASE_URL) {
      const updatedActivity = await updateActivity(modalActivity.value.id, modalActivity.value)
      const index = activities.value.findIndex(a => a.id === modalActivity.value.id)
      if (index !== -1) {
        activities.value[index] = updatedActivity
      }
    } else {
      // Fallback localStorage
      const index = activities.value.findIndex(a => a.id === modalActivity.value.id)
      if (index !== -1) {
        activities.value[index] = { ...modalActivity.value }
        await saveToLocalStorage()
      }
    }
    
    closeModal()
  } catch (error) {
    console.error('Error saving activity:', error)
    dbError.value = 'Erreur lors de la sauvegarde'
  } finally {
    isLoading.value = false
  }
}

const saveToStorage = async () => {
  // Fonction dépréciée, remplacée par saveToLocalStorage
  await saveToLocalStorage()
}

const saveToLocalStorage = async () => {
  try {
    const customActivities = activities.value.filter(activity => !activity.isPreset)
    localStorage.setItem('morocco-calendar', JSON.stringify(customActivities))
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

const loadFromStorage = async () => {
  try {
    isLoading.value = true
    dbError.value = null
    
    // Essayer de charger depuis Neon Database
    if (import.meta.env.VITE_DATABASE_URL) {
      console.log('🔗 Tentative de connexion à Neon Database...')
      try {
        // Initialiser la DB si nécessaire
        await createActivitiesTable()
        await initializePresetActivities()
        
        // Charger toutes les activités
        const dbActivities = await getActivities()
        activities.value = dbActivities
        console.log('✅ Activités chargées depuis Neon Database')
        return
      } catch (dbError) {
        console.warn('⚠️ Erreur Neon Database, fallback localStorage:', dbError)
      }
    }
    
    // Fallback : Charger les activités prédéfinies + localStorage
    console.log('📱 Utilisation du mode localStorage')
    activities.value = getPresetActivities()
    
    const saved = localStorage.getItem('morocco-calendar')
    if (saved) {
      const parsedActivities = JSON.parse(saved)
      const customActivities = parsedActivities
        .filter(activity => !activity.isPreset)
        .map(activity => ({
          ...activity,
          date: new Date(activity.date)
        }))
      activities.value = [...activities.value, ...customActivities]
    }
    
  } catch (error) {
    console.error('Error loading activities:', error)
    dbError.value = 'Erreur lors du chargement des activités'
    // En cas d'erreur totale, au moins charger les activités prédéfinies
    activities.value = getPresetActivities()
  } finally {
    isLoading.value = false
  }
}

// Activités pré-définies du programme (fallback si pas de DB)
const getPresetActivities = () => {
  const presetActivities = [
    // Jour 1 - 11 octobre
    { date: new Date(2025, 9, 11), time: '10:00', title: '✈️ Arrivée Agadir', description: 'Arrivée à l\'aéroport Al Massira et transfert hôtel', isPreset: true },
    { date: new Date(2025, 9, 11), time: '14:00', title: '🍽️ Déjeuner bienvenue', description: 'Premier repas traditionnel marocain en terrasse', isPreset: true },
    { date: new Date(2025, 9, 11), time: '16:00', title: '🏖️ Découverte plage', description: 'Session détente sur la plage d\'Agadir', isPreset: true },
    { date: new Date(2025, 9, 11), time: '18:00', title: '🌅 Corniche', description: 'Promenade sur la célèbre corniche', isPreset: true },
    
    // Jour 2 - 12 octobre
    { date: new Date(2025, 9, 12), time: '09:00', title: '🏞️ Vallée du Paradis', description: 'Excursion dans la vallée du Paradis', isPreset: true },
    { date: new Date(2025, 9, 12), time: '14:00', title: '🛍️ Souk El Had', description: 'Exploration du plus grand marché de la région', isPreset: true },
    { date: new Date(2025, 9, 12), time: '17:00', title: '🏰 Kasbah Agadir', description: 'Visite des ruines de la Kasbah', isPreset: true },
    
    // Jour 3 - 13 octobre
    { date: new Date(2025, 9, 13), time: '09:00', title: '🚗 Route vers Essaouira', description: 'Départ pour Essaouira (3h de route)', isPreset: true },
    { date: new Date(2025, 9, 13), time: '13:00', title: '🌊 Arrivée Essaouira', description: 'Installation et découverte de la plage', isPreset: true },
    { date: new Date(2025, 9, 13), time: '16:00', title: '🏛️ Remparts', description: 'Visite des remparts et fortifications', isPreset: true },
    
    // Jour 4 - 14 octobre
    { date: new Date(2025, 9, 14), time: '09:00', title: '🎨 Coopératives artisanales', description: 'Découverte marqueterie de thuya et bijoux berbères', isPreset: true },
    { date: new Date(2025, 9, 14), time: '14:00', title: '🦐 Plateau fruits de mer', description: 'Déjeuner spécialités océanes', isPreset: true },
    { date: new Date(2025, 9, 14), time: '16:00', title: '🪁 Kitesurf', description: 'Initiation kitesurf ou équitation sur plage', isPreset: true },
    
    // Jour 5 - 15 octobre
    { date: new Date(2025, 9, 15), time: '09:00', title: '🚗 Route Marrakech', description: 'Départ pour Marrakech (2h30)', isPreset: true },
    { date: new Date(2025, 9, 15), time: '13:00', title: '🌿 Jardin Majorelle', description: 'Visite du célèbre jardin bleu', isPreset: true },
    { date: new Date(2025, 9, 15), time: '15:00', title: '👗 Musée YSL', description: 'Découverte du musée Yves Saint Laurent', isPreset: true },
    { date: new Date(2025, 9, 15), time: '18:00', title: '🏨 Installation', description: 'Check-in hôtel et repos', isPreset: true },
    
    // Jour 6 - 16 octobre
    { date: new Date(2025, 9, 16), time: '09:00', title: '🛍️ Souks médina', description: 'Immersion dans les souks de Marrakech', isPreset: true },
    { date: new Date(2025, 9, 16), time: '13:00', title: '🍽️ Déjeuner médina', description: 'Repas traditionnel dans un riad', isPreset: true },
    { date: new Date(2025, 9, 16), time: '15:00', title: '🏺 Tombeaux Saadiens', description: 'Visite des merveilles architecturales', isPreset: true },
    { date: new Date(2025, 9, 16), time: '19:00', title: '🎭 Jemaa el-Fna', description: 'Spectacle de la place légendaire', isPreset: true },
    
    // Jour 7 - 17 octobre
    { date: new Date(2025, 9, 17), time: '09:00', title: '🐪 Palmeraie aventure', description: 'Balade dromadaire ou cheval dans la palmeraie', isPreset: true },
    { date: new Date(2025, 9, 17), time: '11:00', title: '🛍️ Shopping souvenirs', description: 'Derniers achats épices, huile d\'argan', isPreset: true },
    { date: new Date(2025, 9, 17), time: '13:00', title: '🍽️ Déjeuner adieu', description: 'Repas avec vue panoramique Atlas', isPreset: true },
    { date: new Date(2025, 9, 17), time: '16:00', title: '🎮 Activité groupe', description: 'Karting ou équitation entre potes', isPreset: true },
    
    // Jour 8 - 18 octobre
    { date: new Date(2025, 9, 18), time: '10:00', title: '🧳 Check-out', description: 'Préparatifs départ et bagages', isPreset: true },
    { date: new Date(2025, 9, 18), time: '13:00', title: '✈️ Transfert aéroport', description: 'Route vers aéroport Marrakech-Menara', isPreset: true },
    { date: new Date(2025, 9, 18), time: '16:00', title: '🛫 Vol retour', description: 'Départ pour la France', isPreset: true }
  ]

  return presetActivities.map(activity => ({
    ...activity,
    id: Date.now() + Math.random()
  }))
}

onMounted(async () => {
  await loadFromStorage()
  // Sélectionner le premier jour du voyage par défaut
  selectedDate.value = new Date(TRIP_START)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

.calendrier-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.calendrier-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.calendrier-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.calendrier-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.connection-status {
  margin-top: 1rem;
}

.status {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
}

.status.loading {
  background: rgba(52, 152, 219, 0.3);
  color: rgba(52, 152, 219, 1);
}

.status.connected {
  background: rgba(46, 204, 113, 0.3);
  color: rgba(46, 204, 113, 1);
}

.status.local {
  background: rgba(241, 196, 15, 0.3);
  color: rgba(241, 196, 15, 1);
}

.status.error {
  background: rgba(231, 76, 60, 0.3);
  color: rgba(231, 76, 60, 1);
}

.calendar-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.control-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.current-month {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
}

.calendar-grid {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  margin-bottom: 2rem;
}

.calendar-header-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: rgba(255, 255, 255, 0.2);
}

.day-header {
  padding: 1rem;
  text-align: center;
  font-weight: 700;
  color: white;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-day {
  min-height: 100px;
  padding: 0.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
}

.calendar-day:hover {
  background: rgba(255, 255, 255, 0.15);
}

.calendar-day.other-month {
  color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.02);
}

.calendar-day.today {
  background: rgba(52, 152, 219, 0.3);
  border: 2px solid rgba(52, 152, 219, 0.5);
}

.calendar-day.selected {
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.calendar-day.has-activity {
  background: rgba(46, 204, 113, 0.2);
}

.calendar-day.travel-day {
  background: rgba(52, 152, 219, 0.3);
  border: 1px solid rgba(52, 152, 219, 0.5);
}

.calendar-day.travel-day.has-activity {
  background: rgba(46, 204, 113, 0.4);
}

.day-number {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.activity-list {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1px;
  max-height: 60px;
  overflow: hidden;
}

.activity-item-mini {
  background: rgba(255, 255, 255, 0.8);
  color: #2c3e50;
  padding: 1px 3px;
  border-radius: 3px;
  font-size: 0.65rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  gap: 2px;
}

.activity-item-mini:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: scale(1.02);
}

.activity-item-mini.preset-activity {
  background: rgba(52, 152, 219, 0.8);
  color: white;
}

.activity-time {
  font-weight: 600;
  font-size: 0.6rem;
}

.activity-title-mini {
  font-weight: 500;
  flex: 1;
  overflow: hidden;
}

.more-activities {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 1px 3px;
  border-radius: 3px;
  cursor: pointer;
}

.more-activities:hover {
  background: rgba(255, 255, 255, 0.3);
}

.travel-badge {
  background: rgba(52, 152, 219, 0.3);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 1rem;
}

.activity-textarea {
  flex: 1;
  min-width: 200px;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-height: 60px;
  resize: vertical;
  font-family: inherit;
}

.activity-textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.activity-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.activity-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.activity-item.preset-activity {
  border-left: 4px solid rgba(52, 152, 219, 0.8);
}

.activity-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.activity-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-style: italic;
}

.activity-actions {
  display: flex;
  gap: 0.5rem;
}

.edit-btn {
  background: rgba(52, 152, 219, 0.3);
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.edit-btn:hover {
  background: rgba(52, 152, 219, 0.5);
  transform: scale(1.1);
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: rgba(44, 62, 80, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.modal-input, .modal-textarea {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  font-family: inherit;
}

.modal-input:disabled, .modal-textarea:disabled {
  background: rgba(255, 255, 255, 0.05);
  cursor: not-allowed;
}

.modal-textarea {
  min-height: 80px;
  resize: vertical;
}

.modal-input::placeholder, .modal-textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.edit-modal-btn, .save-btn, .delete-modal-btn, .cancel-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  color: white;
}

.edit-modal-btn {
  background: rgba(52, 152, 219, 0.3);
  border: 1px solid rgba(52, 152, 219, 0.5);
}

.edit-modal-btn:hover {
  background: rgba(52, 152, 219, 0.5);
}

.save-btn {
  background: rgba(46, 204, 113, 0.3);
  border: 1px solid rgba(46, 204, 113, 0.5);
}

.save-btn:hover {
  background: rgba(46, 204, 113, 0.5);
}

.delete-modal-btn {
  background: rgba(231, 76, 60, 0.3);
  border: 1px solid rgba(231, 76, 60, 0.5);
}

.delete-modal-btn:hover {
  background: rgba(231, 76, 60, 0.5);
}

.cancel-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.cancel-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.activity-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
}

.panel-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.activity-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.activity-input {
  flex: 1;
  min-width: 200px;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
}

.activity-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.add-btn {
  background: rgba(46, 204, 113, 0.3);
  border: 1px solid rgba(46, 204, 113, 0.5);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.add-btn:hover {
  background: rgba(46, 204, 113, 0.5);
  transform: translateY(-2px);
}

.activities-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.activity-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.activity-time {
  color: rgba(52, 152, 219, 0.8);
  font-weight: 600;
  font-size: 0.9rem;
}

.activity-title {
  color: white;
  font-weight: 500;
}

.remove-btn {
  background: rgba(231, 76, 60, 0.3);
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: rgba(231, 76, 60, 0.5);
  transform: scale(1.1);
}

.no-activities {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  padding: 2rem;
}

@media (max-width: 768px) {
  .calendrier-container {
    padding: 1rem;
  }
  
  .calendrier-title {
    font-size: 2rem;
  }
  
  .calendar-controls {
    flex-direction: column;
    gap: 1rem;
  }
  
  .current-month {
    font-size: 1.2rem;
  }
  
  .calendar-day {
    min-height: 80px;
  }
  
  .activity-form {
    flex-direction: column;
  }
  
  .activity-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
