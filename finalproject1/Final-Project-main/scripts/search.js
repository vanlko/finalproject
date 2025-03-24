const API_Key = "f6c7aca6349b3b9af8216ccb6bb5d8fa";

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('search-btn').addEventListener('click',function(event){
        event.preventDefault();
        const title = document.getElementById('search').value;
        title.textContent = '';

        if(title.trim()){
            fetchMovie(title);
            document.getElementById('details-page').style.display = 'block';
        }else{
            window.alert('Please enter a movie title');
            document.getElementById('details-page').style.display = 'none';
        }
    });
});

function fetchMovie(title){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${title}`)
    .then(response => response.json())
    .then(data => {
        const results = data.results[0];
        document.getElementById('title').textContent = results.title;
        document.getElementById('release_date').textContent = results.release_date;
        document.getElementById('overview').textContent = results.overview;
        document.getElementById('vote_average').textContent = results.vote_average;
        document.getElementById('original_language').textContent = results.original_language;
        document.getElementById('poster').src = 'https://image.tmdb.org/t/p/w500' + results.poster_path;
        

    })
    .catch(error => console.error(error));
}
