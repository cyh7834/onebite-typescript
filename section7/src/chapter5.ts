/**
 * 프로미스와 제네릭
 */

import { resolve } from "path";

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        //resolve(20);
        reject("실패");
    }, 3000);
})

promise.then((response) => {
    console.log(response * 10);
});

// 프로미스의 reject는 타입이 any로 고정되기 때문에 아래와 같이 사용
promise.catch((err) => {
    if (typeof err === "string") {

    }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost() {
    return new Promise<Post>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠"
            });
        }, 3000)
    })
};

const postRequest = fetchPost();

postRequest.then((post) => {
    console.log(post.id);
})