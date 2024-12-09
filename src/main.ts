import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api') // добавляет префикс api
	app.enableCors() // для связи бэкэнда и фронтенда
	await app.listen(4200)
}
bootstrap()
