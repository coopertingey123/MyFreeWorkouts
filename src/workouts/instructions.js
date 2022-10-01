import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Instructions({instructions, idx}) {
    const [instructionsOpen, setInstructionsOpen] = useState(false)

    const renderInstructions = () => {
        return instructions.map((instruction, idx) => {
            return (
                <li key={idx}>{instruction}</li>
            )
        })
    }

    return (
        <div>
            <div onClick={() => setInstructionsOpen(o => !o)} className="instructions">Instructions: <FontAwesomeIcon icon={instructionsOpen ? faCaretDown : faCaretUp} /></div>
            {instructionsOpen &&
                <ol className="muscle-wrapper">
                    {renderInstructions()}
                </ol>
            }
        </div>
    )
}
