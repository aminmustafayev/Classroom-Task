import { nanoid } from "nanoid";

class TeacherClass {
    constructor(fullName, userName, email, password, profileImage) {
        this.id = nanoid()
        this.fullName = fullName,
            this.userName = userName,
            this.email = email,
            this.password = password,
            this.major = []
        this.profileImage = profileImage
    }
}
export default TeacherClass