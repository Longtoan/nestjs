import { StudentModule } from './student/student.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot(
      'mongodb+srv://longtoan:01656763706@cluster0-jft4p.azure.mongodb.net/test?retryWrites=true&w=majority'
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
