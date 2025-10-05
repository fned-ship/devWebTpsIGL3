var isDone = false;
var studentName = "ali";
var studentAge = 25;
var studentId = "A123";
var scores = [85, 92, 78, 95];
var studentTuple = [101, "ahmed", 88];
console.log("Student Name: ".concat(studentTuple[1]));
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["SuperUser"] = 1] = "SuperUser";
    UserRole[UserRole["Viewer"] = 2] = "Viewer";
})(UserRole || (UserRole = {}));
var user1Role = UserRole.Admin;
console.log("Role value: ".concat(user1Role));
console.log("Role name: ".concat(UserRole[user1Role]));
