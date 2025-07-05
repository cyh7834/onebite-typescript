/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// 모든 프로퍼티를 선택적 프로퍼티로 사용할 수 있음
type MappedUser = {
    //[key in keyof User]: User[key];
    [key in 'id' | 'name' | 'age']?: User[key];
}

type BooleanUser = {
    [key in 'id' | 'name' | 'age']: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
    return {
        id: 1,
        name: "asd",
        age: 33
    };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: MappedUser) {

}

// 바꾸고 싶은 프로퍼티만 함수로 전달하여 사용하고 싶음
updateUser({
    id: 1,
    name: "asd",
    age: 25
})