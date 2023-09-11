const Header = (props) => {
    const {courses} = props

    return (
        <>
            <h1>{courses.name}</h1>
        </>
    )
}

export default Header