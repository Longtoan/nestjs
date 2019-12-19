import { Controller, Post, Body,Get } from '@nestjs/common';
import { StudentService } from './student.service';
@Controller('student')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}

  @Post()
  async addStudent(
    @Body('FirstName') prodFirstName: string,
    @Body('LastName') prodLastName: string,
    @Body('Age') prodAge: string,
    @Body('Sex') prodSex: string
  ) {
    const generateId = await this.StudentService.insertStudent(
      prodFirstName,
      prodLastName,
      prodAge,
      prodSex
    );
    return {id:generateId};
  }
  @Get()
  getStudent(){
    const student = this.StudentService.getStudent();
    return student
  }
  
  
}
