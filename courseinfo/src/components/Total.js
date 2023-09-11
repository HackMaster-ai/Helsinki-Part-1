const Total = (props) => {
    const {courses} = props
    const parts = courses.parts

    let total = 0

    for(let i = 0; i < parts.length; i++) {
        total += parts[i].exercises
    }

    return (
        <>
            <h2>total of exercises is : {total}</h2>
        </>
    )

}

export default Total