import { site } from './data'

// Меняем заголовок сайта
const title = document.querySelectorAll('title')
title[0].innerText = site.title

// Выводим список пользователей
const userList = document.querySelectorAll('#user_list')
let inner = ''
let index = 1
for (const user of site.users) {
    const indexText = index.toString()
    inner += '<li>' + indexText + '. ' + user.name + ' ' + user.surname + '</li>'
    index++
}

userList[0].innerHTML = inner

// Выводим погоду
const headerWidget = document.querySelectorAll<HTMLElement>('#headerWidget')
headerWidget[0].style.color = site.weather.color
headerWidget[0].innerHTML = 'Погода в' + site.weather.city
const textWidget = document.querySelectorAll('#textWidget')
textWidget[0].innerHTML = site.weather.temperature.toString() + site.weather.units

/* // Выводим заметки
const note1 = document.getElementById('#note1')
let meaning = ''
meaning = site.users.notes */
