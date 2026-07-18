import { describe, it, expect } from 'vitest';
import { CreateUser, type User, type UserRepository } from '../src/02-application';

class InMemoryUserRepo implements UserRepository {
  private users: User[] = [];
  async save(user: User) {
    this.users.push(user);
  }
  async findByName(name: string) {
    return this.users.find((u) => u.name === name) ?? null;
  }
}

describe('CreateUser (use case)', () => {
  it('creates and persists a new user', async () => {
    const repo = new InMemoryUserRepo();
    const created = await new CreateUser(repo).execute('ada');
    expect(created.name).toBe('ada');
    expect(await repo.findByName('ada')).not.toBeNull();
  });

  it('rejects a duplicate name', async () => {
    const repo = new InMemoryUserRepo();
    await repo.save({ id: '1', name: 'ada' });
    await expect(new CreateUser(repo).execute('ada')).rejects.toThrow(/exists/i);
  });
});
