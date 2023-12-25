import { envSchema } from './env/env'
import { AuthModule } from './auth/auth.module'
import { HttpModule } from './http/http.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './http/database/database.module'
import { CryptographyModule } from './cryptography/cryptography.module'
import { EnvModule } from './env/env.module'
import { EventsModule } from './events/events.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    HttpModule,
    AuthModule,
    DatabaseModule,
    CryptographyModule,
    EnvModule,
    EventsModule,
  ],
})
export class AppModule {}
