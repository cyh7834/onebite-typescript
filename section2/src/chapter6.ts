// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
anyVar = "수정";
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // 타입 검사를 다 통과히자만 런타임 오류가 발생

let num: number = 10;
num = anyVar;


// unknown. any 처럼 여러 타입을 저장할 수 있지만 다른 타입 변수에 대입할 수 없음. any보다는 unknown을 사용하는게 좋음
let unKnownVar: unknown;
unKnownVar = "";
unKnownVar = 1;
unKnownVar = () => {};

let num2: number = 10;
//num2 = unKnownVar; 에러

if (typeof unKnownVar === "number") {
    num = unKnownVar;
}