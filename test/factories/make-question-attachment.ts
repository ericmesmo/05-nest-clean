import {
  QuestionAttachment,
  QuestionAttachmentProps,
} from '@/domain/forum/enterprise/entities/question-attachment'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

export function makeQuestionAttachment(
  override: Partial<QuestionAttachmentProps> = {},
  id?: UniqueEntityId,
) {
  const question = QuestionAttachment.create(
    {
      questionId: new UniqueEntityId(),
      attachmentId: new UniqueEntityId(),
      ...override,
    },
    id,
  )

  return question
}
