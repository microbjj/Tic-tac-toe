function Game() {
    return (
        <>
            <GameLayout />
        </>
    )
}

export default Game

function GameLayout() {
    return (
        <>
            <Information />
            <Field />
        </>
    )
}

function Field() {
    return <FieldLayout />
}

function FieldLayout() {
    return <div>FieldLayout</div>
}

function Information() {
    return <InformationLayout />
}

function InformationLayout() {
    return <div>InformationLayout</div>
}
