import React, { useRef, useState } from 'react';
import { useStore } from 'react-redux';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    obj: Person;
    handleChange: ((event: React.ChangeEvent<HTMLInputElement>) => void);
}

interface TextNode {
    text: string;
}

export const Textfield: React.FC<Props> = ({ handleChange }) => {
    // const [count, setCount] = useState<number | null | undefined | string>(5);    *** useState hook usage
    // const [count, setCount] = useState<TextNode>({text: 'Hii all'});
    // setCount({text: "Bye y'all"});                                                *** useState hook usage 2
    const divref = useRef<HTMLDivElement>(null);
    const inputref = useRef<HTMLInputElement>(null);
    return (
        <div ref={divref}>
            <input ref={inputref} onChange={handleChange}/>
        </div>
    )
};