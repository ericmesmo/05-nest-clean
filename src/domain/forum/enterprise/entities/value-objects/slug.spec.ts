import { Slug } from './slug'

test('it should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('Create a slug')

  expect(slug.value).toEqual('create-a-slug')
})
