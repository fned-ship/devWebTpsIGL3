export type UserRole = 'User' | 'Admin';

export interface User {
    id: number;
    name: string;
    role: UserRole;
}

export interface Admin extends User {
    role: 'Admin';
    permissions: string[];
}