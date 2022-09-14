
const imdb = async() => {
  try{
    var movieName = document.getElementById("movieName")

    const res = await fetch(`https://www.omdbapi.com/?t=${movieName.value}&apikey=bcea3e57`)
    const data = await res.json()
    console.log(data)
  if(data.Title){
    var details1 = document.getElementById("details")
    details1.innerHTML = `<img src=${data.Poster} class="card-img-top" alt="...">
    <div class="card-body text-white">
      <h2 class="card-title">${data.Title}</h2>
      <p class="card-text"><b>Actors</b>: ${data.Actors} 
      <p class="card-text"><b>Director</b>: ${data.Director} </p>
      <p class="card-text"><b>Genre</b>: ${data.Genre}</p>
      <p class="card-text"><b>IMDB Rating</b>: <i class="bi bi-star-fill star"></i> <b>${data.imdbRating}/10</b></p>
      <p class="card-text"><b>Languages</b>: ${data.Language}</p>
 
    </div>`}
    else{
      throw("")
    }
  }
  catch(err){
    console.log(err)
    alert("Search string is not correct")
    }
 
 }
 
 //Assigning submit button with addeventlistener and a callback function(weatherData)
 var submitButton = document.getElementById("searchButton")
 submitButton.addEventListener('click', imdb)

