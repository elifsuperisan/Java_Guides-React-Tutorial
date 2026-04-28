import { useState } from "react"

const EventHandling = () => {

    const [count, setCount] = useState(0)

    function increaseButtonHandler() {
        setCount(count + 1)
    }

    function resetButtonHandler() {
        setCount(0)
    }

    return(
        <div>
            <h2>Event Handling Example</h2>
            <p>count : {count}</p>
            <button onClick={increaseButtonHandler}>Increase</button>
            <button onClick={resetButtonHandler}>Reset</button>
        </div>
    )

}

export default EventHandling