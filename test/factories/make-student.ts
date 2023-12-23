import { faker } from '@faker-js/faker'

import {
  Student,
  StudentProps,
} from '@/domain/forum/enterprise/entities/student'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/infra/http/database/prisma/prisma.service'
import { PrismaStudentMapper } from '@/infra/http/database/prisma/mappers/prisma-student-mapper'

export function makeStudent(
  override: Partial<StudentProps> = {},
  id?: UniqueEntityId,
) {
  const student = Student.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...override,
    },
    id,
  )

  return student
}

@Injectable()
export class StudentFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaStudent(
    override: Partial<StudentProps> = {},
  ): Promise<Student> {
    const student = makeStudent(override)

    await this.prisma.user.create({
      data: PrismaStudentMapper.toPrisma(student),
    })

    return student
  }
}
