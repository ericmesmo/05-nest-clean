import { Attachment as PrismaAttachment } from '@prisma/client'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

export class PrismaAnswerAttachmentMapper {
  static toDomain(raw: PrismaAttachment): AnswerAttachment {
    if (!raw.answerId) {
      throw new Error('Invalid attachment type.')
    }

    return AnswerAttachment.create(
      {
        attachmentId: new UniqueEntityId(raw.id),
        answerId: new UniqueEntityId(raw.answerId),
      },
      new UniqueEntityId(raw.id),
    )
  }
}
