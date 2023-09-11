const Course = (props) => {
    const {courses} = props
    let parts = courses.parts

    return (
        <>
            {parts.map(part => <p key={part.id}>{part.name} exo : {part.exercises}</p>)}
        </>
    )
}

export default Course