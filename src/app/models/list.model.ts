import { Task } from './task.model';

export interface List {
    listID?: number;
    userID: number;
    list_title: string;
    tasks?: Task[];
}
