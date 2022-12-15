// fetch workout from the server using the fetchWorkout function
import fetchWorkout from "../services/fetchWorkout";


export function getWorkouts() {
  return fetchWorkout<Workout[]>("workouts");
}

// get workout from id
export function getWorkout(workout: Workout) {
  return fetchWorkout<Workout>(`workouts/${workout.id}`);
}

// search title of workout from id
export function searchWorkout(workout: Workout) {
  return fetchWorkout<Workout>(`workouts/${workout.title}`);
}


// DELETE method for workouts
export function deleteWorkout(id: number) {
  return fetchWorkout<Workout>(`workouts/${id}`, null, "DELETE");
}
// export function deleteWorkout(workout: Workout) {
//   return fetchWorkout<Workout>(`workouts/${workout.id}`, {
//     method: "DELETE",
//   });
// }

export function createWorkout(workout: Workout) {
  return fetchWorkout<Workout>("workouts", workout, "POST");
}
// export function createWorkout(id: number) {
//   return fetchWorkout<Workout>(`workouts/${id}`, null, "POST");
// }




export interface ListEnvelope<T> {
  workouts: T[];
  total: number;
  skip: number;
  limit: number;
}
export interface Workout {
  id: number;
  firstName: string;
  lastName: string;
  handle: string;
  title: string;
  workoutDate: string;
  workoutTime: string;
  workoutLocation: string;
  pictureUrl: string;
}




