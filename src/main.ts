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

// Выводим заметки
