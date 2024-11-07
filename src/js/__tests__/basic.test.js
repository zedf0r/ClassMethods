import {Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie} from '../app';

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

test('Create swordsman', () => {
  const swordsman = new Swordsman('Leo', 'Swordsman');
  expect(swordsman.name).toBe('Leo');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
})

test('Create Magician', () => {
  const magician = new Magician('Smith', 'Magician');
  expect(magician.name).toBe('Smith');
  expect(magician.type).toBe('Magician');
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
}) 

test('Create Daemon', () => {
  const daemon = new Daemon('Lucifer', 'Daemon');
  expect(daemon.name).toBe('Lucifer');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
}) 

test('Create Undead', () => {
  const undead = new Undead('Sam', 'Undead');
  expect(undead.name).toBe('Sam');
  expect(undead.type).toBe('Undead');
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
})

test('Create Zombie', () => {
  const zombie = new Zombie('Zona', 'Zombie');
  expect(zombie.name).toBe('Zona');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
}) 


































// test('Create with correct name and stats', () => {
//   const bowman = new Bowman('Robin', 'Bowman');
//   expect(bowman.name).toBe('Robin');
//   expect(bowman.type).toBe('Bowman');
//   expect(bowman.health).toBe(100);
//   expect(bowman.level).toBe(1);
//   expect(bowman.attack).toBe(25);
//   expect(bowman.defence).toBe(25);
// });


// test('Create with error name', () => {
//   expect( () => new Bowman('R')).toThrow('Неправильный ввод');
//   expect( () => new Bowman(' ')).toThrow('Неправильный ввод');
// })

// test('Create with error type', () => {
//   expect( () => new Bowman('Robert', 'Bow')).toThrow('Неправильный ввод');

// })