import { note1, note2, note3, site } from '../src/data'
import { getAllNotes } from '../src/functions'

describe('functions tests', () => {
    test('getAllNotes', () => {
        const except = [note1, note2, note3]
        const actual = getAllNotes(site)

        expect(except).toStrictEqual(actual)
    })
})
