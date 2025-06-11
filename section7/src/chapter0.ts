/**
 * 제네릭
 */

function func<T>(value: T): T {
    return value;
}

let num = func(10);

let bool = func(true);

let str = func("String");

// 튜플 타입으로 추론하기 위해 변경
let arr = func<[number, number, number]>([1, 2, 3]);