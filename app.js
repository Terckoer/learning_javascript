
// const fakeApiItems = 
//     [
//         {
//             url:'https://placeimg.com/240/240/people',
//             title:'people'
//         },
//         {
//             url:'https://placeimg.com/240/240/animals',
//             title:'animals'
//         },
//         {
//             url:'https://placeimg.com/240/240/tech',
//             title:'tech'
//         }
//     ];

// const $container = document.getElementById('id-container');
// const $template = document.getElementById('id-template').content;
// const $fragment = document.createDocumentFragment();

// fakeApiItems.forEach(el =>{
//     $template.querySelector('img').setAttribute('src', el.url);
//     $template.querySelector('p').textContent = el.title;
//     const $clone = document.importNode($template, true);
//     $fragment.appendChild($clone);
// });


// $template.querySelector('img').setAttribute('src', fakeApiItems[0].url);
// $template.querySelector('p').textContent = fakeApiItems[0].title+'aaaa';
// const $clone = document.importNode($template, true);


// $container.appendChild($fragment);

// $container.replaceChild($clone, $container.lastChild);
// $container.insertBefore($clone, $container.children[2]);
// $container.insertBefore($clone, $container.children[2]);

// const $elementCreated = document.createElement('div');
// const $elementCreated1 = document.createElement('img');
// const $elementCreated2 = document.createElement('p');
// $elementCreated1.setAttribute('src', 'https://placeimg.com/320/320/any');
// $elementCreated2.textContent = 'This was created in js';
// $elementCreated.appendChild($elementCreated1);
// $elementCreated.appendChild($elementCreated2);

//$container.after($elementCreated);
//$container.before(document.importNode($elementCreated, true));
// $container.prepend(document.importNode($elementCreated, true));
// $container.append(document.importNode($elementCreated, true));


const $div = document.getElementById('id-div');
const enter = function () {
    alert('Enter');
}

const leave = function () {
    alert('Leave');
}


//$div.onmouseenter = enter;

$div.addEventListener('click', ()=>{
  alert('Presione el click');  
});




