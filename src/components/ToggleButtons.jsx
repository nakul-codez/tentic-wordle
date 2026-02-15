import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function ToggleButtons() {

    return <>
        <button className='rules-icon' onClick={() => {document.querySelector('.rules').classList.toggle('hidden');}}><FontAwesomeIcon icon={faCircleInfo}/></button>
        <button className='keyboard-icon' onClick={() => {document.querySelector('.keyboard-layout').classList.toggle('hidden');}}><FontAwesomeIcon icon={faKeyboard}/></button>
    </>
}

export default ToggleButtons;