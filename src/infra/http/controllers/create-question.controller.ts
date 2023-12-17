import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import { TokenSchema } from '@/infra/auth/jwt.strategy'
import { ZodValidationPip } from '../pipes/zod-validation.pipe'
import { PrismaService } from '@/infra/http/database/prisma/prisma.service'
import { z } from 'zod'

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(
    @CurrentUser() user: TokenSchema,
    @Body(new ZodValidationPip(createQuestionBodySchema))
    body: CreateQuestionBodySchema,
  ) {
    const { title, content } = body

    await this.prisma.question.create({
      data: {
        title,
        content,
        slug: 'asd',
        authorId: user.sub,
      },
    })
  }
}
