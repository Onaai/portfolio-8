const express = require('express');
const app = express();
const port = 3000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola Chicos! Portfolio 8' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
