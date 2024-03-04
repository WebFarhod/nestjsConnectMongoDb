import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://WebFarhod:ZCxGBx6mksHukY64@nestjs.9uwwjk3.mongodb.net/?retryWrites=true&w=majority&appName=nestjs',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

//
