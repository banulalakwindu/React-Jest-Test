import React from 'react'

const PropsComponent = ({ item, price }) => {
    return (
        <div>
            <h2>Item: {item}</h2>
            <h2>Price: {price}</h2>
        </div>
    )
}

export default PropsComponent