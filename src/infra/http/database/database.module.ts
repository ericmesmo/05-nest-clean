import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionsRepository } from './prisma/repositorie/prisma-questions-repository'
import { PrismaQuestionCommentsRepository } from './prisma/repositorie/prisma-question-comments-repository'
import { PrismaQuestionAttachmentsRepository } from './prisma/repositorie/prisma-question-attachments-repository'
import { PrismaAnswersRepository } from './prisma/repositorie/prisma-answers-repository'
import { PrismaAnswerCommentsRepository } from './prisma/repositorie/prisma-answer-comments-repository'
import { PrismaAnswerAttachmentsRepository } from './prisma/repositorie/prisma-answer-attachments-repository'

@Module({
  providers: [
    PrismaService,
    PrismaQuestionsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
  ],
  exports: [
    PrismaService,
    PrismaQuestionsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
  ],
})
export class DatabaseModule {}
