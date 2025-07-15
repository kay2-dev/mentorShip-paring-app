import { drizzle } from 'drizzle-orm/node-postgres'
import { config } from './src/config/config'

const db = drizzle(config.dbUrl)