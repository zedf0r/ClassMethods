export class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Неправильный ввод имени')
        }
        const typeString = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie'
        ];

        if (!typeString.includes(type)) {
            throw new Error('Неправильный ввод типа')
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health !== 0) {
            this.level = this.level + 1;
            this.attack = this.attack * 1.2;
            this.defence = this.defence * 1.2;
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить левел умершего')
        }
        
    }
}

export class Bowman extends Character{
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character{
    constructor(name, type) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character{
    constructor(name, type) {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Daemon extends Character{
    constructor(name, type) {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character{
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character{
    constructor(name, type) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}