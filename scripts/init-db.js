// Database initialization script
import { 
  createActivitiesTable, 
  initializePresetActivities 
} from './src/utils/database.js'

async function initializeDatabase() {
  try {
    console.log('🚀 Initializing database...')
    
    // Create tables
    await createActivitiesTable()
    console.log('✅ Activities table created')
    
    // Initialize preset activities
    await initializePresetActivities()
    console.log('✅ Preset activities initialized')
    
    console.log('🎉 Database initialization complete!')
  } catch (error) {
    console.error('❌ Database initialization failed:', error)
    process.exit(1)
  }
}

// Run initialization
initializeDatabase()
