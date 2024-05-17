import TrackWorkout from "@/app/dashboard/workout/[workoutid]/edit/page";

export default function TrackUsingPrevious(params: object){
    return <TrackWorkout {... params} template />
}