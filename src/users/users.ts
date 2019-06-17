
import dbConnent from '../database/connection'

export default class Users extends dbConnent {
  
  checkLoginUser(email: string) {
    return this.dbQuery(`select * from users where umail = $1`, [email])
    .then((data:any) => {      
      if(data.length > 0) {
        return false;
      } else {
        return true;
      }
    })
  };

  regUser(email: string, password: string, name: string, surname: string) {

    return this.checkLoginUser(email)
    .then((data:any) => {
      if(data == false) {
        return ['user exists'];
      } else {
        return this.dbQuery(`insert into users(umail, upass, uname, usurname) values ($1, $2, $3, $4)`, [email, password, name, surname])
      }
    })

  };

  changeAvatar(id: number, photo: string) {
    return this.dbQuery('update users set photo = $1 where uid = $2', [photo, id])
  }

  changeDataUser(id:number, email: string, name: string, surname: string, password: string) {
    return this.dbQuery('update users set uname = $1, usurname = $2, umail = $3, upass = $4 where uid = $5;', [name, surname, email, password, id])
  }

  getUserById(id:number) {
    return this.dbQuery('select * from users where uid = $1;', [id])
  }

  getAllUsers(start: number, offset: number) {
    return this.dbQuery('select * from users order by uid offset $1 limit $2', [offset, start]);
  }

  countUser() {
    return this.dbQuery('select count(*) from users');
  }

  loginUser(email: string, password: string) {
    return this.dbQuery('select * from users where umail = $1 and upass = $2', [email, password]);
  }

  myNews(id: number) {
    return this.dbQuery('select  nid, ndatecreate, nphoto, ntitle, ndiscription from news left join users u on news.u_id = u.uid where u_id = $1', [id])
  }


  myIvent(id: number) {
    return this.dbQuery('select iid, idatestart, idateend, ititile, idiscription, iimage, iusers_all, ivent.u_id from ivent left join ivent_users iu on ivent.iid = iu.i_id where ivent.u_id = $1', [id])

  }

  partIvent(id: number) {
    
    return this.dbQuery('select * from ivent left join ivent_users iu on ivent.iid = iu.i_id where iu.u_id = $1', [id])

  }
}