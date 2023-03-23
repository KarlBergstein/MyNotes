import { site } from './data'
import { getAllNotes, resolveUserById } from './functions'

// Меняем заголовок сайта
const title = document.querySelectorAll('title')
title[0].innerText = site.title

// Выводим список пользователей
const userList = document.querySelectorAll('#user_list')
let inner = ''
let index = 1
for (const user of site.users) {
    const indexText = index.toString()
    inner += `<li>${indexText}. ${user.name} ${user.surname}</li>`
    index++
}

userList[0].innerHTML = inner

// Выводим погоду
const headerWidget = document.querySelectorAll<HTMLElement>('#headerWidget')
headerWidget[0].style.color = site.weather.color
headerWidget[0].innerHTML = 'Погода в' + site.weather.city
const textWidget = document.querySelectorAll('#textWidget')
textWidget[0].innerHTML = site.weather.temperature.toString() + site.weather.units

// Поиск всех заметок
const allNotes = getAllNotes(site)

console.warn(allNotes)

const notes = document.querySelectorAll<HTMLElement>('#notes')

let except = ''

for (const note of allNotes) {
    except +=
        `<div class="note" style="background: ${note.color}">
            <div class="left">
                <div class="containter">
                    <div class="designation_note">
                        <h1>${note.header}</h1>
                    </div>
                    <div class="text_note">
                        <h2>${note.text}</h2>
                    </div>
                </div>
                </div>
            <div class="right">
                <div class="user">${resolveUserById(note.userId, site).name}</div>
                <div class="date_note">${note.createdTime.toDateString()}</div>
            </div>
        </div>`
}

notes[0].innerHTML = except
