const { connect } = require('./mongo');

 function getWorkouts() {
     return data;
 }

 async function collection(){
    const client = await connect();
    return client.db('FitnessApp').collection('workouts');
}

async function getWorkouts(id) {
    const db = await collection();
    const data = await db.find().toArray()
    return data;
}

async function getWorkout(id) {
    const db = await collection();
    const data = await db.findOne({ id: id })
    return data;
}

 //sending data to controller/workouts.js
 module.exports = {
     getWorkouts,
     getWorkout
 };