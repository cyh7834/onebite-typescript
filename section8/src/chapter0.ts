/**
 * 인덱스드 엑세스 타입
 * 객체 타입에서 특정 프로퍼티만 추출해서 정의에 사용
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    }
}

function printAuthorInfo (author: Post["author"]) {
    console.log(`${author.name}-${author.id}`);
}

const post: Post = {
    title: "1",
    content: "2",
    author: {
        id: 1,
        name: "d"
    }
};

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    }
}[];

/**
 * 
 */
function printAuthorInfo2 (author: PostList[number]["author"]) {
    console.log(`${author.name}-${author.id}`);
}

const post2: PostList[number] = {
    title: "1",
    content: "2",
    author: {
        id: 1,
        name: "d"
    }
};

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];