// Sportsperson.ts
class Sportsperson {
    constructor(
        public name: string,
        public age: number,
        public sport: string
    ) {}

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Sport: ${this.sport}`;
    }

    train(): string {
        return `${this.name} is training.`;
    }
}

// Footballer.ts
class Footballer extends Sportsperson {
    constructor(
        name: string,
        age: number,
        public position: string,
        public goalsScored: number
    ) {
        super(name, age, 'Football');
    }

    scoreGoal(): string {
        this.goalsScored += 1;
        return `${this.name} scored a goal! Total goals: ${this.goalsScored}`;
    }

    getDetails(): string {
        return `${super.getDetails()}, Position: ${this.position}, Goals Scored: ${this.goalsScored}`;
    }
}


// BasketballPlayer.ts
class BasketballPlayer extends Sportsperson {
    constructor(
        name: string,
        age: number,
        public position: string,
        public pointsScored: number
    ) {
        super(name, age, 'Basketball');
    }

    scorePoint(points: number): string {
        this.pointsScored += points;
        return `${this.name} scored ${points} points! Total points: ${this.pointsScored}`;
    }

    getDetails(): string {
        return `${super.getDetails()}, Position: ${this.position}, Points Scored: ${this.pointsScored}`;
    }
}

// main.ts
const footballer = new Footballer('Cristiano Ronaldo', 36, 'Forward', 780);
console.log(footballer.getDetails());
console.log(footballer.scoreGoal());

const basketballPlayer = new BasketballPlayer('LeBron James', 36, 'Forward', 35000);
console.log(basketballPlayer.getDetails());
console.log(basketballPlayer.scorePoint(30));

