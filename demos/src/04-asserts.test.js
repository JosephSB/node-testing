test('test object', () => {
  const data = { name: 'joseph' };
  data.lastname = 'silva';
  expect(data).toEqual({ name: 'joseph', lastname: 'silva' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  expect('Christopher').toMatch(/stop/);
});

test('list / arrays', () => {
  expect([1, 2, 3]).toContain(3);
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});
