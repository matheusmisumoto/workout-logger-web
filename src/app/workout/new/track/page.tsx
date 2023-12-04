'use client'

import { apiWithAuth } from "@/app/lib/api"
import { ExerciseData, Sets, Workout } from "@/app/lib/interface"
import Button from "@/components/Button"
import ExerciseHeader from "@/components/ExerciseHeader"
import Header from "@/components/Header"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"
import RemoveIcon from "@/components/icons/RemoveIcon"
import { useState, useEffect } from "react"
import TrackWorkout from "../../[workoutid]/edit/page"

export default function TrackNew(){

    return (
        <TrackWorkout />
    )
}