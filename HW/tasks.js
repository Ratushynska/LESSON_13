/*Все робити за допомоги js.
- створити блок,
- додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.*/

/*
const block = document.createElement('div');
block.innerText = 'Hello!'
block.setAttribute('class', 'wrap collapse alpha beta')
block.style.backgroundColor = 'black';
block.style.color = 'yellow';
block.style.fontSize = '50px';
document.body.appendChild(block);
document.body.append(block.cloneNode());
*/

/*- Є масив
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const i of coursesAndDurationArray) {
    let newBlock = document.createElement('div');
    newBlock.innerText = `${i.title} ${i.monthDuration}`;
    document.body.appendChild(newBlock);
}
*/

/*- Є масив
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
Завдання робити через цикли.*/

/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const i of coursesAndDurationArray) {
    const divElement = document.createElement('div');
    divElement.setAttribute('class','item');

    let h1Element = document.createElement('h1');
    h1Element.setAttribute('class','heading');
    h1Element.innerText = i.title;

    let pElement = document.createElement('p');
    pElement.setAttribute('class','description');
    pElement.innerText = i.monthDuration;

    document.body.appendChild(divElement);
    divElement.appendChild(h1Element);
    divElement.appendChild(pElement);
}
*/
