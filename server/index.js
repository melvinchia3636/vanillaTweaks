// express
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json())
app.use(cors())

app.post('/download/:type', async (req, res) => {
  const { data: { link, status } } = await axios({
    url: `https://vanillatweaks.net/assets/server/zip${req.params.type}.php`,
    method: "POST",
    data: new URLSearchParams({
      packs: JSON.stringify(Object.fromEntries(Object.entries(req.body).map(([category, packs]) => [category.toLowerCase(), packs.map(pack => pack.name)]))),
      version: "1.18",
    }),
    headers: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  })
  res.setHeader('Content-Type', 'application/json');
  res.send({ link, status })
});

app.listen(port, () => console.log(`Listening on port ${port}`));