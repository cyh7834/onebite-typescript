/**
 * 사용자 정의 타입가드
 * 서로소 유니온 타입을 사용 못하는 상황이라고 가정
 */

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

// 우리가 만든 타입 확인 함수로는 타입이 정의되지않음. 그래서 True를 리턴한다면 타입을 정의하게 해야함
function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined
}

function warning(animal: Animal) {
    if (isDog(animal)) {

    }
    
}