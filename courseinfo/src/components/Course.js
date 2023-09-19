import Content from "./Content"
import Header from "./Header"

const Course = (props) => {
    const {courses} = props
    // let parts = courses.parts

    return (
        <>
            {/* {parts.map(part => <p key={part.id}>{part.name} exo : {part.exercises}</p>)} */}
            {courses.map(course => <div key={course.id}>
                <Header title={course.name} />
                <Content parts={course.parts} />
            </div>)}
        </>
    )
}

export default Course