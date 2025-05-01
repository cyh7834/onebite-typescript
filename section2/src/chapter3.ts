// object. 구조를 기준으로 타입을 정의. 구조적 타입 시스템이라고 불림
let user: {
    id?: number; // 물음표를 추가하면 해당 프로퍼티가 있어도 되고 없어도 된다는 뜻. 선택적 타입
    name: string;
} = {
    id: 1,
    name: "최윤호"
};

user = {
    name: "홍길동"
};

let config: {
    readonly apiKey: string; // readonly로 속성 값을 읽기 전용으로 만듦
} = {
    apiKey: "My API Key"
}