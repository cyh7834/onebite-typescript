/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */


type Person = {
    name: string;
    age: number;
};

/**
 * value = > number : toFixed
 * value => string : toUpperCase
 * value => Date : getTime
 * value => Person : name은 age살 입니다.
 */
function func(value: number | string | Date | null | Person) {
    // 조건문 밖에서는 두 함수를 쓰면 에러가 발생
    // value.toFixed();
    // value.toUpperCase();

    // 타입을 조건문으로 좁혀서 타입을 보장해줌
    if (typeof value === "number")
        console.log(value.toFixed());
    else if (typeof value === "string")
        console.log(value.toUpperCase());
    else if (value instanceof Date) // value 가 null일 때 typeof value는 object로 반환됨.
        console.log(value.getTime());
    else if (value && "age" in value) // 객체 타입에는 instanceof를 사용할 수 없음
        console.log(`${value.name}은 ${value.age}살 입니다.`);
}
