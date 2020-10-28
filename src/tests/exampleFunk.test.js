import obj from './example_components/exampleFunk';

describe('Тесты для примера', () => {
  it('При передачи первого значения', () => {
    expect(obj.getByIndex(0)).toBe(1);
  });

  it('При передачи последнего значения', () => {
    expect(obj.getByIndex(obj.array.length - 1)).toBe(5);
  });

  it('Когда задаем 11', () => {
    expect(obj.getByIndex(11)).toBe(2);
  });
  
  it('Проверка когда добавляем к примеру 6 в конец массива', () => {
    obj.push(6);
    expect(obj.getByIndex(obj.array.length - 1)).toBe(6);
  });

  it('Проверка когда добавляем к примеру 6 в конец массива, чему равно 11 индекс', () => {
    expect(obj.getByIndex(11)).toBe(6);
  });

  it('Проверка когда добавляем к примеру 6 в конец массива, чему равно 12 индекс', () => {
    expect(obj.getByIndex(12)).toBe(1);
  });
});