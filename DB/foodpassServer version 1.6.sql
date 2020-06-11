--2020 05 31 version 1.6
drop table if exists user_order_menu_TB cascade;
drop table if exists user_TB cascade;
drop table if exists option_TB cascade;
drop table if exists menu_TB cascade;
drop table if exists foodtruck_TB cascade;
drop table if exists order_tb cascade;
drop table if exists relation_user_foodtruck_tb cascade;

create table foodtruck_tb
(
 foodtruck_id bigint generated always as identity(start with 1001 increment by 1),
 --owner_id bigint,
 name varchar(20),
 image text,
 introduction text,
 notice text,
 origin_information text,
 location geometry(POINT,4326),
 primary key(foodtruck_id)
 --foreign key(owner_id)references user_tb(user_id)
);

create table menu_tb
(
	menu_id bigint generated always as identity(start with 2001 increment by 1),
	foodtruck_id bigint,
	name varchar(20),
	image text,
	introduction text,
	price money,
	allergy_information text,
	
	primary key(menu_id),	
	foreign key(foodtruck_id) references foodtruck_TB(foodtruck_id)
	);

create table option_tb
(
	option_id bigint generated always as identity(start with 3001 increment by 1),
	foodtruck_id bigint,
	menu_id bigint,
	name varchar(20),
	extra_price money,
	
	primary key(option_id),
	foreign key(menu_id) references menu_TB(menu_id),
	foreign key(foodtruck_id) references foodtruck_tb(foodtruck_id)
);


create table user_tb
(
	user_id bigint generated always as identity(start with 4001 increment by 1),
	--foodtruck_id bigint,

	primary key(user_id)
	
);	
create table relation_user_foodtruck_tb
(
	user_id bigint not null,
	foodtruck_id bigint ,
	authority varchar(20),--partner:직원, owner:주인 , pure:순수한 손님
	rating real,
	unique(user_id, foodtruck_id),
	foreign key(user_id) references user_tb(user_id),
	foreign key(foodtruck_id) references foodtruck_tb(foodtruck_id)
);

create table user_order_menu_tb
(
	user_order_menu_id bigint generated always as identity(start with 1 increment by 1),
	user_id bigint,
	foodtruck_id bigint,
	order_date_time timestamp with time zone,
	price money,
	other_request text,
	is_received boolean default false,
	
	order_number int,
	finished_time timestamp with time zone,
	
	primary key(user_order_menu_id),
	foreign key(user_id, foodtruck_id) references relation_user_foodtruck_tb(user_id, foodtruck_id)

);

create table order_tb
(
	user_order_menu_id bigint not null,
	menu_id bigint not null,
	option_id bigint,
	count int default 1 check (count > 0),--메뉴의 개수
	
	unique(user_order_menu_id, menu_id, option_id),
	foreign key(menu_id) references menu_tb(menu_id),
	foreign key(option_id) references option_tb(option_id),
	foreign key(user_order_menu_id) references user_order_menu_tb(user_order_menu_id)
);





--지도 테스트

INSERT INTO foodtruck_tb VALUES(default,'푸켓쌀국수','트럭이미지', '베트남','공지', '원산지 정보',st_setsrid(ST_MakePoint(127.026272,37.499851),4326));--경도,위도
INSERT INTO foodtruck_tb  VALUES(default, '메드포갈릭','트럭이미지', '미국','공지', '원산지 정보',  st_setsrid(st_makepoint( 127.026615,37.497774 ),4326));
INSERT INTO foodtruck_tb VALUES(default,'아리랑','트럭이미지', '한식','공지', '원산지 정보',  st_setsrid(st_makepoint( 127.027098,37.499587),4326));
INSERT INTO foodtruck_tb VALUES(default,'참치공방','트럭이미지', '한식','공지', '원산지 정보',  st_setsrid(st_makepoint( 127.028428,37.497868 ),4326));

SELECT * FROM foodtruck_tb WHERE ST_DistanceSphere(location, ST_MakePoint(127.026993,37.497933)) <= 150;
select foodtruck_id, st_x(location),st_y(location) from foodtruck_tb;--x 경도, y 위도

--데이터 입력 sql

insert into user_tb values(default);
insert into user_tb values(default);
insert into relation_user_foodtruck_tb (user_id,foodtruck_id,authority) values(4001,1001,'owner');
insert into relation_user_foodtruck_tb (user_id,foodtruck_id,authority) values(4001,1002,'pure');
insert into menu_tb(menu_id ,foodtruck_id,name,image ,introduction ,price ,allergy_information ) values(default,1001, 'meuName',default,'메뉴 소개말',1000,'알러지 정보');
insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1001,2001,'optionName',500);

--단순 주문했을 떄

insert into user_order_menu_tb
values (default,4001,1001,current_timestamp,default,'추가 요청',false,1,default);
insert into order_tb values(1,2001,3001,2);

update user_order_menu_tb set price =(
(select menu_tb.price*count from order_tb,menu_tb where order_tb.menu_id=menu_tb.menu_id)+
(select option_tb.extra_price*count from order_tb,option_tb where option_tb.option_id =order_tb.option_id ));
--주문 계산 했을때

select foodtruck_id, count(user_order_menu_id )as num_of_waiting from user_order_menu_tb where is_received =false group by foodtruck_id ;
--음식 받았을 때
update user_order_menu_tb set is_received =true;
select count(user_order_menu_id )as num_of_waiting,foodtruck_id from user_order_menu_tb where is_received =false group by foodtruck_id ;

--평점 남겼을 때
update relation_user_foodtruck_tb set rating=3.5 where (select is_received from user_order_menu_tb )=true;
--운영자 입장에서 통계 보기
select foodtruck_id, sum(price)as sales,avg(rating) as rating  from user_order_menu_tb natural join relation_user_foodtruck_tb
where relation_user_foodtruck_tb.foodtruck_id =user_order_menu_tb.foodtruck_id
group by foodtruck_id;








