import { InformationLayout } from "./InformationLayout"

export function Information({ isDraw, isGameEnded, currentPlayer, resetGame }) {
    return (
        <InformationLayout
            isDraw={isDraw}
            isGameEnded={isGameEnded}
            currentPlayer={currentPlayer}
            resetGame={resetGame}
        />
    )
}
