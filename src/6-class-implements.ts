interface Person {
    name: string;
    age: number;
    introduce(): string;
}

class PersonClass implements Person {
    constructor(public name: string, public age: number) {}

    introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

function getPeople(): Person[] {
    return [
        new PersonClass('John', 25),
        new PersonClass('Jane', 30),
        new PersonClass('Alice', 22)
    ];
}

const people: Person[] = getPeople();

people.forEach(person => {
    console.log(person.introduce());
});
