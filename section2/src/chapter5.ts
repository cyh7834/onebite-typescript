// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입ㅂ

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
};

enum Language {
    KOREAN = "ko",
    ENGLISH = "en"
}

const user1 = {
    name: "최윤호1",
    role: Role.ADMIN
};

const user2 = {
    name: "최윤호2",
    role: Role.USER
};

const user3 = {
    name: "최윤호3",
    role: Role.GUEST
};