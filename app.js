const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
