import { useContext, useEffect, useRef, useState } from 'react';
import { TodoDispatchContext, useTodoDispatch } from '../App';


interface Props {
  
}

export default function Editor(props: Props) {
    const dispatch = useTodoDispatch();
    // useState는 제네릭 함수. string 타입을 사용
      const [text, setText] = useState('');
    
      const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickButton = () => {
        dispatch.onClickAdd(text);
        setText("");
    };

    return (
        <div>
            <input value={text} onChange={onChangeInput}></input>
            <button onClick={onClickButton}>추가</button>
        </div>
    );
}