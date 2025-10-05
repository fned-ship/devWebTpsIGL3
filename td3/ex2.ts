const isDone: boolean = false;
const studentName: string = "ali";
const studentAge: number = 25;
const studentId: number | string = "A123"; 

const scores: number[] = [85, 92, 78, 95]; 

const studentTuple: [number, string, number] = [101, "ahmed", 88];
console.log(`Student Name: ${studentTuple[1]}`);
enum UserRole {
    Admin,
    SuperUser,
    Viewer
}

const user1Role: UserRole = UserRole.Admin;
console.log(`Role value: ${user1Role}`); 
console.log(`Role name: ${UserRole[user1Role]}`); 