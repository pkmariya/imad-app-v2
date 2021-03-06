var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: 'Article One Title',
    heading: 'Article One Heading', 
    date: 'Feb 12, 2017', 
    content: `<p>
                    This is the content for my first Article. This is the content for my first Article. 
                </p>`
    },
    'article-two': {
    title: 'Article Two Title',
    heading: 'Article Two Heading', 
    date: 'Feb 12, 2017', 
    content: `<p>
                    This is the content for the second Article. This is the content for the second Article.
            </p>`
    },
    'article-three': {
    title: 'Article Three Title',
    heading: 'Article Three Heading', 
    date: 'Feb 12, 2017', 
    content: `<p>
                    This is the content for third Article. This is the content for third Article. This is the content for third Article.
            </p>`
    }
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

app.get('/:articleName', function(req, res) {
    var articleName = req.params.articleName;
	res.send(createTemplate(articles[articleName]));
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
