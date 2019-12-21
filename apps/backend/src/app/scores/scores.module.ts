import { scoresModel } from './scores.model';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'scores', schema: scoresModel }])
  ],
  controllers: [ScoresController],
  providers: [ScoresService]
})
export class ScoresModule {}
