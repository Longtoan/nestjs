// import { ScoresModule } from './scores/scores.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    StudentModule,
    // ScoresModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/NEST',
      // 'mongodb+srv://longtoan:01656763706@cluster0-7psbe.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true,useUnifiedTopology: true}
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
