/**
 * infer
 */

//조건부 타입 내에서 특정 타입만 추론

type Func = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<Func>;

type B = ReturnType<FuncB>;

/**
 * 예제
 */

// promise의 타입만 떼와서 사용

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과 값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;
