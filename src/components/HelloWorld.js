import React from "react"

const HelloWorld = () => {
    const myElement = <h4>Hello World Component</h4>

    //return React.createElement("h1", null, "Hello, World")
    
    //return myElement    
    return (
        <div>
            <h4 className="title">baslik</h4>
            <h4>alt baslik</h4>
            <p>paragraf</p>
            <button onClick={buttonHandler}>Click me</button>
        </div>
    )

    function buttonHandler() {
        alert("button clicked")
    }

}

export default HelloWorld