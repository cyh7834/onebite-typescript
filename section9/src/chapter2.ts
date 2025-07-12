/**
 * infer 키워드
 * - 조건부 타입 내에서 타입을 추론할 때 사용된다.
 * - 주로 제네릭 타입을 분해하거나 특정 타입만 추출할 때 활용된다.
 */

// 예시 함수 타입 선언
type Func = () => string;   // string을 반환하는 함수
type FuncB = () => number;  // number를 반환하는 함수

/**
 * ReturnType<T>
 * - 함수 타입 T가 () => R 형태일 때, 그 반환 타입 R을 추론하여 반환한다.
 * - 그렇지 않으면 never를 반환한다.
 */
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<Func>;   // string
type B = ReturnType<FuncB>;  // number

// 위 결과:
// - Func는 () => string이므로 infer R = string => ReturnType<Func> = string
// - FuncB는 () => number이므로 infer R = number => ReturnType<FuncB> = number

/**
 * PromiseUnpack<T>
 * - 제네릭 타입 T가 Promise<R> 형태일 때, 내부 값 R을 추론하여 반환한다.
 * - 그렇지 않으면 never를 반환한다.
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

// 사용 예시
type PromiseA = PromiseUnpack<Promise<number>>; // number
type PromiseB = PromiseUnpack<Promise<string>>; // string

// 위 결과:
// - Promise<number>는 infer R = number => PromiseUnpack = number
// - Promise<string>은 infer R = string => PromiseUnpack = string
