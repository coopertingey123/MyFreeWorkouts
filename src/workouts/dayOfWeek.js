
import Instructions from "./instructions"

export default function WorkoutDay(props) {

    const renderSuggestedWorkouts = (muscleGroup, numOfExercises) => {

        // get numOfExercises number of random workouts
        // let shuffledWorkouts = [...muscleGroup].sort(() => 0.5 - Math.random()).slice(0, numOfExercises)

        return muscleGroup.map((workout, idx) => {

            return (
                <div className="workout-wrapper" key={idx}>
                    <div className="workout-name">{workout.name}</div>
                    Equipment: {workout.equipment} <br/>
                    <Instructions instructions={workout.instructions} idx={idx}/>
                </div>
            )
        })
    }

    const renderWorkouts = () => {

        switch (props.day) {
            case "monday":
                return (
                    <div>
                        <div className="muscle-group">
                            <div className="muscle-title">Chest</div>
                            {renderSuggestedWorkouts(props.chestWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Triceps</div>
                            {renderSuggestedWorkouts(props.tricepWorkouts)}
                        </div>
                        <div className="muscle-group">
                        <div className="muscle-title">Abs</div>
                            {renderSuggestedWorkouts(props.abWorkouts)}
                        </div>
                    </div>
                )
            case "tuesday":
                return (
                    <div>
                        <div className="muscle-group">
                            <div className="muscle-title">Upper Back (Lats)</div>
                            {renderSuggestedWorkouts(props.latWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Shoulders</div>
                            {renderSuggestedWorkouts(props.shoulderWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Lower Back</div>
                            {renderSuggestedWorkouts(props.lowerBackWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Forearms</div>
                            {renderSuggestedWorkouts(props.forearmWorkouts)}
                        </div>
                    </div>
                )
            case "wednesday":
                return (
                    <div>
                        <div className="muscle-group">
                            <div className="muscle-title">Quads</div>
                            {renderSuggestedWorkouts(props.quadWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Hamstrings</div>
                            {renderSuggestedWorkouts(props.hamstringWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Calves</div>
                            {renderSuggestedWorkouts(props.calfWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Biceps</div>
                            {renderSuggestedWorkouts(props.bicepsWorkouts)}
                        </div>
                    </div>
                )
            case "thursday":
                return (
                    <div>
                        <div className="muscle-group">
                            <div className="muscle-title">Chest</div>
                            {renderSuggestedWorkouts(props.chestWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Triceps</div>
                            {renderSuggestedWorkouts(props.tricepWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Abs</div>
                            {renderSuggestedWorkouts(props.abWorkouts)}
                        </div>
                    </div>
                )
            case "friday":
                return (
                    <div>
                        <div className="muscle-group">
                            <div className="muscle-title">Upper Back (Lats)</div>
                            {renderSuggestedWorkouts(props.latWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Middle Back</div>
                            {renderSuggestedWorkouts(props.middleBackWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Traps</div>
                            {renderSuggestedWorkouts(props.trapWorkouts)}
                        </div>
                    </div>
                )
            case "saturday":
                return (
                    <div>
                        <div className="muscle-group">
                            <div className="muscle-title">Quads</div>
                            {renderSuggestedWorkouts(props.quadWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Glutes</div>
                            {renderSuggestedWorkouts(props.gluteWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Calves</div>
                            {renderSuggestedWorkouts(props.calfWorkouts)}
                        </div>
                        <div className="muscle-group">
                            <div className="muscle-title">Biceps</div>
                            {renderSuggestedWorkouts(props.bicepsWorkouts)}
                        </div>
                    </div>
                )
            default:
                break;
        }
    }

    return (
        <div className="options-wrapper">
            {renderWorkouts()}
        </div>
    )
}