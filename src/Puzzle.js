import reducer from './reducer'
import useUndoReducer from './useUndoReducer'

import './Puzzle.css'

const Puzzle = () => {
  const [state, dispatch] = useUndoReducer(reducer, {
    items: ['4', '1', '2', '7', '6', '3', null, '5', '8'],
  })

  return (
    <div className="Puzzle">
      <div className="Puzzle-squares">
        {state.items.map((s, i) => (
          <div
            className={`Puzzle-square ${
              s ? '' : 'Puzzle-square-empty'
            }`}
            key={`square-${i}`}
            onClick={() => dispatch({ type: 'move', payload: i })}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="Puzzle-controls">
        <button
          className="Puzzle-shuffle"
          onClick={() => dispatch({ type: 'shuffle' })}
        >
          Losuj
        </button>
        <button
          className="Puzzle-reset"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Resetuj
        </button>
      </div>
      <div className="Puzzle-controls">
        <button
          className="Puzzle-undo"
          onClick={() => dispatch({ type: 'undo' })}
        >
          Cofnij
        </button>
        <button
          className="Puzzle-redo"
          onClick={() => dispatch({ type: 'redo' })}
        >
          Przywróć
        </button>
      </div>
      {state.complete && (
        <div className="Puzzle-complete">Complete!</div>
      )}
    </div>
  )
}

export default Puzzle
