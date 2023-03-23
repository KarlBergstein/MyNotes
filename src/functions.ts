// Функция поиска всех заметок на сайте
export function getAllNotes(site: Site): Note[] {
    const allNotes: Note[] = []

    // you' code is here
    const userList: User[] = []
    for (const users of site.users) {
        userList.push(users)
    }
    for (const users of userList) {
        for (const notes of users.notes) {
            allNotes.push(notes)
        }
    }

    // allNotes = site.users.flatMap(user => user.notes.map(note => note))
    return allNotes
}

// Функция находит пользователя по заданному ID
export function resolveUserById(userId: number, site: Site): User | null {
    for (const user of site.users) {
        if (user.id === userId) {
            return user
        }
    }

    return null
}
