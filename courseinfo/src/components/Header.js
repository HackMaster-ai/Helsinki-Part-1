const Header = (props) => {
    const {courses} = props

    return (
        <div>
            <h1>{courses.name}</h1>
        </div>
    )
}

export default Header