/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void; // 오버로딩 시에는 호출 시그니처를  사용해야함
    sayHi(a: number, b: number): void;
}



const person : Person = {
    name: "최윤호",
    age: 33,
    sayHi: function () {
        console.log("Hi");
    }
};


