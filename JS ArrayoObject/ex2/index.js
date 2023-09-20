



function addMovie(e){
    console.log("addMovie");
    e.preventDefault();
    let form = document.querySelector("#form");
    if (!form.checkValidity()){
        form.classList.add("was-validated");
        form.ReportValidity();
        return;
    }
    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value;
    let director = document.getElementById("director").value;
    let borrowed = document.getElementById("borrow").checked;

    let movie = {
        title,
        year,
        director,
        borrowed
    } 
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    
    if (!movies.includes(movie.title)){
        movies.push(movie);
    }

    localStorage.setItem("movies", JSON.stringify(movies));
    window.location.reload();
}

function showBorrow(){
    console.log("showBorrow");
    let movies = JSON.parse(localStorage.getItem("movies"));
    console.log(movies);
    let resultpage = document.getElementById("movies");
    resultpage.innerHTML = "";
    movies.forEach(movie => {
        resultpage.innerHTML += `
        <tr><td>${movie.title}</td>
        <td>${movie.year}</td>
        <td>${movie.director}</td>
        <td>${movie.borrowed ? "Yes" : "No"}</td>
        </tr>`

    });
    document.getElementById("table").hidden = false;
}

