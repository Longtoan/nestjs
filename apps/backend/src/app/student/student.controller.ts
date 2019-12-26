import { Controller, Post, Body, Get, Res, HttpStatus ,Param} from '@nestjs/common';
import { StudentService } from './student.service';
@Controller('student')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}

  @Post()
  async addStudent(
    @Res() res,
    @Body('Firstname') dFirstname: string,
    @Body('Lastname') dLastname: string,
    @Body('Age') dAge: string,
    @Body('Sex') dSex: string,
    @Body('Result') dResult: string
  ) {
    const newStudent = await this.StudentService.insertStudent(
      dFirstname,
      dLastname,
      dAge,
      dSex,
      dResult
    );
    return res.status(HttpStatus.OK).json({
      message: 'succes',
      post: newStudent
    });
  }
  @Get()
  getAllStudent() {
    const student = this.StudentService.getAllStudent();
    return student;
  }
  
}
