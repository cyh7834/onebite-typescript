/**
 * 자바스크립트의 클래스 소개
 */

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    study() {

    }

    introduce() {

    }
}

class StudentDeveloper extends Student{
    // 필드
    favoriteSkill;

    constructor (name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }
    
    programming() {
        
    }
}

let studentA = new Student("최윤호", "A+", 33);
studentA.study();