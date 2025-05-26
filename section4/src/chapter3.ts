/**
 * 함수 오버로딩
 */

// 함수 오버로딩을 하기 위해선 버전을 명시해야 함. 이런걸 오버로드 시그니처라고 함.
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부. 구현 시그니처. 오버로드 시그니처에 맞게 ? 를 붙힘
function func(a: number, b?: number, c?: number) {
    if (typeof b === "number" && typeof c === "number") {

    }
    else {
        
    }
}

// 오버로드 시그니처에 존재하는 타입들은 호출이 가능해짐
//func();
func(1);
//func(1, 2);
func(1, 2, 3);