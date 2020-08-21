import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { findEnv } from '../../find-env';

require('dotenv').config({ path: findEnv() });

class ConfigService {
    constructor(private env: { [k: string]: string | undefined }) { }

    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }

    public getPort() {
        return this.getValue('PORT', true);
    }

    public isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        if (this.isProduction() === true) {
            return {
                name: 'default',
                type: 'postgres',
                url: this.getValue('DATABASE_URL'),
                synchronize: false,
                logging: true,
                entities: ['dist/**/*.entity{.ts, .js}'],
                migrationsTableName: 'migration',
    
                migrations: ['dist/src/migration/*.ts'],
    
                cli: {
                    migrationsDir: 'dist/src/migration',
                },
                ssl: { rejectUnauthorized: true }
            } 
        } else {
            return {
            type: 'postgres',

            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),

            entities: ['**/*.entity{.ts,.js}'],

            migrationsTableName: 'migration',

            migrations: ['src/migration/*.ts'],

            cli: {
                migrationsDir: 'src/migration',
            }
        }
        }
    }
}

const configService = new ConfigService(process.env).ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE'
]);

export { configService }
