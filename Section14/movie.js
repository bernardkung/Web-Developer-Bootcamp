function buildString(obj) {
    let str = "You have ";
    if (obj.hasWatched) {
        str += "watched ";
    } else {
        str += "not seen ";
    }
    str += "\"" + obj.name + "\" - " + obj.rating + " stars";
    return str;
}



function listMovies() {
    var watch;
    movies.forEach(function(movie) {
        // if (movie.hasWatched) {
        //     watch = "watched";
        // } else {
        //     watch = "not seen";
        // }
        
        // console.log(`You have ${watch} "${movie.name}" - ${movie.rating} stars.`)
    
        console.log(buildString(movie));
    })
}


let movies = [
    {
        name: "Game Over, Man",
        hasWatched: true,
        rating: 2
    },
    {
        name: "Scott Pilgrim vs. the World",
        hasWatched: true,
        rating: 3,
    },
    {
        name: "Sei",
        hasWatched: false,
        rating: 2
    },
    {
        name: "River's Edge",
        hasWatched: false,
        rating: 3
    }
]