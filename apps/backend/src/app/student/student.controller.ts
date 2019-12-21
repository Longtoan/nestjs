import { Controller, Post, Body, Get, Res, HttpStatus ,Param} from '@nestjs/common';
import { StudentService } from './student.service';
@Controller('student')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}

  @Post()
  async addStudent(
    @Res() res,
    @Body('FirstName') prodFirstName: string,
    @Body('LastName') prodLastName: string,
    @Body('Age') prodAge: string,
    @Body('Sex') prodSex: string
  ) {
    const newStudent = await this.StudentService.insertStudent(
      prodFirstName,
      prodLastName,
      prodAge,
      prodSex
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
