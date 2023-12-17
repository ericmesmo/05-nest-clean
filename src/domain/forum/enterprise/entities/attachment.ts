import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

type AttachmentProps = {
  name: string
  url: string
}

export class Attachment extends Entity<AttachmentProps> {
  get name() {
    return this.props.name
  }

  get url() {
    return this.props.url
  }

  static create(props: AttachmentProps, id?: UniqueEntityId) {
    const attachment = new Attachment(props, id)

    return attachment
  }
}
