import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { scoresModel } from './scores.model';
import { Model } from 'mongoose';

@Injectable()
export class ScoresService {
  constructor(
    @InjectModel('scores') private readonly scoresModel: Model<scoresModel>
  ) {}
  
  async addScore(Mssv:string,Toan: number, Ly: number, Hoa: number) {

    var diem = (Toan + Ly + Hoa) / 3;
    
    const newScore = this.scoresModel({
      Mssv,
      Toan,
      Ly,
      Hoa,
      diem
    });
    const newScores = await newScore.save();
    return newScores.id as string;
  }
  GetScore() {
    return this.scoresModel.find().populate('student')
  }
}
