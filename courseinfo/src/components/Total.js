const Total = (props) => {
    const {courses} = props
    const parts = courses.parts

    let test = parts.reduce((s, p) => {
        return s + p.exercises
    }, 0)

    // let total = 0

    // for(let i = 0; i < parts.length; i++) {
    //     total += parts[i].exercises
    // }

    return (
        <>
            <h2>total of exercises is : {test}</h2>
        </>
    )

}

export default Total