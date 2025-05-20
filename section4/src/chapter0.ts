/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법은
// 어떤 매개변수를 받고, 어떤 결과 값을 반환하는지 이야기
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입] 결과 값을 반환하는지 이야기
function func(a: number, b: number): number {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 선택적 매개변수는 무조건 맨 뒤로 가야함
 */

function introduce(name = "최윤호", height?: number) {
    console.log(`name : ${name}`);
    console.log(`height : ${height}`);
}

introduce("최윤호", 176);
introduce("최윤호");

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);