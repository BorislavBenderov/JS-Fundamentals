function movies(arr) {
    let movies = [];

    arr.forEach((el) => {
        if (el.includes('addMovie ')) {
            let movie = el.replace('addMovie ', '');
            movies.push({
                name: movie
            });
        } else if (el.includes('directedBy')) {
            let [name, director] = el.split(' directedBy ');
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            })
        } else if (el.includes('onDate')) {
            let [name, date] = el.split(' onDate ');
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }
    })

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}