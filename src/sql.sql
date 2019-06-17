create table users (
  uid serial primary key,
  uname text,
  usurname text,
  upass text,
  umail text,
  photo text
);

create table news (
  nid serial primary key,
  ndatecreate date,
  nphoto text,
  ntemplate text,
  ndiscription text,
  u_id int,
  foreign key (u_id) references users(uid) on delete cascade
);


ALTER TABLE news
ADD COLUMN ntitle text;

create table ivent (
    iid serial primary key,
    idatestart date,
    idateend date,
    ititile text,
    idiscription text,
    iimage text,
    iusers_all int,
    u_id int,
    foreign key (u_id) references users(uid) on delete cascade
);

create table ivent_users (
    pid serial primary key,
    i_id int,
    u_id int,
    foreign key (i_id) references ivent(iid) on delete cascade,
    foreign key (u_id) references users(uid) on delete cascade
);

