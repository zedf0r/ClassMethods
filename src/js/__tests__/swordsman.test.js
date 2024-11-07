import { Swordsman } from "../app";

test('Create swordsman', () => {
    const swordsman = new Swordsman('Leo', 'Swordsman');
    expect(swordsman.name).toBe('Leo');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  })