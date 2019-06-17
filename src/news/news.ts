import dbConnent from '../database/connection'


export default class News extends dbConnent {
  
  getAllNews(start: number, offset: number) {
    return this.dbQuery('select * from news left join users u on news.u_id = u.uid   order by news.ndatecreate desc, nid offset $1 limit $2', [offset, start]);
  }


  countNews() {
    return this.dbQuery('select count(*) from news');
  }

  getNewsById(id:number) {
    return this.dbQuery('select * from news where nid = $1', [id]);
  }

  delNews(id:number) {
    return this.dbQuery('delete from news where nid = $1', [id]);
  }

  addNews( title: string, user_id: number, discription: string) {
    return this.dbQuery('insert into news( ntitle, u_id, ndiscription) values ($1, $2, $3)', [ title, user_id, discription]);
  }

}