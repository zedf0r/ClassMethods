import {Zombie} from '../app'
test('Create Zombie', () => {
    const zombie = new Zombie('Zona', 'Zombie');
    expect(zombie.name).toBe('Zona');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  }) 
  
  
  