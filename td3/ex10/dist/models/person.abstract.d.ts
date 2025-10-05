import { UserRole } from './user.model';
export declare abstract class Person {
    id: number;
    name: string;
    role: UserRole;
    constructor(id: number, name: string, role: UserRole);
    abstract greet(): void;
}
//# sourceMappingURL=person.abstract.d.ts.map