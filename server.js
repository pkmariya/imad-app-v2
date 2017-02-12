var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article One | Mariya',
    heading: 'Article One Heading', 
    date: 'Feb 12, 2017', 
    content: `<p>
                    This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article.
                     This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article.
                      This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article.
                </p>`
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
        <head>
            <title>${title}</title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="main-container">
                <div>
                    <a href="/">Home</a>
                    <a href="article-two">Article Two</a>
                    <a href="article-three">Article Three</a>
                    <hr>
                </div>
                <div>
                    ${heading}
                    <br>
                </div>
                <div>
                    ${date}
                    <br>
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html> `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res) {
	res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req, res) {
	res.sendfile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res) {
	res.sendfile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Puppy.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Puppy.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
