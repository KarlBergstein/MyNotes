/* eslint-disable @typescript-eslint/no-unused-vars */
const user1: User = {
    id: 0,
    name: 'Thomas',
    surname: 'Edison',
    dateOfBirth: new Date(35),
    sex: 'man',
    login: 'Tom',
    password: '12345',
    siteId: 0,
    notes: []
}

const user2: User = {
    id: 1,
    name: 'Jack',
    surname: 'London',
    dateOfBirth: new Date(29),
    sex: 'man',
    login: 'Jack',
    siteId: 0,
    password: '23456',
    notes: []
}

const user3: User = {
    id: 2,
    name: 'Max',
    surname: 'Christy',
    dateOfBirth: new Date(42),
    sex: 'woman',
    login: 'FullMetalBitch',
    siteId: 0,
    password: '777777',
    notes: []
}

const note1: Note = {
    id: 0,
    header: 'Header1',
    text: 'Text1',
    userId: 0,
    createdTime: new Date('05.09.1985 15:33'),
    color: 'orange'
}

const note2: Note = {
    id: 1,
    header: 'Header2',
    text: 'Text2',
    userId: 1,
    createdTime: new Date('05.09.1985 15:33'),
    color: 'blue'
}

const note3: Note = {
    id: 2,
    header: 'Header3',
    text: 'Text3',
    userId: 2,
    createdTime: new Date('05.09.1985 15:33'),
    color: 'red'
}

export const site: Site = {
    id: 0,
    title: 'Title',
    users: [user1, user2, user3]
}
