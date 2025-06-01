/**
 * 인터페이스 확장하기
 */

// 인터페이스가 아니고 타입 별칭이어도 사용 가능
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    name: "", // 재정의 시에는 원래 정의 되어있던 타입의 서브타입이어야 함
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    age: 0,
    isBark: true
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}