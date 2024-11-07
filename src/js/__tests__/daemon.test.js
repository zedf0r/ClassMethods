import { Daemon } from "../app";

test('Create Daemon', () => {
    const daemon = new Daemon('Lucifer', 'Daemon');
    expect(daemon.name).toBe('Lucifer');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  }) 