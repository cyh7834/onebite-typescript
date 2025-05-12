/**
 * 타입 추론
 * 타입을 명시하지 않아도 초기 값을 기준으로 자동으로 추론
 */

let a = 10;
let b = "hello";
let c = {
    name: "최윤호",
    id: 1
};

let {name, id} = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

/**
 * any 타입의 진화
 * 할당된 값이 바뀔 수록 동적으로 타입이 바뀜
 * 추천하는 방식은 아님
 */
let d; // 암묵적 any
d = 10; // number 타입으로 정의됨
d.toFixed();

d = "string"; // string 타입으로 정의됨
d.toUpperCase();

/**
 * const는 상수이기 때문에 number literal 타입으로 선언됨
 */
const num = 10;

// union 타입으로 정의됨
let arr = [1, "string"];