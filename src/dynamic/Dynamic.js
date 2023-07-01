import React from 'react'

const Dynamic = ({ value }) => {
    return <div>{value}</div>
}

export default () => {
    return [1, 2, 3, 4, 5, 6].map((value) => (
        <Dynamic key={value} value={value} />
    ));
}