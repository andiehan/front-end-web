var test = {
    
    bookTitles: [],

    initialize: function () {
        test.getTitles();
    },

    makeHTML: function () {
        var theHTML = '';
        for (var i = 0; i < test.bookTitles.length; i++) {
          theHTML += "<div class='nytArticle'>";
          theHTML += '<h3>' + test.bookTitles[i] + '</h3>';
          theHTML += '</div>';
        }
        $('.container').html(theHTML);
    },

    getTitles: function () {
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=dIMoz82mjAPDRzQn6TuNTzGGAGx5SsbW")
            .then(response => response.json()
                .then(data => {
                    data.results.books.forEach(element => {   
                        console.log(element.title);
                        test.bookTitles.push(element.title);
                    });
                    console.log(test.bookTitles);
                    test.makeHTML();
                })
                )
                .catch(error => console.log(error));
    },

};