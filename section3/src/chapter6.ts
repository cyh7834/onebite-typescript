/**
 * 타입 단언
 */

/**
 * person을 선언만 해두고 값을 나중에 저장하고 싶을 때는 어떻게 할까?
 */
type Person = {
    name: string;
    age: number;
}

// 나중에 Person 타입의 값이 들어갈 것이라고 컴파일러에게 알려줌. 타입 단언
let person = {} as Person;
person.name = "최윤호";
person.age = 33;

type Dog = {
    name: string;
    color: string;
};

// 초과 property는 허용되지 않는데 추가해야되는 상황이 발생하면?
let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// number와 string은 집합적으로 겹치는 부분이 없기 때문에 오류가 발생함
//let num3 = 10 as string;

/**
 * const 단언
 * const로 선언한 것과 동일한 단언
 * 객체 타입에 활용할 때 좋음
 */

let num4 = 10 as const;

// const로 선언되기 때문에 수정이 불가능해짐
let cat = {
    name: "야옹이",
    color: "yellow"
} as const;

/**
 * Non Null 단언
 * 어떤 값이 undefined 나 Null 이 아니라고 단언
 */

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "게시글1",
    author: "최윤호"
};

// 물음표 말고 느낌표를 사용하여 author는 null이거나 undefined가 아니다를 알려 줌
const len: number = post.author!.length;