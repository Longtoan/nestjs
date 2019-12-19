import { Controller, Post, Body } from '@nestjs/common';
import { ScoresService } from './scores.service';
@Controller('scores')
export class ScoresController {
  constructor(private readonly ScoresSer: ScoresService) {}
  @Post()
  addScores(
    @Body('mon') prodMon: number,
    @Body('xeploai') prodxeploai: string
  ) {
      const generateId = this.ScoresSer.addScore(
          prodMon,
          prodxeploai
      )
      return generateId
  }
}
