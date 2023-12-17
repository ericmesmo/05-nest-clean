import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export type AnswerCommentsRepository = {
  findById(id: string): Promise<AnswerComment | null>
  create(answerComment: AnswerComment): Promise<void>
  delete(answerComment: AnswerComment): Promise<void>
  findManyByAnswerId(
    answerId: string,
    params: PaginationParams,
  ): Promise<AnswerComment[]>
}
