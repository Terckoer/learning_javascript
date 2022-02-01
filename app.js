
const fakeApiItems = 
    [
        {
            url:'https://placeimg.com/640/480/people',
            title:'people'
        },
        {
            url:'https://placeimg.com/640/480/animals',
            title:'animals'
        },
        {
            url:'https://placeimg.com/640/480/tech',
            title:'tech'
        }
    ];

const $container = document.getElementById('id-container');
const $template = document.getElementById('id-template').content;
const $fragment = document.createDocumentFragment();

fakeApiItems.forEach(el =>{
    $template.querySelector('img').setAttribute('src', el.url);
    $template.querySelector('p').textContent = el.title;
    const $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

document.querySelector('body').appendChild($fragment);