const Student = (props) => {
    return(
        <div>
            <h4>Student Details</h4>
            <p>Name : {props.student.firstName}</p>
            <p>Surname : {props.student.lastName}</p>
            <p>email : {props.student.email}</p>
        </div>
    )
}

export default Student