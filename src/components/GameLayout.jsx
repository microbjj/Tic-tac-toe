import { FieldLayout } from "./FieldLayout"
import { Information } from "./Information"

export function GameLayout({
    currentPlayer,
    isGameEnded,
    isDraw,
    field,
    handleClickCell,
    resetGame,
}) {
    return (
        <div className="w-md mx-auto pt-6">
            <Information
                isDraw={isDraw}
                isGameEnded={isGameEnded}
                currentPlayer={currentPlayer}
                resetGame={resetGame}
            />
            <FieldLayout
                field={field}
                currentPlayer={currentPlayer}
                handleClickCell={handleClickCell}
            />
        </div>
    )
}
