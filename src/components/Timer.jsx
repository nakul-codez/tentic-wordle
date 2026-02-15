import React from 'react'
import {useState, useEffect} from 'react'

function Timer() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(!document.querySelector('.rules').classList.contains('hidden') || !document.querySelector('.final-popup').classList.contains('hidden'))
                return;  
            setCounter(prevCounter => {
                if(prevCounter === 600) {
                    document.querySelector('.timer').classList.toggle('invalid');
                    return prevCounter;
                }
                return prevCounter+1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    },[]);

    return <div className='timer'>
        <span id='timer-display'>{`${Math.trunc(counter/60)}`.padStart(2,'0')}:{`${counter%60}`.padStart(2,'0')}</span>
    </div>
}

export default Timer;