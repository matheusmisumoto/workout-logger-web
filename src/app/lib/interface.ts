export interface User {
    id: string
    name: string
    login: string
    oAuthId: number
    avatarUrl: string
    totalWorkouts: number
    totalLifted: number
}

export interface LastWorkouts {
    id: string,
    user: string,
    date: string,
    name: string,
    comment: Text,
    duration: number,
    totalLifted: number,
    totalExercises: number
}

export interface Sets {
    type?: string,
    weight?: number,
    reps?: number
}

export interface Exercise {
    id: string,
    name: string,
    target: string,
    equipment: string,
    sets: Sets[]
}

export interface ExerciseData {
    id: string,
    name: string,
    target: string,
    equipment: string
}

export interface Workout {
    id?: string,
    user: string,
    name?: string,
    status?: string,
    comment?: string,
    duration?: number,
    totalLifted?: number,
    totalExercises?: number,
    exercises: Exercise[]
}

export interface WorkoutCard {
    id: string,
    user: string,
    date: Date,
    name: string,
    comment: Text,
    duration?: number,
    totalLifted?: number,
    totalExercises?: number
}