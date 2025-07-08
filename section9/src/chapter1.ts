/**
 * 분선적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// 유니온 타입을 타입 변수로 전달한다면 두 타입 변수를 한번씩 나눠서 전달됨
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제
 */

// 특정 유니온 타입에서 특정 타입만 제거하는 식으로 사용 가능. -> string, string이면 never
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;