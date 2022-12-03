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

export interface Message {
    type: 'success' | 'danger';
    text: string;
}

export default session;