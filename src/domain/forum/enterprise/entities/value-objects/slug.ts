export class Slug {
  public value: string
  private constructor(value: string) {
    this.value = value
  }

  static create(value: string) {
    return new Slug(value)
  }

  /**
   * Receives a string and normalize it as a slug.
   *
   * Example: "Create a slug" => "create-a-slug"
   *
   * @param text text to convert to slug
   */

  static createFromText(text: string) {
    const slug = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')

    return new Slug(slug)
  }
}
