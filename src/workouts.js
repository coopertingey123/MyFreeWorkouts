import WorkoutDay from "./workoutDay"

export default function Workouts() {
    return (
        <div className="workouts-wrapper">
            <div className="day-of-week">
                Monday
                <div className="workout">
                    <WorkoutDay/>
                </div>
            </div>
            <div className="day-of-week">
                Tuesday
                <div className="workout">
                    <WorkoutDay/>
                </div>
            </div>
            <div className="day-of-week">
                Wednesday
                <div className="workout">
                    <WorkoutDay/>
                </div>
            </div>
            <div className="day-of-week">
                Thursday
                <div className="workout">
                    <WorkoutDay/>
                </div>
            </div>
            <div className="day-of-week">
                Friday
                <div className="workout">
                    <WorkoutDay/>
                </div>
            </div>
            <div className="day-of-week">
                Saturday
                <div className="workout">
                    <WorkoutDay/>
                </div>
            </div>
        </div>
    )
}