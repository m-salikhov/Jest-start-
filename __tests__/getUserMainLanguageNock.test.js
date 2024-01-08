import getUserMainLanguage from '../src/getUserMainLanguage.js';
import nock from 'nock';

nock.disableNetConnect();

test('normal res', async () => {
  nock(/api\.github\.com/)
    .get(/\/users\/m-salikhov\/repos/)
    .reply(200, [
      { id: 1, language: 'TypeScript' },
      { id: 2, language: 'JavaScript' },
      { id: 3, language: 'TypeScript' },
      { id: 4, language: 'Rust' },
    ]);

  const names = await getUserMainLanguage('m-salikhov');
  expect(names).toEqual('TypeScript');
});

test('empty res', async () => {
  nock(/api\.github\.com/)
    .get(/\/users\/m-salikhov\/repos/)
    .reply(200, []);

  const names = await getUserMainLanguage('m-salikhov');
  expect(names).toBeNull();
});
