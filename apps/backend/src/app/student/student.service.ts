import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly StudentModel: Model<Student>
  ) {}

  insertStudent(FirstName: string, LastName: string, age: number, sex: string) {
    const newStudent = new this.StudentModel({
      FirstName,
      LastName,
      age,
      sex
    });
    const result = newStudent.save();
    return result.id as string;
  }
}
