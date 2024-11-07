import { Magician } from "../app";

test('Create Magician', () => {
    const magician = new Magician('Smith', 'Magician');
    expect(magician.name).toBe('Smith');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  }) 