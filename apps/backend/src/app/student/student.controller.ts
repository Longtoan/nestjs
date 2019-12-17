import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
Controller('student');
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}
  @Post()
  addStudent(
    @Body('FirstName') prodFirstName: string,
    @Body('LastName') prodLastName: string,
    @Body('Age') prodAge: number,
    @Body('Sex') prodSex: string
  ) {
    const generateId = this.StudentService.insertStudent(
      prodFirstName,
      prodLastName,
      prodAge,
      prodSex
    );
    return generateId;
  }
}
