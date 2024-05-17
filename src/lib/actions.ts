'use server'

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { apiWithAuth } from "./api";

// User actions

export async function deleteUser(id: string, token: string) {
    const removeAction = await apiWithAuth(token).delete(`/users/${id}`);
    revalidatePath('/dashboard/settings/manage-users');
}

// Exercise actions

export async function addExercise(formData: FormData, token: string) {
    const newExercise = {
        name: formData.get('name'),
        target: formData.get('target'),
        equipment: formData.get('equipment'),
    };

    if (!newExercise.name || !newExercise.target || !newExercise.equipment) return;

    const addAction = apiWithAuth(token).post('/exercises', newExercise);
    revalidatePath('/dashboard/settings/exercise-database');
    redirect('/dashboard/settings/exercise-database');
}

export async function deleteExercise(id: string, token: string) {
    const removeAction = await apiWithAuth(token).delete(`/exercises/${id}`);
    revalidatePath('/dashboard/settings/exercise-database');
}

// Workout actions

export async function deleteWorkout(id: string, token: string) {
    const removeAction = await apiWithAuth(token).delete(`/workouts/${id}`);
    revalidatePath('/dashboard/history');
    redirect('/dashboard/history');
}
