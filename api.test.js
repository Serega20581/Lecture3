import { fetchPost } from './api.js';

describe('fetchPost function', () => {
  test('успешное получение поста с id = 1', async () => {
    const post = await fetchPost(1);
    expect(post).toEqual({ id: 1, title: 'First Post' });
  });

  test('ошибка при неизвестном id', async () => {
    await expect(fetchPost(999)).rejects.toThrow('Post not found');
  });

  test('длина свойства title в успешном результате', async () => {
    const post = await fetchPost(1);
    expect(post.title.length).toBeGreaterThan(0);
    expect(post.title).toHaveLength(10);
  });
});