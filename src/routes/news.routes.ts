import express = require('express');
import upload from './../storage.setting';
import News from './../news/news';
//@ts-ignore
import cors from 'cors'
const app = express();


const news = new News();

app.get('/all/:start/:offset',cors(), (req:any, res:any) => {
  news.countNews()
  .then((count: []) => {
    news.getAllNews(req.params.start, req.params.offset)
    .then((data:any) => {
      // data.push(count);
      res.send(data);
    })
  });
});

app.get('/get/:id', cors(), (req: any, res: any) => {
  news.getNewsById(req.params.id)
  .then((data:any) => {
    res.send(data[0]);
  })
})

app.get('/delete/:id',cors(), (req: any, res: any) => {
  news.delNews(req.params.id)
  .then((data:any) => {
    if (data.length == 0) {
      res.send("ok");
    } else {
      res.send(data);
    }
  })
})




const add = upload.fields([ {name: 'title'}, { name: 'discription'}, {name: 'user_id'}]);
app.post('/add', add, cors(), (req: any, res: any, ) => {
  
  
  news.addNews( req.body.title, req.body.user_id, String(req.body.discription))
  .then((data:any) => {
    if (data.length == 0) {
      res.send(["ok"]);
    } else {
      res.send(data);
    }
  })
})


export default app;