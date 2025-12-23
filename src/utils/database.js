// Database utility functions for Neon
import { neon } from '@neondatabase/serverless'

// Get database URL from environment
const getDatabaseUrl = () => {
  // En développement, utiliser VITE_DATABASE_URL
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env.VITE_DATABASE_URL
  }
  // En production Netlify, utiliser NETLIFY_DATABASE_URL
  if (typeof process !== 'undefined' && process.env) {
    return process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL
  }
  // Fallback pour Netlify côté client
  if (typeof window !== 'undefined' && window.ENV) {
    return window.ENV.NETLIFY_DATABASE_URL || window.ENV.DATABASE_URL
  }
  return null
}

// Initialize Neon client avec gestion d'erreur
let sql = null
try {
  const dbUrl = getDatabaseUrl()
  if (dbUrl) {
    sql = neon(dbUrl)
  }
} catch (error) {
  console.warn('Neon database not available:', error.message)
}

// Check if database is available
export const isDatabaseAvailable = () => {
  return sql !== null && getDatabaseUrl() !== null
}

// Activity schema
export const createActivitiesTable = async () => {
  if (!sql) {
    throw new Error('Database connection not available')
  }
  
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS activities (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        activity_date DATE NOT NULL,
        activity_time TIME NOT NULL,
        is_preset BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log('Activities table created successfully')
  } catch (error) {
    console.error('Error creating activities table:', error)
    throw error
  }
}

// Get all activities
export const getActivities = async () => {
  if (!sql) {
    throw new Error('Database connection not available')
  }
  
  try {
    const result = await sql`
      SELECT * FROM activities 
      ORDER BY activity_date, activity_time
    `
    return result.map(activity => ({
      id: activity.id,
      title: activity.title,
      description: activity.description,
      date: new Date(activity.activity_date),
      time: activity.activity_time,
      isPreset: activity.is_preset,
      createdAt: activity.created_at,
      updatedAt: activity.updated_at
    }))
  } catch (error) {
    console.error('Error fetching activities:', error)
    throw error
  }
}

// Get activities for a specific date
export const getActivitiesForDate = async (date) => {
  if (!sql) {
    throw new Error('Database connection not available')
  }
  
  try {
    const dateStr = date.toISOString().split('T')[0]
    const result = await sql`
      SELECT * FROM activities 
      WHERE activity_date = ${dateStr}
      ORDER BY activity_time
    `
    return result.map(activity => ({
      id: activity.id,
      title: activity.title,
      description: activity.description,
      date: new Date(activity.activity_date),
      time: activity.activity_time,
      isPreset: activity.is_preset,
      createdAt: activity.created_at,
      updatedAt: activity.updated_at
    }))
  } catch (error) {
    console.error('Error fetching activities for date:', error)
    throw error
  }
}

// Create a new activity
export const createActivity = async (activityData) => {
  if (!sql) {
    throw new Error('Database connection not available')
  }
  
  try {
    const { title, description, date, time, isPreset = false } = activityData
    const dateStr = date.toISOString().split('T')[0]
    
    const result = await sql`
      INSERT INTO activities (title, description, activity_date, activity_time, is_preset)
      VALUES (${title}, ${description}, ${dateStr}, ${time}, ${isPreset})
      RETURNING *
    `
    
    const activity = result[0]
    return {
      id: activity.id,
      title: activity.title,
      description: activity.description,
      date: new Date(activity.activity_date),
      time: activity.activity_time,
      isPreset: activity.is_preset,
      createdAt: activity.created_at,
      updatedAt: activity.updated_at
    }
  } catch (error) {
    console.error('Error creating activity:', error)
    throw error
  }
}

// Update an activity
export const updateActivity = async (id, activityData) => {
  if (!sql) {
    throw new Error('Database connection not available')
  }

  try {
    const { title, description, date, time } = activityData
    const dateStr = date.toISOString().split('T')[0]

    const result = await sql`
      UPDATE activities
      SET title = ${title},
          description = ${description},
          activity_date = ${dateStr},
          activity_time = ${time},
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
      RETURNING *
    `

    const activity = result[0]
    return {
      id: activity.id,
      title: activity.title,
      description: activity.description,
      date: new Date(activity.activity_date),
      time: activity.activity_time,
      isPreset: activity.is_preset,
      createdAt: activity.created_at,
      updatedAt: activity.updated_at
    }
  } catch (error) {
    console.error('Error updating activity:', error)
    throw error
  }
}

// Delete an activity
export const deleteActivity = async (id) => {
  if (!sql) {
    throw new Error('Database connection not available')
  }

  try {
    await sql`DELETE FROM activities WHERE id = ${id}`
    return true
  } catch (error) {
    console.error('Error deleting activity:', error)
    throw error
  }
}

