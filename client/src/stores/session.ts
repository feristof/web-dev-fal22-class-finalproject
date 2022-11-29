import { reactive } from 'vue';

const session = reactive ({
    user: null as User | null,
    users: [] as User[],
});

session.users.push({
    firstName: 'Rishabh',
    lastName: 'Patel',
    email: 'patelr25@newpaltz.edu',
    handle: 'Rishabh',
})

session.users.push({
    firstName: 'Moshe',
    lastName: 'Plotkin',
    email: 'plotkinm@newpaltz.edu',
    handle: 'Moshe',
})

session.users.push({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    handle: 'John',
})

session.users.push({
    firstName: 'Big',
    lastName: 'Show',
    email: 'bigshow@gmail.com',
    handle: 'Big',
})


export function login(firstName: string, lastName: string) {
    for(let i = 0; i < session.users.length; i++) {
        if(session.users[i].firstName === firstName && session.users[i].lastName === lastName) {
            session.user = session.users[i];
        }
    }
}

export function logout(){
    session.user = null;
}

export class User {
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public handle?: string;
}

export default session;