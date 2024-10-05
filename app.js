let api = 'http://www.omdbapi.com/?apikey=86972dfa&t='

let title = document.querySelector('#title');
let year = document.querySelector('#year');
let rating = document.querySelector('#rating');
let released = document.querySelector('#released');
let genre = document.querySelector('#genre');
let writer = document.querySelector('#writer');
let director = document.querySelector('#director');
let actors = document.querySelector('#actors');
let plot = document.querySelector('#plot');
let language = document.querySelector('#language');
let awards = document.querySelector('#awards');
let poster = document.querySelector('#poster');
let container = document.querySelector('#container');
let suggestion = document.querySelector('.suggestion');
container.classList.add('hidden');

let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    let movieInput = document.getElementById('movieName');
    let query = api + movieInput.value;
    fetch (query).then(data=>data.json()).then(data=>{
        document.getElementById('error').innerText = "";
        if(data.Error === 'Movie not found!'){
            document.getElementById('error').innerText = 'Movie not found!';
        } else{
            container.classList.remove('hidden');
            title.innerText = data.Title;
            year.innerText = data.Year;
            rating.innerText = data.imdbRating;
            if(data.imdbRating >8){
                suggestion.innerText = 'Highly Recommended';
                suggestion.style.backgroundColor = '#4CAF50';
                suggestion.style.color = 'black';

            } else if(data.imdbRating >6 && data.imdbRating <8){
                suggestion.innerText = 'Worth a Watch';
                suggestion.style.backgroundColor = '#FFCC00';
                suggestion.style.color = 'black';
            }else{
                suggestion.innerText = 'Not Recommended';
                suggestion.style.backgroundColor = 'red';
                suggestion.style.color = 'white';
            }
            released.innerText = data.Released;
            genre.innerText = data.Genre;
            writer.innerText = data.Writer;
            director.innerText = data.Director;
            actors.innerText = data.Actors;
            plot.innerText = data.Plot;
            language.innerText = data.Language;
            awards.innerText = data.Awards;
            poster.src = data.Poster;
        }
    })
})