// express
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(express.json());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(cors());

app.post('/download/:type', async (req, res) => {
  const { data: { link, status } } = await axios({
    url: `https://vanillatweaks.net/assets/server/zip${req.params.type}.php`,
    method: 'POST',
    data: new URLSearchParams({
      packs: JSON.stringify(
        Object.fromEntries(
          Object.entries(req.body.data)
            .map(([category, packs]) => [category.toLowerCase(), packs]),
        ),
      ),
      version: `1.${req.body.version}`,
    }),
    headers: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  }).catch((e) => e);
  res.setHeader('Content-Type', 'application/json');
  res.send({ link, status });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
