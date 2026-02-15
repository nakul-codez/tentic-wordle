import React from 'react'

function FinalPopup() {
    return <div className='final-popup hidden'>
        <h1 className='final-popup-heading'> </h1>
        <h2 className='final-popup-subheading'> </h2>
        <button className='final-popup-btn' onClick={() => {window.location.reload()}}> Play Again </button>
    </div>
}

export default FinalPopup;