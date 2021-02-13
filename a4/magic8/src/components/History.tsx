import React from 'react';

type Turn = {
    question: string,
    answer: string
}

type Props = {readonly turns: Turn[]}

const History = ({turns}: Props) => {
    return (
        <div className = 'history'>
            <h3>Q/A History</h3>
            {turns.map(turn => (
                <div>
                    <p>{`Q: ${turn.question}`}</p>
                    <p>{`A: ${turn.answer}`}</p>
                </div>
            ))}
        </div>
    );
}

export default History;