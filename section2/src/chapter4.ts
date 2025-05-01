// 중복 방지를 위해 타입 별칭을 사용
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "최윤호",
    nickname: "cyh7834",
    birth: "1992.02.25",
    bio: "안녕하세요",
    location: "중랑구"
};

let user2: User = {
    id: 1,
    name: "최윤호",
    nickname: "cyh7834",
    birth: "1992.02.25",
    bio: "안녕하세요",
    location: "중랑구"
};

// 인덱스 시그니처. 갯수가 많아지면 하나로 통일하여 선언.
type ContryCodes = {
    [key: string] : string;
};

let countryCodes: ContryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: "uk"
};