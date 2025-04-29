import { useState } from "react"
import { GameLayout } from "./components/GameLayout"
import { GAME_SYMBOL, WIN_PATTERNS } from "./constants"

function Game() {
    const [state, setState] = useState({
        currentPlayer: GAME_SYMBOL.CROSS,
        isGameEnded: false,
        isDraw: false,
        field: ["", "", "", "", "", "", "", "", ""],
    })

    function getNextMove(currentPlayer) {
        return currentPlayer === GAME_SYMBOL.CROSS
            ? GAME_SYMBOL.ZERO
            : GAME_SYMBOL.CROSS
    }

    function getWinner(field) {
        return WIN_PATTERNS.find(
            (winSeq) =>
                field[winSeq[0]] &&
                field[winSeq[0]] === field[winSeq[1]] &&
                field[winSeq[0]] === field[winSeq[2]],
        )
    }

    function resetGame() {
        setState({
            currentPlayer: GAME_SYMBOL.CROSS,
            isGameEnded: false,
            isDraw: false,
            field: ["", "", "", "", "", "", "", "", ""],
        })
    }

    const handleClickCell = (index) => {
        if (state.isGameEnded) {
            return
        }

        setState((prev) => {
            if (prev.field[index]) {
                return prev
            }
            const newField = prev.field.map((cell, i) =>
                i === index ? prev.currentPlayer : cell,
            )
            const winner = getWinner(newField)
            const isDraw = !winner && newField.every((cell) => cell !== "")

            return {
                ...prev,
                isGameEnded: winner || isDraw,
                isDraw: isDraw,
                currentPlayer: winner
                    ? prev.currentPlayer
                    : getNextMove(prev.currentPlayer),
                field: newField,
            }
        })
    }

    return (
        <>
            <GameLayout
                {...state}
                handleClickCell={handleClickCell}
                resetGame={resetGame}
            />
        </>
    )
}

export default Game
