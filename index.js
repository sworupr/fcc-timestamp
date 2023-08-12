// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/', (req, res) => {
  const now = Date.now()
  res.json({
    unix: now,
    utc: Date(now)
  })
})

app.get('/api/:date', (req, res) => {
  let inputDate = req.params.date

  let date = new Date(inputDate)
  
  if (date.toString() === 'Invalid Date') date = new Date(Number(inputDate))


  if (date.toString() === 'Invalid Date') return res.json({ error: date.toString() })


  return res.json({
    utc: date.toUTCString(),
    unix: Math.floor(new Date(date).getTime())
  })
}
)



// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
