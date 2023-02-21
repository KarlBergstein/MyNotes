interface User {
    id: number
    name: string
    surname: string
    dateOfBirth: Date
    sex: string
    login: string
    password: string
    siteId: number

    notes: Note[]
}

interface Site {
    id: number
    title: string

    users: User[]
}

interface Note {
    id: number
    header: string
    text: string
    userId: number
    createdTime: Date
    color: string
}
