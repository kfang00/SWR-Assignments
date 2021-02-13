import React, {useEffect, useState} from 'react';
import History from './History';

type Turn = {
    question: string,
    answer: string
}

const Game = () => {
    const [turns, setTurns] = useState<Turn[]>([]);
    const [currentAnswer, setCurrentAnswer] = useState('');

    const answers = [
        "Yes, there is a slight chance of that.",
        "Hmm, yes it is true.",
        "No, that will never happen.",
        "Yes, you should expect that.",
        "Ask again later.",
        "It is certain.",
        "Better not tell you now.",
        "My reply is no.",
        "Without a doubt.",
        "Most likely.",
        "Outlook good.",
        "It might not be the best idea.",
        "Please reconsider."
    ];

    useEffect(() => {
        document.title = `Number of questions asked: ${turns.length}`
    }, [turns]);

    const submitHandler = (event: any) => {
        event.preventDefault();
        if (event.currentTarget[0].value.length > 1 && event.currentTarget[0].value.includes('?')) {
            const index = Math.floor(Math.random() * (answers.length - 1));
            setTurns([{
                question: event.currentTarget[0].value,
                answer: answers[index]
            }, ...turns]);
            setCurrentAnswer(answers[index]);
            event.currentTarget.reset();
        } else {
            alert("Invalid Question: Must include a question mark and at least one other character!")
        }
    }

    return (
        <div>
            <h1>Magic 8 Ball</h1>
            <h2>{`Number of questions asked: ${turns.length}`}</h2>
            <div className = "historyPlacement">
                <div>
                    <form className = "question" onSubmit = {submitHandler}>
                        <input 
                            type = 'text' 
                            placeholder = "Ask me a question..."
                        />
                        <button type = "submit">Ask!</button>
                    </form>
                    <img src = "https://magic-8ball.com/assets/images/magicBallStart.png" />
                    <h2>{currentAnswer}</h2>
                </div>
                <History turns = {turns} />
            </div>
        </div>
    );
}

export default Game;