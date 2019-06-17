import express = require('express');
import upload from '../storage.setting';
import Ivents from '../events/ivents'; 
//@ts-ignore
import cors from 'cors'
const app = express();
const ivents = new Ivents();



app.get('/all/:start/:offset',cors(), function (req, res) {
  ivents.countIvent()
  .then((count: []) => {
    ivents.getAllIvents(req.params.start, req.params.offset)
    .then((data: any) => {
      // data.push(count);
      res.send(data);
    });
  })
});

app.get('/get/:id',cors(), function (req, res) {
  ivents.getIventById(req.params.id)
    .then((data: any) => {
      res.json(data[0]);
    });
});




const add = upload.fields([{name: 'datestart'}, {name: 'dateend'}, {name: 'title'}, {name: 'description'}, {name: "image"}, {name: 'count'}, {name: 'id'}])
app.post('/add', add, cors(), (req: any, res: any) => {
  
  ivents.addIvent(req.body.datestart, req.body.dateend, req.body.title, req.body.description, req.files['image'][0].filename, req.body.count, req.body.id)
  .then((data: any) => {
    console.log(data);
    
    if (data.length == 0) {
      res.json("ok");
    } else {
      res.send(data);
    }
  })
})

app.get('/party/:id',cors(), (req: any, res:any) => {
  console.log(req.params.id);
  
  ivents.partyIvent(req.params.id)
  .then((data: any) => {
    res.json(data);
  })
})

app.get('/join/:i_id/:u_id',cors(), (req:any, res:any) => {
  ivents.join(req.params.i_id, req.params.u_id)
  .then((data: any) => {
    if (data.length == 0) {
      res.json("ok");
    } else {
      res.json(data);
    }
  })
})




export default app;
