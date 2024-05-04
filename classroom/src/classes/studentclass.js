import { nanoid } from "nanoid";

class StudentClass{
    constructor(fullName, userName, email, password ,profileImage){
        this.id = nanoid()
        this.fullName=fullName,
        this.userName=userName,
        this.email=email,
        this.password=password,
        this.grades=[]
        this.profileImage=profileImage
    }
}

export default StudentClass