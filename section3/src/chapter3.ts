/**
 * 객체 타입 간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "기린",
    color: "yellow"
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
};

/**
 * 반대의 경우에는 오류가 발생
 * Dog는 Animal 타입의 프로퍼티를 포함하며 추가로 프로퍼티를 갖음
 * 프로퍼티가 적은 쪽이 슈퍼 타입이 됨
 */

animal = dog;

type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs"
};

book = programmingBook;

/**
 * 초과 프로퍼티 검사가 발생하여 오류 발생
 */
let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    //skill: "reactjs"
}

function func(book: Book) {}

/**
 * 마찬가지로 오류가 발생하고, 사용하려면 선언해둔 변수를 전달해야 함
 */
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    //skill: "reactjs"
})
func(programmingBook);