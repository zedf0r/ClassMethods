import {Bowman} from '../app';

test('Create with correct name and stats', () => {
  const bowman = new Bowman('Robert', 'Bowman');
  expect(bowman.name).toBe('Robert');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
})

test ('Create with error name', () => {
  expect(() => new Bowman('R', 'Bowman')).toThrow('Неправильный ввод');
  expect(() => new Bowman(' ', 'Bowman')).toThrow('Неправильный ввод');
  expect(() => new Bowman(151251, 'Bowman')).toThrow('Неправильный ввод');
})

test ('Create with error type', () => {
  expect(() => new Bowman('Robert', ('Bow'))).toThrow('Неправильный ввод');
  expect(() => new Bowman('Robert', (' '))).toThrow('Неправильный ввод');
  expect(() => new Bowman('Robert', (123))).toThrow('Неправильный ввод');
})

test ('LevelUp', () => {
  const bowman = new Bowman('Robert', 'Bowman');
  bowman.levelUp();
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);
  expect(bowman.health).toBe(100)
})

test ('The error of leveling up for the dead', () => {
  const bowman = new Bowman('Robert', 'Bowman');
  bowman.health = 0;
  expect( () => bowman.levelUp()).toThrow('Нельзя повысить')
})

test ('Damage check', () => {
  const bowman = new Bowman('Robert', 'Bowman');
  bowman.damage(15);
  expect(bowman.health).toBe(88.75)
})