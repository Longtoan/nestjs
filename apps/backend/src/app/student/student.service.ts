import { Injectable, Res, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { StudentSchema } from './student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('student') private readonly StudentModel: Model<StudentSchema>
  ) {}

  async insertStudent(
    Firstname: string,
    Lastname: string,
    Age: number,
    Sex: string,
    Result: string
  ) {
    const newStudent = new this.StudentModel({
      Firstname,
      Lastname,
      Age,
      Sex,
      Result
    });
    const result = await newStudent.save();
    return result.id as string;
  }
  getAllStudent() {
    return this.StudentModel.find().exec();
  }
  async deleStudent(id:string) {
    return await this.StudentModel.deleteOne({ _id: id }).exec();
  }
}
