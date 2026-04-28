import { useState } from "react"

const ConditionRendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    let message

    if(isLoggedIn) {
        message = <h3>Welcome User</h3>
    } else {
        message = <h3>Please Login</h3>
    }

    function buttonLoginHandler() {
        setIsLoggedIn(true)
    }

    return(
        <div>
            {message}
            <br></br>
            <button onClick={buttonLoginHandler}>Login</button>
        </div>
    )
}

export default ConditionRendering