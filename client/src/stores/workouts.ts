import { reactive } from 'vue';

 const data = reactive({
         workout: null as Workout | null,
         workouts: [] as Workout[],
     });

     data.workouts.push(
        {
            firstName: 'Rishabh',
            lastName: 'Patel',
            handle: 'Rishabh',
            title: 'Swimming under hudson river',
            workoutDate: '11-9-2022',
            workoutTime: '140 minutes',
            workoutLocation: 'New Windsor, NY',  
            pictureUrl: 'https://images.immediate.co.uk/production/volatile/sites/34/2022/03/GettyImages-975116404-fc1ed5e.jpg?quality=90&resize=620%2C413',
            workoutType: 'Swimming',
        }
    )

    data.workouts.push(
        {
            firstName: 'Moshe',
            lastName: 'Plotkin',
            handle: 'Moshe',
            title: 'Running in the woods',
            workoutDate: '10-1-2022',
            workoutTime: '110 minutes',
            workoutLocation: 'New Paltz, NY', 
            pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeTGaCEdhqWVUWyYpWrK-umQblqXJ752O6HtXaNsCYLcdmamKUhnYF4g_YEZhI6L2zLs&usqp=CAU',
            workoutType: 'Running',
        }
    )

    data.workouts.push(
        {
            firstName: 'John',
            lastName: 'Doe',
            handle: 'John',
            title: 'Cycling in the mountains',
            workoutDate: '14-9-2022',
            workoutTime: '80 minutes',
            workoutLocation: 'Middletown, NY',
            pictureUrl: 'https://philiplochner.ghost.io/content/images/2020/06/stelvio-1.png',
            workoutType: 'Cycling',
        }
    )

    data.workouts.push(
        {
            firstName: 'Big',
            lastName: 'Show',
            handle: 'Big',
            title: 'Hiking in the mountains',
            workoutDate: '12-1-2022',
            workoutTime: '120 minutes',
            workoutLocation: 'Woodbury, NY',
            pictureUrl: 'https://media.istockphoto.com/id/1077136200/photo/sunset-hiking-scenery-in-the-mountains.jpg?s=170667a&w=0&k=20&c=eVYk9cyygxBj249NghUOpZEtMfLVQS58tkxAlYaGUag=',
            workoutType: 'Hiking',
        }
    )

    export function deleteWorkout(workout: Workout) {
        const index = data.workouts.indexOf(workout);
        data.workouts.splice(index, 1);
    }
    
    export class Workout {
        public firstName?: string;
        public lastName?: string;
        public handle?: string;
        public title?: string;
        public workoutDate?: string;
        public workoutTime?: string;
        public workoutLocation?: string;
        public pictureUrl?: string;
        public workoutType?: string;
    }

    export default data;