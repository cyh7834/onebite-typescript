// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "I'm", "yoonho"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
];

// 튜플. 타입스크립트에만 존재함. 길이와 타입이 고정된 배열
// 다차원 배열을 사용할 때 유용함
let tup1: [number, number] = [1, 2]; // push나 pop은 그냥 작동하기 때문에 주의해야 함
let tup2: [number, string, boolean] = [1, "2", true];