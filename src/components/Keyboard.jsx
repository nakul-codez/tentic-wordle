import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons'

function Keyboard({registerKey}) {
    // const inputCell = props.inputCell;
    // const setInputCell = props.setInputCell;
    // const rows = 6;
    // const columns = 5;
    const backspace = <FontAwesomeIcon icon={faDeleteLeft} />;
    const layout = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['ENTER','Z','X','C','V','B','N','M',backspace]
    ];

    const handleClick = (e) => {
        let keypressed = layout[e.currentTarget.id[3]-1][e.currentTarget.id[5]];
        if(e.currentTarget.id[3]==3 && e.currentTarget.id[5]==8)
            keypressed = 'BACKSPACE';
        registerKey(keypressed);
    }

    return <div className='keyboard-layout hidden'>
        <div className='row1'>{layout[0].map((key,index) => <div className={`key ${key}`} id={`key${1}_${index}`} key={`key${1}_${index}`} onClick={handleClick}>{key}</div>)}</div>
        <div className='row2'>{layout[1].map((key,index) => <div className={`key ${key}`} id={`key${2}_${index}`} key={`key${2}_${index}`} onClick={handleClick}>{key}</div>)}</div>
        <div className='row3'>{layout[2].map((key,index) => <div className={`key ${key}`} id={`key${3}_${index}`} key={`key${3}_${index}`} onClick={handleClick}>{key}</div>)}</div>
    </div>
}

export default Keyboard;