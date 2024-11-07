import { Undead } from "../app";

test('Create Undead', () => {
    const undead = new Undead('Sam', 'Undead');
    expect(undead.name).toBe('Sam');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  })