export class User {
    userName: string;
    userAge: number;
    userEmail: string;
    userCourse: string;
    constructor(userName: string, userAge: number, userEmail: string, userCourse: string) {
        this.userName = userName;
        this.userAge = userAge;
        this.userEmail = userEmail;
        this.userCourse = userCourse;
    }
}