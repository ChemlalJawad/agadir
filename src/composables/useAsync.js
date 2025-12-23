import { ref } from 'vue'

/**
 * Composable pour gérer les opérations asynchrones avec états de chargement et erreurs
 * @param {Function} asyncFunction - La fonction asynchrone à exécuter
 * @returns {Object} - { loading, error, data, execute }
 */
export function useAsync(asyncFunction) {
  const loading = ref(false)
  const error = ref(null)
  const data = ref(null)

  const execute = async (...args) => {
    loading.value = true
    error.value = null

    try {
      const result = await asyncFunction(...args)
      data.value = result
      return result
    } catch (err) {
      error.value = err.message || 'Une erreur est survenue'
      console.error('Async error:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    data,
    execute
  }
}
