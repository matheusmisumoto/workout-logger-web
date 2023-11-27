import Box from "@/components/Box"
import BoxItem from "@/components/BoxItem"
import Button from "@/components/Button"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"
import WorkoutExercise from "@/components/WorkoutExercise"

export default function Workout(){
    return (
    <div className="h-screen flex flex-col">
        <Header navigationTitle="Voltar" navigationURL="/history" />
        <Main>
            <Hero>
                <h2 className="mt-0 mb-1 text-2xl font-bold max-w-screen-md mx-auto">Treino Saiyajin 1 - Dia B</h2>
                <p className="text-[.875rem] max-w-screen-md mx-auto">Posterior, Quadríceps, Adutor, Abdutor</p>
                <Box>
                    <BoxItem data="8" description="exercícios" />
                    <BoxItem data="1:00" description="tempo" />
                    <BoxItem data="5.390 kg" description="carga total" />
                </Box>
            </Hero>
            <MainContent>
                <WorkoutExercise 
                    exercise="Puxada alta triângulo" 
                    target="Dorsal" 
                    equipment="Cabo" 
                    sets={
                        [
                            {type: "Standard", weight: 38.5, reps: 8}, 
                            {type: "Standard", weight: 42, reps: 8}, 
                            {type: "Standard", weight: 45.5, reps: 8}, 
                            {type: "Standard", weight: 49, reps: 8}, 
                            {type: "Standard", weight: 52.5, reps: 5}]}
                />
                <WorkoutExercise 
                    exercise="Remada Baixa Barra Romana" 
                    target="Dorsal" 
                    equipment="Cabo" 
                    sets={
                        [
                            {type: "Standard", weight: 32.5, reps: 8}, 
                            {type: "Standard", weight: 35, reps: 8}, 
                            {type: "Standard", weight: 37.5, reps: 8}, 
                            {type: "Standard", weight: 42, reps: 8}, 
                            {type: "Standard", weight: 45.5, reps: 5}]}
                />
                <WorkoutExercise 
                    exercise="Remada serrote" 
                    target="Dorsal" 
                    equipment="Dumbbell" 
                    sets={
                        [
                            {type: "Standard", weight: 12, reps: 8}, 
                            {type: "Standard", weight: 14, reps: 8}, 
                            {type: "Standard", weight: 14, reps: 8}, 
                            {type: "Standard", weight: 16, reps: 8}, 
                            {type: "Standard", weight: 16, reps: 8}]}
                />
                <WorkoutExercise 
                    exercise="Remada alta barra W" 
                    target="Ombros" 
                    equipment="Outro" 
                    sets={
                        [
                            {type: "Standard", weight: 15, reps: 8}, 
                            {type: "Standard", weight: 15, reps: 8}, 
                            {type: "Standard", weight: 15, reps: 8}, 
                            {type: "Standard", weight: 15, reps: 8}, 
                            {type: "Standard", weight: 20, reps: 8}]}
                />
                <WorkoutExercise 
                    exercise="Rosca direta alternada" 
                    target="Bíceps" 
                    equipment="Dumbbell" 
                    sets={
                        [
                            {type: "Standard", weight: 6, reps: 8}, 
                            {type: "Standard", weight: 7, reps: 8}, 
                            {type: "Standard", weight: 9, reps: 8}, 
                            {type: "Standard", weight: 9, reps: 8}, 
                            {type: "Standard", weight: 10, reps: 8}]}
                />
                <WorkoutExercise 
                    exercise="Peck deck" 
                    target="Peito" 
                    equipment="Máquina" 
                    sets={
                        [
                            {type: "Standard", weight: 25, reps: 8}, 
                            {type: "Standard", weight: 27.5, reps: 8}, 
                            {type: "Standard", weight: 30, reps: 8}, 
                            {type: "Standard", weight: 32.5, reps: 8}, 
                            {type: "Standard", weight: 35, reps: 8}]}
                />
                <WorkoutExercise 
                    exercise="Crucifixo inclinado" 
                    target="Peito" 
                    equipment="Dumbbell" 
                    sets={
                        [
                            {type: "Standard", weight: 10, reps: 8}, 
                            {type: "Standard", weight: 10, reps: 8}, 
                            {type: "Standard", weight: 10, reps: 8}, 
                            {type: "Standard", weight: 10, reps: 8}, 
                            {type: "Standard", weight: 12, reps: 8}]}
                />
                <WorkoutExercise 
                    exercise="Supino reto" 
                    target="Peito" 
                    equipment="Dumbbell" 
                    sets={
                        [
                            {type: "Standard", weight: 12, reps: 8}, 
                            {type: "Standard", weight: 14, reps: 8}, 
                            {type: "Standard", weight: 14, reps: 8}, 
                            {type: "Standard", weight: 14, reps: 8}, 
                            {type: "Standard", weight: 14, reps: 8}]}
                />
                <Button link="#" title="Remover registro de treino" destructive />
            </MainContent>
        </Main>
        <Footer />
    </div>
    )
}