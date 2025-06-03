/**
 * 인터페이스 합치기
 */

// 타입 별칭과는 달리 동일한 이름으로 두 개의 인터페이스를 선언해도 문제가되지 않음
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "",
    age: 33
}

/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello"
}