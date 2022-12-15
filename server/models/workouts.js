const { connect } = require('./mongo');

function getWorkouts() {
    return data;
}


async function collection() {
    const client = await connect();
    return client.db('FitnessApp').collection('workouts');
}

async function getWorkouts(id) {
    const db = await collection();
    const data = await db.find().toArray()
    return data;
}
//GET
async function getWorkout(id) {
    const db = await collection();
    const data = await db.findOne({ id: id })
    return data;
}

async function searchWorkout(search) {
    const db = await collection();
    const data = await db.find({ title: { $regex: q, $options: 'i' } }).toArray()
    return data;
}

//DELETE
async function deleteWorkout(id) {
    const db = await collection();
    const data = await db.deleteOne({ id: id })
    return data;
}

//POST
async function addWorkout(workout) {
    const db = await collection();
    const data = await db.insertOne(workout)
    return data;
}

//sending data to controller/workouts.js
module.exports = {
    getWorkouts,
    getWorkout,
    deleteWorkout,
    addWorkout,
    searchWorkout
};