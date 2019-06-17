import dbConnent from '../database/connection'

export default class Ivents extends dbConnent {

  getAllIvents(start: number, offset:number){
    return this.dbQuery('select * from ivent left join users u on ivent.u_id = u.uid order by idatestart desc, iid offset $1 limit $2', [offset, start]);
  }

  getIventById(id: number) {
    return this.dbQuery('select * from ivent where iid = $1', [id]);
  }

  
  addIvent(datestart: string, dateend: string, title: string, description: string, image: string,  ncount_user: number, id:number) {
    return this.dbQuery('insert into ivent(idatestart, idateend, ititile, idiscription, iimage, iusers_all, u_id) values ($1, $2, $3, $4, $5, $6, $7)', [datestart, dateend, title, description, image, ncount_user, id]);
  }

  countIvent() {
    return this.dbQuery('select count(*) from ivent');
  }

  partyIvent(id: number) {
    return this.dbQuery('select * from ivent_users left join users u on ivent_users.u_id = u.uid where i_id = $1', [id]);

  }

  join(i_id:number, u_id:number) {
    return this.dbQuery('insert into ivent_users(i_id, u_id) VALUES ($1, $2)', [i_id, u_id]);
  }

} 