/**
 * 맵드 타입 기반의 유틸리티 타입 1 - Partial, Required, Readonly
 * 
 * ▶ Partial<T>
 *    - 특정 객체 타입 T의 모든 프로퍼티를 선택적(? 옵션) 프로퍼티로 바꿔주는 유틸리티 타입입니다.
 *    - 부분적인 데이터만 있을 때 유용합니다 (예: 폼의 일부만 입력된 상태).
 * 
 * ▶ Required<T>
 *    - 특정 객체 타입 T의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 유틸리티 타입입니다.
 *    - 옵셔널 프로퍼티도 필수로 바꿔 강제하고 싶을 때 사용합니다.
 * 
 * ▶ Readonly<T>
 *    - 특정 객체 타입 T의 모든 프로퍼티를 읽기 전용(`readonly`)으로 만들어주는 유틸리티 타입입니다.
 *    - 객체의 상태를 불변으로 유지하고 싶을 때 유용합니다.
 */

// 게시글 타입 정의
interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string; // 옵션 프로퍼티
}

// ------------------------- Partial -------------------------

/**
 * Partial<T>
 * - 모든 프로퍼티를 선택적으로 변경
 * - 즉, 모든 프로퍼티에 `?`를 붙인 것처럼 동작
 */
type Partial<T> = {
    [key in keyof T]?: T[key];
};

// 게시글 임시 저장: 모든 필드를 다 넣지 않아도 오류 없음
const draft: Partial<Post> = {
    title: "나중",
    content: "초안"
};

// ------------------------- Required -------------------------

/**
 * Required<T>
 * - 모든 프로퍼티를 필수로 변경
 * - 기존에 optional(?)이었던 것도 필수로 변경됨
 */
type Required<T> = {
    [key in keyof T]-?: T[key]; // -?는 옵셔널 속성을 제거함
};

// thumbnailURL도 반드시 포함해야 오류 없음
const withThumbnailPost: Required<Post> = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "" // 원래 optional이었지만 필수가 됨
};

// ------------------------- Readonly -------------------------

/**
 * Readonly<T>
 * - 모든 프로퍼티를 읽기 전용으로 변경
 * - 객체 생성 후에는 값을 수정할 수 없음 (컴파일 타임 오류 발생)
 */
type Readonly<T> = {
    readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    // thumbnailURL은 없어도 됨 (여전히 optional)
};

// 아래와 같은 수정 시도는 오류 발생:
// readonlyPost.title = "수정 불가"; // 읽기 전용 프로퍼티

