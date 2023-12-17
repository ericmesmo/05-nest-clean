import { faker } from '@faker-js/faker'

import {
  AnswerComment,
  AnswerCommentProps,
} from '@/domain/forum/enterprise/entities/answer-comment'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

export function makeAnswerComment(
  override: Partial<AnswerCommentProps> = {},
  id?: UniqueEntityId,
) {
  const answer = AnswerComment.create(
    {
      authorId: new UniqueEntityId(),
      answerId: new UniqueEntityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answer
}
