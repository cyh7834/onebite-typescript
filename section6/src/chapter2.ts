/**
 * 접근 제어자
 * public private protected
 */

class Employee {
    // 필드
    private name: string; // private는 외부 뿐만 아니라 파생 클래스에서도 사용할 수 없음
    protected age: number; // protected는 외부에서는 접근할 수 없지만 파생 클래스에서는 접근 가능
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

const employee = new Employee("최윤호", 33, "개발자");
