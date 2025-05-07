/**
 * Unknown 타입. 최상위 슈퍼타입
 */

function unKnownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;
}

/**
 * Never 타입. 모든 집합의 부분 집합. 최하위 타입. 공집합.
 */

function neverExam() {
    function neverFunc(): never {
        while(true) {}
    }

    let num: number = neverFunc(); // 업 캐스팅
}

/**
 * Void 타입
 */

function voidExam() {
    function viodFunc(): void {
        console.log("hi");

        return undefined; // 업 캐스팅과 비슷한 상황
    }

    let voidVar: void = undefined;
}

/**
 * Any 타입. 최상위 타입과 최하위 타입 모두 포함. never 제회
 */

function anyExam() {
    let unkKnownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;

    anyVar = unkKnownVar;

    undefinedVar = anyVar;
}