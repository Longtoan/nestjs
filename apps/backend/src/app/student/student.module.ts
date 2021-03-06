import { StudentSchema } from './student.model';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'student', schema: StudentSchema }])
  ],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
