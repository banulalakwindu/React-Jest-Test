import React from 'react'

const EventComponent = ({ handleClick }) => {
    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default EventComponent