import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ScoresController } from './scores/scores.controller';
import { ScoresService } from './scores/scores.service';
@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot(
      'mongodb+srv://longtoan:01656763706@cluster0-jft4p.azure.mongodb.net/test?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController, ScoresController],
  providers: [AppService, ScoresService]
})
export class AppModule {}
