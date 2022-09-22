import { useState } from "react"

export default function SingleWorkout({exercise}) {

    const [showVideo, setShowVideo] = useState(false)

    return (
        <div className="single-workout">
            <div className="name" onClick={() => setShowVideo(false)}>
                {exercise.name}: {exercise.reps}
            </div>
            <div className="video">
                {showVideo ? 
                    <iframe width="380" height="200" src={exercise.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    : <p onClick={() => setShowVideo(sv => !sv)}>See exercise? </p>
                }

            </div>
        </div>
    )
}