// Initialize preset activities (run once)
export const initializePresetActivities = async () => {
  if (!sql) {
    throw new Error('Database connection not available')
  }

  try {
    // Check if preset activities already exist
    const existing = await sql`SELECT COUNT(*) as count FROM activities WHERE is_preset = true`
    if (existing[0].count > 0) {
      console.log('Preset activities already exist')
      return
    }

    // Insert preset activities
    const presetActivities = [
      // Jour 1 - 11 octobre
      { date: '2025-10-11', time: '10:00', title: '✈️ Arrivée Agadir', description: 'Arrivée à l\'aéroport Al Massira et transfert hôtel' },
      { date: '2025-10-11', time: '14:00', title: '🍽️ Déjeuner bienvenue', description: 'Premier repas traditionnel marocain en terrasse' },
      { date: '2025-10-11', time: '16:00', title: '🏖️ Découverte plage', description: 'Session détente sur la plage d\'Agadir' },
      { date: '2025-10-11', time: '18:00', title: '🌅 Corniche', description: 'Promenade sur la célèbre corniche' },
      
      // Jour 2 - 12 octobre
      { date: '2025-10-12', time: '09:00', title: '🏞️ Vallée du Paradis', description: 'Excursion dans la vallée du Paradis' },
      { date: '2025-10-12', time: '14:00', title: '🛍️ Souk El Had', description: 'Exploration du plus grand marché de la région' },
      { date: '2025-10-12', time: '17:00', title: '🏰 Kasbah Agadir', description: 'Visite des ruines de la Kasbah' },
      
      // Jour 3 - 13 octobre
      { date: '2025-10-13', time: '09:00', title: '🚗 Route vers Essaouira', description: 'Départ pour Essaouira (3h de route)' },
      { date: '2025-10-13', time: '13:00', title: '🌊 Arrivée Essaouira', description: 'Installation et découverte de la plage' },
      { date: '2025-10-13', time: '16:00', title: '🏛️ Remparts', description: 'Visite des remparts et fortifications' },
      
      // Jour 4 - 14 octobre
      { date: '2025-10-14', time: '09:00', title: '🎨 Coopératives artisanales', description: 'Découverte marqueterie de thuya et bijoux berbères' },
      { date: '2025-10-14', time: '14:00', title: '🦐 Plateau fruits de mer', description: 'Déjeuner spécialités océanes' },
      { date: '2025-10-14', time: '16:00', title: '🪁 Kitesurf', description: 'Initiation kitesurf ou équitation sur plage' },
      
      // Jour 5 - 15 octobre
      { date: '2025-10-15', time: '09:00', title: '🚗 Route Marrakech', description: 'Départ pour Marrakech (2h30)' },
      { date: '2025-10-15', time: '13:00', title: '🌿 Jardin Majorelle', description: 'Visite du célèbre jardin bleu' },
      { date: '2025-10-15', time: '15:00', title: '👗 Musée YSL', description: 'Découverte du musée Yves Saint Laurent' },
      { date: '2025-10-15', time: '18:00', title: '🏨 Installation', description: 'Check-in hôtel et repos' },
      
      // Jour 6 - 16 octobre
      { date: '2025-10-16', time: '09:00', title: '🛍️ Souks médina', description: 'Immersion dans les souks de Marrakech' },
      { date: '2025-10-16', time: '13:00', title: '🍽️ Déjeuner médina', description: 'Repas traditionnel dans un riad' },
      { date: '2025-10-16', time: '15:00', title: '🏺 Tombeaux Saadiens', description: 'Visite des merveilles architecturales' },
      { date: '2025-10-16', time: '19:00', title: '🎭 Jemaa el-Fna', description: 'Spectacle de la place légendaire' },
      
      // Jour 7 - 17 octobre
      { date: '2025-10-17', time: '09:00', title: '🐪 Palmeraie aventure', description: 'Balade dromadaire ou cheval dans la palmeraie' },
      { date: '2025-10-17', time: '11:00', title: '🛍️ Shopping souvenirs', description: 'Derniers achats épices, huile d\'argan' },
      { date: '2025-10-17', time: '13:00', title: '🍽️ Déjeuner adieu', description: 'Repas avec vue panoramique Atlas' },
      { date: '2025-10-17', time: '16:00', title: '🎮 Activité groupe', description: 'Karting ou équitation entre potes' },
      
      // Jour 8 - 18 octobre
      { date: '2025-10-18', time: '10:00', title: '🧳 Check-out', description: 'Préparatifs départ et bagages' },
      { date: '2025-10-18', time: '13:00', title: '✈️ Transfert aéroport', description: 'Route vers aéroport Marrakech-Menara' },
      { date: '2025-10-18', time: '16:00', title: '🛫 Vol retour', description: 'Départ pour la France' }
    ]

    for (const activity of presetActivities) {
      await sql`
        INSERT INTO activities (title, description, activity_date, activity_time, is_preset)
        VALUES (${activity.title}, ${activity.description}, ${activity.date}, ${activity.time}, true)
      `
    }

    console.log('Preset activities initialized successfully')
  } catch (error) {
    console.error('Error initializing preset activities:', error)
  }
}

export default {
  createActivitiesTable,
  getActivities,
  getActivitiesForDate,
  createActivity,
  updateActivity,
  deleteActivity,
  initializePresetActivities
}
