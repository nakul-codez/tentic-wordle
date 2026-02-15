import React from 'react'

function Rules() {
    return <div className='rules'>
        <h1 className='rules-popup-heading'>How To Play</h1>
        <h2 className='rules-popup-subheading'> Guess a 5 Letter Word in 6 Guesses</h2>
        <ul className='rule-list'>
            <li> The timer will start/resume as soon as you click on the Play button </li>
            <li> Each guess must be a valid 5 distinct letter English word </li>
            <li> The color of the tiles will change to show how close your guess was to the word </li>
        </ul>
        <h3 className='example-heading'> Example </h3>
        <p className='example'> Let's suppose the word is PAINT and your guess is STONE</p>
        <div className='example-display'>
            <div className='example-cell'>S</div>
            <div className='example-cell' style={{backgroundColor:'orange'}}>T</div>
            <div className='example-cell'>O</div>
            <div className='example-cell' style={{backgroundColor:'seagreen'}}>N</div>
            <div className='example-cell'>E</div>
        </div>
        <p className='example rules-end'> S, O, and E are not in the word <br/> T is in the word but in the wrong spot <br/> N is in the word and in the correct spot</p>
        <button className='rules-popup-btn' onClick = {() => {document.querySelector('.rules').classList.toggle('hidden');}}>Play</button>
    </div>
}

export default Rules;