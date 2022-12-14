import { reactive } from 'vue';
import fetchWorkout from '../services/fetchWorkout';
import { computed } from 'vue';

const session = reactive ({
    user: null as User | null,
    users: [] as User[],
    loading: 0,
    error: null as string | null,
    messages: [] as Message[],
});

session.users.push({
    id: 1,
    firstName: 'Rishabh',
    lastName: 'Patel',
    email: 'patelr25@newpaltz.edu',
    handle: 'Rishabh',
    password: '123456',
    admin: true

})

session.users.push({
    id: 2,
    firstName: 'Moshe',
    lastName: 'Plotkin',
    email: 'plotkinm@newpaltz.edu',
    handle: 'Moshe',
    password: '123456',
    admin: true
 
})

session.users.push({
    id: 3,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    handle: 'John',
    password: '123456',
    admin: false

})

session.users.push({
    id: 4,
    firstName: 'Big',
    lastName: 'Show',
    email: 'bigshow@gmail.com',
    handle: 'Big',
    password: '123456',
    admin: false
})

export function setError(error: string | null) {
    session.error = error;
    if(error){
        session.messages.push({ type: 'danger', text: error});
    }
}


export async function api<T>(url: string, data: any = null, method?: string ){
    session.loading++;
    setError(null);
    try {
        return await fetchWorkout<T>(url, data, method);
    } catch (error) {
        setError(error as string);
    }finally{
        session.loading--;
    }
    return {} as T;
}

export const isLoading = computed(() => !! session.loading);


export function login(firstName: string, lastName: string, password: string) {
    for(let i = 0; i < session.users.length; i++) {
        if(session.users[i].firstName === firstName && session.users[i].lastName === lastName && session.users[i].password === password) {
            session.user = session.users[i];
        }
    }
}

export function logout(){
    session.user = null;
}

export class User {
    public id?: number;
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public handle?: string;
    public password?: string;
    public admin?: boolean;
}

export interface Message {
    type: 'success' | 'danger';
    text: string;
}

export default session;