import { useState } from "react";

// 함수형 컴포넌트는 항상 대문자로 시작을 함
export const Component1 = () =>{
    const {state1, state2, state3} = useStates();

    return <></>;
}

const Component2 = () =>{
    const [state1, setState1] = useState<string>('');
    const [state2, setState2] = useState<number>(0);
    const [state3, setState3] = useState<boolean>(false);

    return <></>;
}

export default Component2;

const Component3 = () =>{
    const [state1, setState1] = useState<string>('');
    const [state2, setState2] = useState<number>(0);
    const [state3, setState3] = useState<boolean>(false);

}

const useStates = () => {
    const [state1, setState1] = useState<string>('');
    const [state2, setState2] = useState<number>(0);
    const [state3, setState3] = useState<boolean>(false);
    
    return{state1, state2, state3, setState1, setState2, setState3};
}