import {
  Controller,
  Post,
  Body,
  Get,
  Res,
  HttpStatus,
  Delete,
  Param
} from '@nestjs/common';
import { StudentService } from './student.service';
import { error } from 'util';
@Controller('student')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}

  @Post()
  async addStudent(
    @Res() res,
    @Body('Firstname') dFirstname: string,
    @Body('Lastname') dLastname: string,
    @Body('Age') dAge: number,
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
  @Delete(':id')
  async RemoveStudent(@Param('id') id: string) {
    if (id) {
      await this.StudentService.deleStudent(id);
    } else {
      return { message: error };
    }
  }
}
