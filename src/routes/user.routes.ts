import express = require('express');
import upload from './../storage.setting'
import User from './../users/users';
//@ts-ignore
import cors from 'cors'

const app = express();
const user = new User();

const reg = upload.fields([{ name: 'email' }, { name: 'password' }, {name: 'name'}, {name: 'surname'}])
app.post('/reg', reg, cors(), (req:any, res:any) => {

  user.regUser(req.body.email, req.body.password, req.body.name, req.body.surname)
    .then((data: any) => {
      if (data.length == 0) {
        res.send(['ok']);
      } else {
        res.send(data);
      }
    })

});


const photo = upload.fields([{ name: 'id' }, { name: 'image' }]);
app.post('/photo', photo,cors(), (req: any, res: any) => {
  // console.log(req.files);
  
  user.changeAvatar(req.body.id, req.files['image'][0].filename)
    .then((data: any) => {
      if (data.length == 0) {
        res.json("ok");
      } else {
        res.json(data);
      }
    })
});


const uedit = upload.fields([{ name: 'id' }, { name: 'name' }, {name: 'surname'}, {name: 'password'}, {name: 'email'}])

app.post('/edit', uedit,cors(), (req:any, res:any) => {

  user.changeDataUser(req.body.id, req.body.email, req.body.name, req.body.surname, req.body.password)
  .then((data: any) => {
    if (data.length == 0) {
      res.json("ok");
    } else {
      res.json(data);
    }
  })
})


app.get('/all/:start/:offset',cors(), function (req, res) {

  user.countUser()
  .then((count:any) => {
    user.getAllUsers(req.params.start, req.params.offset)
    .then((data: any) => {
      // data.push(count);
      res.send(data);
    });
  })

});

app.get('/get/:id', cors(), (req, res) => {
  user.getUserById(req.params.id)
  .then((data: any) => {
    res.send(data[0]);
  });
})

app.get('/news/:id', cors(), (req, res) => {
  user.myNews(req.params.id)
  .then((data: any) => {
    res.send(data)
  })
})

app.get('/ivent/:id', cors(), (req, res) => {
  user.myIvent(req.params.id)
  .then((data: any) => {
    res.send(data)
  })
})

app.get('/joing/ivent/:id', cors(), (req, res) => {
  user.partIvent(req.params.id)
  .then((data: any) => {
    res.send(data)
  })
})



const login = upload.fields([{ name: 'email' }, {name: 'password'}])
app.post('/login', login,cors(), (req:any, res:any) => {
  user.loginUser(req.body.email, req.body.password)
  .then((data: any) => {
    if(data.length == 0) {
      res.send(["no user"]);
    } else {
      res.send(data[0]);
    }
    
  });
})


export default app;