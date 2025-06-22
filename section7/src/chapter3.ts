/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K,
    value: V
}

let KeyPair: KeyPair<string, number> = {
    key: "key",
    value: 0
}

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"]
}

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string]: number
}

interface Map<V> {
    [key: string]: V
}

let stringMap: Map<string> = {
    key: "value"
}

let booleanMap: Map<boolean> = {
    key: true
}

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V
}

let stringMap2: Map<string> = {
    key: "value"
}

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 / 개발자
 */

interface Student {
    type: "student";
    school: string
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    // 제네릭을 활용해서 유연한 객체 사용
    // if (user.profile.type !== 'student') {
    //     console.log("잘못된 접근");
        
    //     return;
    // }

    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
    name: "최윤호",
    profile : {
        type: "developer",
        skill: "Typescript"
    }
}

const studentUser: User<Student> = {
    name: "최윤호2",
    profile : {
        type: "student",
        school: "가천대학교"
    }
}

