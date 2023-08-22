import React from 'react'

export default function Typescript() {

    // ! 변수
    // ! 변수의 타입을 지정하지 않으면 처음 초기화된 데이터의 타입으로
    // ! 변수의 타입이 결정
    let variable1 = '문자열';
    // ! 키워드 변수명: 데이터타입; 변수를 선언
    let variable2: string;
    // ! string, number, boolean, object, null
    // ! object: 객체 타입
    let variable3: object = {
        name: '홍길동',
        age: 30
    };

    // ! null: null 타입
    let variable4: null = null;
    // ! []: 배열 타입
    let variable5: string[] = ['a', 'b'];
    // ! undefined: 선언되고 초기화하지 않은 상태
    let variable6: undefined = undefined;
    // ! any: 모든 타입
    let variable7: any = 'aaa';

    // ! |: 유니온 타입, or로 지정해주는 타입만 받을 수 있음
    let variable8: string | number

    // ! 
    let object1 = {
        name: '홍길동',
        age: 30
    }

    // ! 커스텀 객체 타입
    // ! 1. class
    class Object1 {
    // 속성명: 타입
        name: string;
        age: number;

        constructor(name : string, age : number){
            this.name = name;
            this.age = age;
        }

    }
    // ! 2. interface
    interface Object2 {
        name: string;
        age: number;
    }

    // ! 3. type 
    type Object3 = {
        name: string,
        age: number
    }

    // let object2 : Object1 = new Object1('홍길동', 30);
    // object2.name;
    let object2: Object3 = {
        name: '김길동',
        age: 20
    }

    interface Object4{
        telNumber: string;
        address?: string;
        /*?는 자동으로 null값을 매겨줌, 필수값으로 넣게하지 않음*/
        getName: () => string;
    }

    const object3: Object2 & Object4 = {
        name: '김길동',
        age: 20,
        telNumber: '1234',
        address: 'qwer',
        getName: () => {
            return '김길동';
        }
    };
    
    // ! 리터럴 타입 : 리터럴 자체를 타입으로 명시 - 지정된 리터럴 값만 가질 수 있음
    type Gender = '남' | '여'
    let gender: Gender = '남';

    // const name = object3.name;
    // const age = object3.age;
    // const telNumber = object3.telNumber;

    //위의 주석과 같은 문구임, 배열형으로 바뀌었을 뿐임
    const { name, age, ...other } = object3;
    //other = {
    //     telNumber: '1234',
    //     address: 'qwe'
    //     getName: ~
    // }

    let object4: any; 
    object4 = { other, birth: '1993' };
    
    object4 = { ...other, birth: '1993' };

    function fun1(): string{
        return 'a';
    }

    let func2: () => string = (): string => {
        return 'a';
    }

    // const array = {1, 2, 3, 4};
    // const [first, seconds, ...others] = array;

    object2.name;

  return (
    <div>{name}</div>
  )
}
