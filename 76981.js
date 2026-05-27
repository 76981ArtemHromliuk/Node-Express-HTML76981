const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    imie: 'Artem',
    nazwisko: 'Hromliuk',
    indeks: '76981'
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})