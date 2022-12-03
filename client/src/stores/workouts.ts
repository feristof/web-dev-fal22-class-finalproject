// fetch workout from the server using the fetchWorkout function
import fetchWorkout from "../services/fetchWorkout";
import session from "./session";

export function getWorkouts() {
  return fetchWorkout<Workout[]>("workouts");
}

// get workout from id
export function getWorkout(workout: Workout) {
  return fetchWorkout<Workout>(`workouts/${workout.id}`);
}

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
  workoutType: string;
}
