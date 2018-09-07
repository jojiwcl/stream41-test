const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/apitest', (req, res) => {
  // Generate some passwords
  const testString = 'Api call test'

  // Return them as json
  res.json(testString);

  console.log(`Api call successful`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Stream41 listening on ${port}`);
