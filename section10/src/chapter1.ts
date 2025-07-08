/**
 * 맵드 타입 기반의 유틸리티 타입 1 - Partial, Required, Readonly
 * Partial - 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]?: T[key];
};

// 게시글 임시 저장
const draft: Partial<Post> = {
    title: "나중",
    content: "초안"
};

type Required<T> = {
    [key in keyof T]-?: T[key];
};

/**
 * Required<T>
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

const withThumbnailPost: Required<Post> = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: ""
}

type Readonly<T> = {
    readonly [key in keyof T]: T[key];
};

/**
 * Readonly<T>
 * 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

const readonlyPost: Readonly<Post> = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
}