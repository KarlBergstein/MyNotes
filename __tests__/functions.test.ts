import { note1, note2, note3, site, user1, user2, user3 } from '../src/data'
import { getAllNotes, resolveUserById } from '../src/functions'

describe('functions tests', () => {
    test('getAllNotes', () => {
        const except = [note1, note2, note3]
        const actual = getAllNotes(site)

        expect(except).toStrictEqual(actual)
    })

    test('resolveUserById', () => {
        let userId = 0
        let user = user1

        let actual = resolveUserById(userId, site)

        expect(user).toStrictEqual(actual)

        userId = 1
        user = user2

        actual = resolveUserById(userId, site)

        expect(user).toStrictEqual(actual)

        userId = 2
        user = user3

        actual = resolveUserById(userId, site)

        expect(user).toStrictEqual(actual)
    })
})
