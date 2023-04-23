const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// handling CORS
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// route for handling requests from the Angular client
app.get('/api/welcome', (req, res) => {
  res.json({
    message:
      'HI Roben, I test the Express server!'
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
