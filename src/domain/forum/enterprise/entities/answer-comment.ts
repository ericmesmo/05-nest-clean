import { Optional } from '@/core/types/optional'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Comment, CommentProps } from './comment'

export type AnswerCommentProps = CommentProps & {
  answerId: UniqueEntityId
}

export class AnswerComment extends Comment<AnswerCommentProps> {
  get answerId() {
    return this.props.answerId
  }

  static create(
    props: Optional<AnswerCommentProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const answerComment = new AnswerComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return answerComment
  }
}
