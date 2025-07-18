/**
 * 조건부 타입 기반의 유틸리티 타입
 * 
 * - 조건부 타입(Conditional Types)은 타입에 따라 다른 타입을 결정할 수 있게 해주는 TypeScript의 고급 기능입니다.
 * - 아래는 대표적인 조건부 타입 기반 유틸리티: Exclude, Extract, ReturnType
 */

/**
 * Exclude<T, U>
 * 
 * T에서 U에 해당하는 타입을 제거한 타입을 반환합니다.
 * 즉, T에 포함된 타입들 중에서 U와 겹치지 않는 것만 남깁니다.
 * 
 * 사용 예: T가 union 타입일 때, 특정 타입 U를 제거하고 싶은 경우 유용합니다.
 */
type Exclude<T, U> = T extends U ? never : T;

// string | boolean 중 boolean을 제거한 타입 -> string만 남습니다.
type A = Exclude<string | boolean, boolean>; // A는 string

/**
 * Extract<T, U>
 * 
 * T에서 U에 해당하는 타입만 추출한 타입을 반환합니다.
 * 즉, T와 U가 겹치는 부분만 남깁니다.
 * 
 * 사용 예: 여러 타입 중 특정 타입만 골라내고 싶을 때 유용합니다.
 */
type Extract<T, U> = T extends U ? T : never;

// string | boolean 중 boolean만 추출 -> boolean
type B = Extract<string | boolean, boolean>; // B는 boolean

/**
 * ReturnType<T>
 * 
 * 함수 타입 T의 반환 타입을 추출합니다.
 * 함수의 결과가 어떤 타입을 반환하는지 타입 수준에서 알아낼 수 있습니다.
 * 
 * infer 키워드를 사용해서 함수의 반환 타입을 추론(infer)합니다.
 */
type ReturnType<T extends (...args: any) => any> = 
  T extends (...args: any) => infer R ? R : never;

// 테스트 함수
function funcA() {
    return "hello";
}

function funcB() {
    return 10;
}

// funcA는 string을 반환하므로, ReturnA는 string
type ReturnA = ReturnType<typeof funcA>; // string

// funcB는 number를 반환하므로, ReturnB는 number
type ReturnB = ReturnType<typeof funcB>; // number
