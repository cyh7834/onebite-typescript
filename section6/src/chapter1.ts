/**
 * 타입스크립트의 클래스
 */

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {

    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

const employee = new Employee("최윤호", 33, "개발자");

const employee2: Employee = {
    name: "",
    age: 0,
    position: "",
    work: function (): void {
        throw new Error("Function not implemented.");
    }
}