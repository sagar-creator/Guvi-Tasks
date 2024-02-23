class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}


let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


console.log(casinoRoyale);


let moviesArray = [
    new Movie("Batman", "DC comics", "PG"),
    new Movie("Joker", "DC comics", "R"),
    new Movie("Loki", "Marvel studio", "PG"),
    new Movie("SpiderMan", "Marvel studio", "PG-13"),
];


 


console.log("PG Movies:");
console.log(Movie.getPG(moviesArray));
