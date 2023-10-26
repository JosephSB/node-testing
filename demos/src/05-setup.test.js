describe('group 1', () => {
  beforeAll(() => {
    // antes de todas las pruebas
    // exam
    // up bd
  });

  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    expect(1 + 3).toBe(4);
  });

  beforeEach(() => {
    // antes de cada prueba
  });

  afterEach(() => {
    // despues de cada prueba
  });

  describe('group 2', () => {
    beforeAll(() => {
      // antes de todas las pruebas del grupo 2
      // exam
      // up bd
    });

    test('case 3', () => {
      expect(1 + 1).toBe(2);
    });

    test('case 4', () => {
      expect(1 + 3).toBe(4);
    });
  });

  afterAll(() => {
    // despues de todas las pruebas
    // exam
    // down bd
  });
});
