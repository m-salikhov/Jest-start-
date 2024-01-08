import nock from 'nock';

test('getPrivateForkNames', async () => {
  nock(/api\.github\.com/) // это регулярное выражение чтобы не указывать полный адрес
    // get — для GET-запросов, post — для POST-запросов и так далее
    .get(/\/orgs\/hexlet\/repos/)
    .reply(200, [
      { fork: true, name: 'one' },
      { fork: false, name: 'two' },
    ]);

  const names = await getPrivateForkNames('hexlet');
  expect(names).toEqual(['one']);
});
