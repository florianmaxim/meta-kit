import path from 'path';

import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000,() => console.log('Server is listening'));
