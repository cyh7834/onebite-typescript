/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>

let varB : StringNumberSwitch<string>

function removeSpaces<T>(text : T) : T extends string ? string : undefined;
function removeSpaces(text: any) {
    return text.replaceAll(" ", "");
}

let result = removeSpaces("hi im yoonho");
let result2 = removeSpaces(undefined);