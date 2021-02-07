import React from 'react';

type Props = {
    readonly query: string,
    readonly friends: string[]
}

const Filtered = ({query, friends}: Props) => {
    const filteredList = friends.filter(person => person.toLowerCase().includes(query.toLowerCase()))
    return (
        <div className = "filtered">
            <h1>Filtered List</h1>
            {filteredList.length === 0 
                ?   <p>No friends found</p> 
                :   <div className = "list-positioning">
                        <ul>
                            {filteredList.map((person, index) => <li key = {index}>{person}</li>)}
                        </ul>
                    </div>
            }
        </div>
    );
}

export default Filtered;