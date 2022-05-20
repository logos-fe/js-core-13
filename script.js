// Події клавіатури
// keydown - натискання клавіші
// keyup - відпускання клавіші
// keypress - після keydown, коли натискається символ, не використовується

// const body = document.querySelector('body');
//
// body.addEventListener('keydown', (event) => {
//   console.log('event.key', event.key)
//   console.log('event.code', event.code)
// });

// const ball = document.querySelector('.ball');
//
// window.addEventListener('keydown', (event) => {
//   // console.log('event.key', event.key)
//
//   if (event.key === 'ArrowUp') {
//     const position = ball.offsetTop;
//     ball.style.top = position - 100 + 'px'
//   }
//
//   if (event.key === 'ArrowDown') {
//     const position = ball.offsetTop;
//     ball.style.top = position + 100 + 'px'
//   }
//
//   if (event.key === 'ArrowLeft') {
//     const position = ball.offsetLeft;
//     ball.style.left = position - 100 + 'px'
//   }
//
//   if (event.key === 'ArrowRight') {
//     const position = ball.offsetLeft;
//     ball.style.left = position + 100 + 'px'
//   }
//
//   ball.style.backgroundColor = 'yellow'
// })
//
//
// window.addEventListener('keyup', (event) => {
//   ball.style.backgroundColor = 'red'
// })

// Scroll
// scroll - при прокрутці сторінки
// wheel - при прокрутці колеса миші

// const scroll = document.querySelector('.scroll');
//
// window.addEventListener('scroll', (event) => {
//   const position = window.pageYOffset;
//   scroll.innerHTML = `Scroll: ${position}px`
// })

// scrollTo
// const scrollUp = document.querySelector('.scroll-up')
//
// scrollUp.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   })
// })

// scrollIntoView

// const liList = document.querySelectorAll('li');
// const blockList = document.querySelectorAll('.block');
//
// for (let i = 0; i < liList.length; i++) {
//   liList[i].addEventListener('click', () => {
//     blockList[i].scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     })
//   })
// }

// Attributes
// Атрибути елементів

// Стандартні HTML атрибути стають властивостями елементів

// <body id="page"></body> - елемент із атрибутом id
// body.id = "page"

// Атрибут має одне значення, а властивість має зовсім інше

// <input type="text"></input>  type for input - стандартний атрибут
// input.type = 'text'

// <div type="block"></div> type for div - нестандартний атрибут
// div.type = нічого

// Доступи до атрибутів

// const page = document.querySelector('.page');
// hasAttribute(name) - перевіряє чи є атрибут, true/false
// console.log(page.hasAttribute('id'))
// console.log(page.hasAttribute('name'))

// getAttribute(name) - повертає значення атрибута

// console.log(page.getAttribute('custom-attribute'))
// console.log(page.getAttribute('id'))
// console.log(page['custom-attribute'])
// console.log(page.id)

// setAttribute(name, value) - задає значення атрибута

// page.setAttribute('custom-btn', 'btn');


// removeAttribute(name) - видаляє атрибут

// page.removeAttribute('custom-attribute')
// const input = document.querySelector('input');

// console.log(input.checked)  // true/false
// console.log(input.getAttribute('checked')) // ''

// const page = document.querySelector('.page');

// page.id = 'custom-page'
// page.setAttribute('id', 'page')

// page.setAttribute('custom-attribute', 'custom-value')
// DON'T WORK
// page['custom-attribute'] = 'custom-value2222'

// Data attributes - взаємодії з даними з HTML
// const page = document.querySelector('.page');

// get all data attributes - dataset
// console.log(page.dataset.type)

// const user = {
//   name: 'John',
//   age: 30,
//   email: 'test@gmail.com'
// }
//
// const divList = document.querySelectorAll('div');
// for (let div of divList) {
//   const field = div.dataset.showInfo
//   div.innerHTML = user[field]
// }

const usersList = [
  {
    name: 'John',
    age: 30,
    email: 'test1@gmail.com',
  },
  {
    name: 'Mike',
    age: 25,
    email: 'test2@gmail.com',
  },
  {
    name: 'Ann',
    age: 40,
    email: 'test3@gmail.com',
  }
]

const trList = document.querySelectorAll('table > tbody > tr');

trList.forEach((tr, index) => {
  const tdList = tr.querySelectorAll('td');

  tdList.forEach((td) => {
    const field = td.dataset.showInfo
    td.innerHTML = usersList[index][field]
  })
})
