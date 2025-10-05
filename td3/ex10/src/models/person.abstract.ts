import { UserRole } from './user.model';


export abstract class Person {
    constructor(
        public id: number,
        public name: string,
        public role: UserRole
    ) {}

    abstract greet(): void;
}