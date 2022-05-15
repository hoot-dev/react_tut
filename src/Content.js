import {useState} from 'react';

const Content = () => {
    const [name, setName] = useState('Matt')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Matt'];
        const int = Math.floor(Math.random() * 3)
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handleClick2 = (name) => {
        setCount(count - 1)
        console.log(count)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Count Up</button>
            <button onClick={handleClick2}>Count Down</button>
            <p>Count is currently: {count}</p>
        </main>
    )
}

export default Content