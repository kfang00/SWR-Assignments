import React from 'react';

type Props = {
    readonly query: string,
    readonly friends: string[]
}

const Filtered = ({query, friends}: Props) => {
    const filteredList = friends.filter(person => person.toLowerCase().includes(query.toLowerCase()))
    return (
        <div>
            <h1>Filtered List</h1>
            {filteredList.length === 0 
                ?   <p>No friends found</p> 
                :   <ul>
                        {filteredList.map((person, index) => <li key = {index}>{person}</li>)}
                    </ul>
            }
        </div>
    );
}

export default Filtered;