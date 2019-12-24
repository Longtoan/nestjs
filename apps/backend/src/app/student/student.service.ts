import { Injectable, Res } from '@nestjs/common';
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
    Sex: string,
    Mssv: string
  ) {
    const newStudent = new this.StudentModel({
      FirstName,
      LastName,
      Age,
      Sex,
      Mssv
    });
    const result = await newStudent.save();
    return result.id as string;
  }
  getAllStudent() {
    return this.StudentModel.find()
      .populate('scores')
      .exec();
  }
  
}
  