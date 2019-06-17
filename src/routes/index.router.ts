import express = require('express');
const app = express();

import news_router from './news.routes';
import user_router from './user.routes'
import ivents_router from './ivents.routes';

app.use('/ivents', ivents_router);
app.use('/user', user_router);
app.use('/news', news_router);


export default app;