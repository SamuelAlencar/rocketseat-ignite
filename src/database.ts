import { knex as setupknex, Knex } from 'knex'
import { env } from './env'

// console.log(process.env)

if(!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL env not found.')
}

export const config:Knex.Config = 
{
    client: env.DATABASE_CLIENT,
    connection: env.DATABASE_CLIENT === 'sqlite' 
    ? {
        filename: env.DATABASE_CLIENT,
    } 
    : env.DATABASE_CLIENT,
    
useNullAsDefault: true,
    migrations: {
        extension:'ts',
        directory: './db/migrations'
    }
}

export const knex = setupknex (config)