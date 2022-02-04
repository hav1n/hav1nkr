const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Response Complate`);
})

app.listen(PORT, () => {
  console.log(`Server On : http://hav1n.kr:${PORT}/`);
})
