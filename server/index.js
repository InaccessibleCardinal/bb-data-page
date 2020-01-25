const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();
const PORT = 3001;

app.use(cors());
router(app);

app.listen(PORT, () => console.log(`express app listening on ${PORT}`));



