import React, { ReactElement, useState } from 'react';
import '../styles/components/dropdown.scss';

interface DropdownProps {
    title: string;
    children: ReactElement;
}

export default function Dropdown(props: DropdownProps) {
    const [isHidden, setHidden] = useState(true);

    function displayContent() {
        if (!isHidden) {
            return (
                <div className='content'>{props.children}</div>
            )
        } else { return (<div className='buttons'></div>) }
    }

    function displayHeader() {

        return (
            <div className='title' onClick={() => {
                isHidden ? setHidden(false) : setHidden(true)
            }}>
                {props.title}
                <span className='show-btn'>
                    {isHidden ? <>&#x2039;</> : <>&#x203A;</>}
                </span>
            </div>
        )
    }

    return (
        <div className='dropdown'>
            {displayHeader()}
            {displayContent()}
        </div>
    );
}