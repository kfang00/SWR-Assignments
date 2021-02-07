import React from 'react';

type Props = {
    readonly query: string,
    readonly friends: string[]
}

const Other = ({query, friends}: Props) => {
    const otherList = friends.filter(person => !person.toLowerCase().includes(query.toLowerCase()))
    return (
        <div>
            <h1>Other</h1>
            {otherList.length === 0 && <p>No friends found</p>}
            <ul>
                {otherList.map((person, index) => <li key = {index}>{person}</li>)}
            </ul>
        </div>
    );
}

export default Other;