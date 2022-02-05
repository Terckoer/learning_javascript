
// // const fakeApiItems = 
// //     [
// //         {
// //             url:'https://placeimg.com/240/240/people',
// //             title:'people'
// //         },
// //         {
// //             url:'https://placeimg.com/240/240/animals',
// //             title:'animals'
// //         },
// //         {
// //             url:'https://placeimg.com/240/240/tech',
// //             title:'tech'
// //         }
// //     ];

// // const $container = document.getElementById('id-container');
// // const $template = document.getElementById('id-template').content;
// // const $fragment = document.createDocumentFragment();

// // fakeApiItems.forEach(el =>{
// //     $template.querySelector('img').setAttribute('src', el.url);
// //     $template.querySelector('p').textContent = el.title;
// //     const $clone = document.importNode($template, true);
// //     $fragment.appendChild($clone);
// // });


// // $template.querySelector('img').setAttribute('src', fakeApiItems[0].url);
// // $template.querySelector('p').textContent = fakeApiItems[0].title+'aaaa';
// // const $clone = document.importNode($template, true);


// // $container.appendChild($fragment);

// // $container.replaceChild($clone, $container.lastChild);
// // $container.insertBefore($clone, $container.children[2]);
// // $container.insertBefore($clone, $container.children[2]);

// // const $elementCreated = document.createElement('div');
// // const $elementCreated1 = document.createElement('img');
// // const $elementCreated2 = document.createElement('p');
// // $elementCreated1.setAttribute('src', 'https://placeimg.com/320/320/any');
// // $elementCreated2.textContent = 'This was created in js';
// // $elementCreated.appendChild($elementCreated1);
// // $elementCreated.appendChild($elementCreated2);

// //$container.after($elementCreated);
// //$container.before(document.importNode($elementCreated, true));
// // $container.prepend(document.importNode($elementCreated, true));
// // $container.append(document.importNode($elementCreated, true));


// const $div = document.getElementById('id-div');
// const enter = function () {
//     alert('Enter');
// }

// const leave = function () {
//     alert('Leave');
// }


// //$div.onmouseenter = enter;

// // $div.addEventListener('click', ()=>{
// //   alert('Presione el click');  
// // });
// // const $id = document.getElementById('id-div');
// // const $id2 = document.getElementById('id-div2');
// // function saluda(nombre='perengano'){
// //     alert('Hola '+nombre);
// // }


// // $id.addEventListener('click', function(e){
// //     saluda('Fulano');
// // });


// // const remove = (e) =>{
// //     alert('R');
// //     $id2.removeEventListener('click', remove);
// // }


// // $id2.addEventListener('click', remove);


// const $divs = document.querySelectorAll('div');

// $divs.forEach(e =>{
//     e.addEventListener('click', (evt)=>{
//         alert('this');
//         evt.stopPropagation();
//         evt.preventDefault();
//         console.log(e.className);
//     });
// });


// BOM BROWSER OBJECT MODEL

// document.addEventListener('click', (e)=>{
//     console.log(e.target);
// });

// window.addEventListener('resize', (e)=>{
//     console.clear('Mouse move en window');
//     console.log('Se mueve el mouse'+e);
//     console.log(this.innerHeight);
//     console.log(this.innerWidth);
//     console.log(this.outerHeight);
//     console.log(this.outerWidth);
//     console.log(window.screenX);
//     console.log(window.screenY);



// });

// window.addEventListener('DOMContentLoaded', (e)=>{
//     console.log(e);
// });

// window.addEventListener('load', (e)=>{
//     console.log(e);
// });


// this.addEventListener('DOMContentLoaded', (e)=>{
//     console.log(e);
// });

// this.addEventListener('load', (e)=>{
//     console.log(e);
// });

// document.addEventListener('DOMContentLoaded', (e)=>{
//     console.log(e);
// });

// METODOS 

// const $abrir = document.querySelector('.abrir');
// const $cerrar = document.querySelector('.cerrar');
// const $imprimir = document.querySelector('.imprimir');

// let referenciaVentana;

// $abrir.addEventListener('click',(e)=>{
//     //referenciaVentana = open('http://www.youtube.com');
//     referenciaVentana = open();
// });

// $cerrar.addEventListener('click',(e)=>{
//     referenciaVentana.close();
// });

// $imprimir.addEventListener('click',(e)=>{
//     window.print();
// });


console.log('Location attributes URL');
console.log(this.location);
console.log(location.hash);
console.log(location.host);
console.log(location.href);
console.log(location.origin);
console.log(location.port);
console.log(location.protocol);
console.log(location.pathname);
console.log(location.search);

console.log('Navigator URL');
console.log(this.navigator);
console.log(navigator.clipboard);
console.log(navigator.connection);
console.log(navigator.doNotTrack);
console.log(navigator.geolocation);
console.log(navigator.language);
console.log(navigator.languages);
console.log(navigator.serviceWorker);

console.log('History');
console.log(this.history);
console.log(history.back);
console.log(history.forward);
console.log(history.state);
console.log(history.scrollRestoration);