import { User } from "./user.model";

export class Todo {
    id: number;
    name: string;
    completed: boolean;
    user : User;
}
