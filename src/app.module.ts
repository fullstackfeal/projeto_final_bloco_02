import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Categoria } from './produto/entities/categoria.entity'
import { CategoriaModule } from './produto/categoria.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'NovaSenhaF0rte!',
      database: 'db_farmacia',
      entities: [Categoria],
      synchronize: true,
      logging: true,
    }),
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
