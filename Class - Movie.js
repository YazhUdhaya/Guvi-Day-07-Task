// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”



class Movie{
    constructor(title,studio,rating='PG'){
       this.movieTitle = title;
       this.movieStudio = studio;
       this.movieRating = rating;
    }

title(){
    return `The Movie Title is :${this.movieTitle}`;
}
studio(){
   return `The Studio Name is :${this.movieStudio}`;
}
rating(){
    return `The Movie Rating is :${this.movieRating}`;
}
getPG(){

    return `The ${this.movieStudio} Is made a Movie Name Is ${this.movieTitle} and the Rating of this Movie - ${this.movieRating}`;
   }
}


let moviePG = new Movie('Spider Man', 'Marvel Studios');
console.log(moviePG.getPG());
let moviePG1 = new Movie('Wolverine', 'Marvel Studios',10);
console.log(moviePG1.getPG());


let movieDetails = new Movie("Casino Royale","Eon Productions","PG­13");
console.log(movieDetails.title());
console.log(movieDetails.studio());
console.log(movieDetails.rating());