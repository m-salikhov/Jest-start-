import OctokitFake from '../__helpers__/OktoKitFake.js';
import getUserMainLanguage from '../src/getUserMainLanguage.js';

describe('getUserMainLanguage', () => {
  test('normal data', async () => {
    const data = [
      { id: 1, language: 'TypeScript' },
      { id: 2, language: 'JavaScript' },
      { id: 3, language: 'TypeScript' },
      { id: 4, language: 'Rust' },
    ];
    const client = new OctokitFake(data);
    const username = 'name';
    const mainLanguage = await getUserMainLanguage(username, client);
    expect(mainLanguage).toEqual('TypeScript');
  });

  test('empty array', async () => {
    const data = [];
    const client = new OctokitFake(data);
    const username = 'name';
    const mainLanguage = await getUserMainLanguage(username, client);
    expect(mainLanguage).toBeNull();
  });
});
