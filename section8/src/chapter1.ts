/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "Asd",
    age: 1
};

getPropertyKey(person, "name");

// 변수에 타입을 뽑아내어 사용
type AnotherPerson = typeof person;