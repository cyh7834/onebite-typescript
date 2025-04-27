// number ': number' = 타입 주석 또는 타입 어노테이션이라고 불림
let num1: number = 123;
let num2: number = -Infinity;
let num3: number = NaN;

// string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = 'hello';
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 다른 타입의 변수를 선언해도 잠깐 null을 넣는 상황이 생기지만, 타입스크립트는 허용하지 않음. strinctNullChecks 옵션을 사용하면 됨.

// 리터럴. 값 그 자체가 타입이 됨. 다른 값을 지정할 수 없음.
let numA: 10 = 10;
let strA: "hello" = "hello";