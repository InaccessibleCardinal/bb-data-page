import express from 'express';
import cors from 'cors';
import {router} from './router';

const app = express();
const PORT = 4000;

app.use(cors());
router(app);

app.listen(PORT, () => console.log(`express app listening on ${PORT}`));