const Content = (props) => {
    const {parts} = props

    return (
        <>
            {parts.map(part => <p key={part.id}>{part.name} exo : {part.exercises}</p>)}
        </>
    )
}

export default Content