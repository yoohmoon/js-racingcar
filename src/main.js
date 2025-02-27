/* 
- 자동차는 이름을 상태로 가질 수 있다.
- 자동차는 위치 값을 가지며, 초기 상태는 0이다.
- 자동차는 전진할 수 있으며 한 번에 1만큼 전진한다.
*/

class Car {
  constructor(name) {
    // constructor 생성자 역할(객체 초기화) : 인스턴스를 만들 때 실행된다.
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1; // 현재 값에 오른쪽 값을 더한 후, 그 결과를 다시 변수에 할당
  }
}

const myCar = new Car("sonata"); //인스턴스 만듦. Car { name: 'sonata', position: 0 }
