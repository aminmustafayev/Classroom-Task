import { nanoid } from "nanoid";

class Task {
    constructor( title, description, topic, deadline,teacherId  ){
        this.id=nanoid()
        this.createAt = new Date()
        this.title=title
        this.description=description
        this.topic=topic
        this.deadline=deadline
        this.teacherId=teacherId
        this.assignments =[]
    }
}