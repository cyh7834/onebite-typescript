/**
 * 맵드 타입 기반의 유틸리티 타입 2 - Pick, Omit, Record
 * Pick<T, K> - 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

// 게시글 타입 정의
interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

/**
 * Pick<T, K>
 * - 타입 T에서 key K만 골라 새로운 타입을 만든다
 * - keyof T를 통해 유효한 키만 K로 지정 가능
 */
type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
}

// Post 타입에서 title, content만 선택한 타입
const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: "옛날 글",
    content: "옛날 컨텐츠"
};

/**
 * Omit<T, K>
 * - 타입 T에서 key K를 제외한 나머지를 선택한 타입
 * - Exclude<keyof T, K>로 제외 후 Pick을 다시 사용
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Post 타입에서 title을 제거한 타입
const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
};

/**
 * Record<K, V>
 * - K: key 집합 (string, number, symbol)
 * - V: 각 키에 대응되는 값 타입
 * - 모든 key가 동일한 value 타입을 가질 때 사용
 */
type Record<K extends keyof any, V> = {
    [key in K]: V
};

// 기존 방식: 각 썸네일 사이즈마다 수동 정의
type ThumbnailLegacy = {
    large: { url: string },
    medium: { url: string },
    small: { url: string }
};

// Record를 사용하여 같은 구조를 간결하게 정의
type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;