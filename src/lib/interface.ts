export interface User {
    id: string
    name: string
    login: string
    oAuthId: number
    avatarUrl: string
    totalWorkouts: number
    totalLifted: number
}

export interface UserToken {
    sub: string;
    name: string;
    picture: string;
    roles: string;
}

export interface UserList {
    id: string,
    username: string,
    name: string,
    login: string,
    oAuthId: number,
    avatarUrl: string,
    joinedAt: Date,
    oauthProvider: string
    authorities: UserListAutorities[]
}

export interface UserListAutorities {
    authority: string
}

export interface LastWorkouts {
    id: string,
    user: string,
    date: Date,
    name: string,
    comment: Text,
    duration: number,
    target?: string[],
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
    sets: Sets[],
    oneRepMax?: number
}

export interface ExerciseData {
    id?: string,
    name: string,
    target: string,
    equipment: string
}

export interface Workout {
    id?: string,
    date?: Date,
    user: string,
    name?: string,
    status?: string,
    comment?: string,
    duration?: number,
    totalLifted?: number,
    totalExercises?: number,
    exercises: Exercise[]
}

export interface PreviousStats {
    id: string,
    exercise: string,
    workouts: [
        {
            date: Date,
            sets: Sets[]
        }
    ]
}

export interface Modal {
    type: string | null,
    data?: string | null
}