import { Controller, Post, Body, Get} from '@nestjs/common';
import { ScoresService } from './scores.service';
@Controller('scores')
export class ScoresController {
  constructor(private readonly ScoresSer: ScoresService) {}
  @Post()
  async addScores(
    @Body('Mssv') prodMssv: string,
    @Body('Toan') prodToan: number,
    @Body('Ly') prodLy: number,
    @Body('Hoa') prodHoa: number
  ) {
    const generateId = await this.ScoresSer.addScore(prodMssv,prodToan, prodLy, prodHoa);
    return generateId;
  }
  @Get()
  GetScore(){
    const score = this.ScoresSer.GetScore()
    return score
  }
}
