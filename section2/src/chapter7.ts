// void
// 공허. 아무 것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}

// never
// 불가능한 타입
// 정상 종료가 될 수 없는, 반환 값이 존재하는 것 자체가 모순이라는 뜻
function func3(): never {
    while(true) {}
}

function func4(): never {
    throw new Error();
}