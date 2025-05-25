/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환 값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환 값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; error. 다운 캐스팅

/**
 * 기준2. 매개변수가 호환되는가
 */


// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

/**
 * d는 오직 10만 받을 수 있는데, c = d를 하면 c(5)처럼 5를 넘길 수도 있음 → d는 처리 불가능한 값이 들어올 수 있음 
 * 즉, 좁은 타입을 받는 함수를 넓은 타입을 받는 자리에 대입하면 위험 
 */
// c = d; 반환 값과는 다르게 업 캐스팅 때는 에러가 발생.

/**
 * c는 number라면 뭐든 처리 가능
 * d(10)을 호출하면 결국 c(10)이 호출됨 → 안전
 * 즉, 넓은 타입을 받는 함수를 좁은 타입을 받는 자리에 대입하는 것은 괜찮음
 */
d = c;

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {};
let dogFunc = (dog: Dog) => {};

// animalFunc = dogFunc; 에러. color가 Animal에는 정의되어 있지 않음

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number, ) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 매개변수가 더 적을 때만 호환 됨
