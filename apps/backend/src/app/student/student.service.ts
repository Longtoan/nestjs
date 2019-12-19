import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { StudentSchema } from './student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('student') private readonly StudentModel: Model<StudentSchema>
  ) {}

  async insertStudent(
    FirstName: string,
    LastName: string,
    Age: string,
    Sex: string
  ) {
    const newStudent = new this.StudentModel({
      FirstName,
      LastName,
      Age,
      Sex
    });
    const result = await newStudent.save();
    return result.id as string;
  }
  getStudent() {
    return this.StudentModel.find().exec()
  }
}
