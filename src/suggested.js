import { useState, useEffect } from "react"
import allWorkouts from "./workouts.json"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import DayOfWeek from "./workouts/dayOfWeek"

export default function SuggestedWorkouts() {

    const [mondayOpen, setMondayOpen] = useState(false)
    const [tuesdayOpen, setTuesdayOpen] = useState(false)
    const [wednesdayOpen, setWednesdayOpen] = useState(false)
    const [thursdayOpen, setThursdayOpen] = useState(false)
    const [fridayOpen, setFridayOpen] = useState(false)
    const [saturdayOpen, setSaturdayOpen] = useState(false)
    const [chestWorkouts, setChestWorkouts] = useState([])
    const [bicepsWorkouts, setBicepsWorkouts] = useState([])
    const [abWorkouts, setAbWorkouts] = useState([])
    const [latWorkouts, setLatWorkouts] = useState([])
    const [lowerBackWorkouts, setLowerBackWorkouts] = useState([])
    const [middleBackWorkouts, setMiddleBackWorkouts] = useState([])
    const [tricepWorkouts, setTricepWorkouts] = useState([])
    const [quadWorkouts, setQuadWorkouts] = useState([])
    const [hamstringWorkouts, setHamstringWorkouts] = useState([])
    const [shoulderWorkouts, setShoulderWorkouts] = useState([])
    const [gluteWorkouts, setGluteWorkouts] = useState([])
    const [calfWorkouts, setCalfWorkouts] = useState([])
    const [forearmWorkouts, setForearmWorkouts] = useState([])
    const [trapWorkouts, setTrapWorkouts] = useState([])

    useEffect(() => {

        let abdominals = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("abdominals"))
        abdominals = [...abdominals].sort(() => 0.5 - Math.random())

        let biceps = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("biceps"))
        biceps = [...biceps].sort(() => 0.5 - Math.random())

        let triceps = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("triceps"))
        triceps = [...triceps].sort(() => 0.5 - Math.random())

        let chest = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("chest"))
        chest = [...chest].sort(() => 0.5 - Math.random())

        let lats = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("lats"))
        lats = [...lats].sort(() => 0.5 - Math.random())

        let lowerBack = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("lower back"))
        lowerBack = [...lowerBack].sort(() => 0.5 - Math.random())

        let middleBack = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("middle back"))
        middleBack = [...middleBack].sort(() => 0.5 - Math.random())

        let quadriceps = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("quadriceps"))
        quadriceps = [...quadriceps].sort(() => 0.5 - Math.random())

        let hamstrings = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("hamstrings"))
        hamstrings = [...hamstrings].sort(() => 0.5 - Math.random())

        let shoulders = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("shoulders"))
        shoulders = [...shoulders].sort(() => 0.5 - Math.random())

        let glutes = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("glutes"))
        glutes = [...glutes].sort(() => 0.5 - Math.random())

        let calves = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("calves"))
        calves = [...calves].sort(() => 0.5 - Math.random())

        let forearms = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("forearms"))
        forearms = [...forearms].sort(() => 0.5 - Math.random())

        let traps = allWorkouts.exercises.filter((exercise) => exercise.primaryMuscles.includes("traps"))
        traps = [...traps].sort(() => 0.5 - Math.random())

        setAbWorkouts(abdominals)
        setBicepsWorkouts(biceps)
        setTricepWorkouts(triceps)
        setChestWorkouts(chest)
        setLatWorkouts(lats)
        setLowerBackWorkouts(lowerBack)
        setMiddleBackWorkouts(middleBack)
        setQuadWorkouts(quadriceps)
        setHamstringWorkouts(hamstrings)
        setShoulderWorkouts(shoulders)
        setGluteWorkouts(glutes)
        setCalfWorkouts(calves)
        setForearmWorkouts(forearms)
        setTrapWorkouts(traps)

    }, [])

    return (
        <div className="suggested-container">
            <div className="header-wrapper" onClick={() => setMondayOpen(do_ => !do_)}>
                Monday <FontAwesomeIcon icon={mondayOpen ? faCaretDown : faCaretUp} />
            </div>
            { mondayOpen && 
                <DayOfWeek 
                    day="monday"
                    chestWorkouts={chestWorkouts.slice(0,3)}
                    abWorkouts={abWorkouts.slice(0,2)}
                    bicepsWorkouts={bicepsWorkouts.slice(0,2)}
                    tricepWorkouts={tricepWorkouts.slice(0,2)}
                    latWorkouts={latWorkouts.slice(0,2)}
                    lowerBackWorkouts={lowerBackWorkouts.slice(0,2)}
                    middleBackWorkouts={middleBackWorkouts.slice(0,2)}
                    quadWorkouts={quadWorkouts.slice(0,2)}
                    hamstringWorkouts={hamstringWorkouts.slice(0,2)}
                    shoulderWorkouts={shoulderWorkouts.slice(0,2)}
                    gluteWorkouts={gluteWorkouts.slice(0,2)}
                    calfWorkouts={calfWorkouts.slice(0,2)}
                    forearmWorkouts={forearmWorkouts.slice(0,2)}
                    trapWorkouts={trapWorkouts.slice(0,2)}
                />
            }

            <div className="header-wrapper" onClick={() => setTuesdayOpen(do_ => !do_)}>
                Tuesday <FontAwesomeIcon icon={tuesdayOpen ? faCaretDown : faCaretUp} />
            </div>
            { tuesdayOpen && 
                <DayOfWeek 
                    day="tuesday"
                    chestWorkouts={chestWorkouts.slice(0,2)}
                    abWorkouts={abWorkouts.slice(0,2)}
                    bicepsWorkouts={bicepsWorkouts.slice(0,2)}
                    tricepWorkouts={tricepWorkouts.slice(0,2)}
                    latWorkouts={latWorkouts.slice(0,2)}
                    lowerBackWorkouts={lowerBackWorkouts.slice(0,2)}
                    middleBackWorkouts={middleBackWorkouts.slice(0,2)}
                    quadWorkouts={quadWorkouts.slice(0,2)}
                    hamstringWorkouts={hamstringWorkouts.slice(0,2)}
                    shoulderWorkouts={shoulderWorkouts.slice(0,2)}
                    gluteWorkouts={gluteWorkouts.slice(0,2)}
                    calfWorkouts={calfWorkouts.slice(0,2)}
                    forearmWorkouts={forearmWorkouts.slice(0,2)}
                    trapWorkouts={trapWorkouts.slice(0,2)}
                />
            }

            <div className="header-wrapper" onClick={() => setWednesdayOpen(do_ => !do_)}>
                Wednesday <FontAwesomeIcon icon={wednesdayOpen ? faCaretDown : faCaretUp} />
            </div>
            { wednesdayOpen && 
                <DayOfWeek 
                    day="wednesday"
                    chestWorkouts={chestWorkouts.slice(0,3)}
                    abWorkouts={abWorkouts.slice(0,2)}
                    bicepsWorkouts={bicepsWorkouts.slice(0,2)}
                    tricepWorkouts={tricepWorkouts.slice(0,2)}
                    latWorkouts={latWorkouts.slice(0,2)}
                    lowerBackWorkouts={lowerBackWorkouts.slice(0,2)}
                    middleBackWorkouts={middleBackWorkouts.slice(0,2)}
                    quadWorkouts={quadWorkouts.slice(0,2)}
                    hamstringWorkouts={hamstringWorkouts.slice(0,2)}
                    shoulderWorkouts={shoulderWorkouts.slice(0,2)}
                    gluteWorkouts={gluteWorkouts.slice(0,2)}
                    calfWorkouts={calfWorkouts.slice(0,2)}
                    forearmWorkouts={forearmWorkouts.slice(0,2)}
                    trapWorkouts={trapWorkouts.slice(0,2)}
                />
            }

            <div className="header-wrapper" onClick={() => setThursdayOpen(do_ => !do_)}>
                Thursday <FontAwesomeIcon icon={thursdayOpen ? faCaretDown : faCaretUp} />
            </div>
            { thursdayOpen && 
                <DayOfWeek 
                    day="thursday"
                    chestWorkouts={chestWorkouts.slice(0,3)}
                    abWorkouts={abWorkouts.slice(0,2)}
                    bicepsWorkouts={bicepsWorkouts.slice(0,2)}
                    tricepWorkouts={tricepWorkouts.slice(0,2)}
                    latWorkouts={latWorkouts.slice(0,2)}
                    lowerBackWorkouts={lowerBackWorkouts.slice(0,2)}
                    middleBackWorkouts={middleBackWorkouts.slice(0,2)}
                    quadWorkouts={quadWorkouts.slice(0,2)}
                    hamstringWorkouts={hamstringWorkouts.slice(0,2)}
                    shoulderWorkouts={shoulderWorkouts.slice(0,2)}
                    gluteWorkouts={gluteWorkouts.slice(0,2)}
                    calfWorkouts={calfWorkouts.slice(0,2)}
                    forearmWorkouts={forearmWorkouts.slice(0,2)}
                    trapWorkouts={trapWorkouts.slice(0,2)}
                />
            }

            <div className="header-wrapper" onClick={() => setFridayOpen(do_ => !do_)}>
                Friday <FontAwesomeIcon icon={fridayOpen ? faCaretDown : faCaretUp} />
            </div>
            { fridayOpen && 
                <DayOfWeek 
                    day="friday"
                    chestWorkouts={chestWorkouts.slice(0,3)}
                    abWorkouts={abWorkouts.slice(0,2)}
                    bicepsWorkouts={bicepsWorkouts.slice(0,2)}
                    tricepWorkouts={tricepWorkouts.slice(0,2)}
                    latWorkouts={latWorkouts.slice(0,2)}
                    lowerBackWorkouts={lowerBackWorkouts.slice(0,2)}
                    middleBackWorkouts={middleBackWorkouts.slice(0,2)}
                    quadWorkouts={quadWorkouts.slice(0,2)}
                    hamstringWorkouts={hamstringWorkouts.slice(0,2)}
                    shoulderWorkouts={shoulderWorkouts.slice(0,2)}
                    gluteWorkouts={gluteWorkouts.slice(0,2)}
                    calfWorkouts={calfWorkouts.slice(0,2)}
                    forearmWorkouts={forearmWorkouts.slice(0,2)}
                    trapWorkouts={trapWorkouts.slice(0,2)}
                />
            }

            <div className="header-wrapper" onClick={() => setSaturdayOpen(do_ => !do_)}>
                Saturday <FontAwesomeIcon icon={saturdayOpen ? faCaretDown : faCaretUp} />
            </div>
            { saturdayOpen && 
                <DayOfWeek 
                    day="saturday"
                    chestWorkouts={chestWorkouts.slice(0,3)}
                    abWorkouts={abWorkouts.slice(0,2)}
                    bicepsWorkouts={bicepsWorkouts.slice(0,2)}
                    tricepWorkouts={tricepWorkouts.slice(0,2)}
                    latWorkouts={latWorkouts.slice(0,2)}
                    lowerBackWorkouts={lowerBackWorkouts.slice(0,2)}
                    middleBackWorkouts={middleBackWorkouts.slice(0,2)}
                    quadWorkouts={quadWorkouts.slice(0,2)}
                    hamstringWorkouts={hamstringWorkouts.slice(0,2)}
                    shoulderWorkouts={shoulderWorkouts.slice(0,2)}
                    gluteWorkouts={gluteWorkouts.slice(0,2)}
                    calfWorkouts={calfWorkouts.slice(0,2)}
                    forearmWorkouts={forearmWorkouts.slice(0,2)}
                    trapWorkouts={trapWorkouts.slice(0,2)}
                />
            }

        </div>
    )
}