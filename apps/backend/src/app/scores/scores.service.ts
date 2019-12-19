import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { scoresModel } from './scores.model';
import { Model } from 'mongoose';

@Injectable()
export class ScoresService {
  constructor(
    @InjectModel('scores') private readonly scoresModel: Model<scoresModel>
  ) {}

  addScore(
    mon: {
      Toan: number;
      Ly: number;
      Hoa: number;
    },
    xeploai: {
      type: String;
    }
  ) {
    const newScore = this.scoresModel({
      mon,
      xeploai
    });
    const newScores = newScore.save();
    return newScores;
  }
}
