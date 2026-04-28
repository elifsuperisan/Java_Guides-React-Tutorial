import { useState } from "react"

const User = () => {
    const [firstName, setFirstName] = useState('Muhammed')
    const [lastName, setLastName] = useState('Duzgun')
    const [email, setEmail] = useState('muhammedduzgun@gmail.com')

    function updateUser() {
        setFirstName('updated_name')
        setLastName('updated_lastName')
        setEmail('updated@gmail.com')
    }

    return(
        <div>
            <h1>User Details</h1>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
    )

}

export default User