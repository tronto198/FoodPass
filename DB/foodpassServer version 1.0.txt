--2020 05 23 version 1.0
drop table if exists user_order_menu_TB;
drop table if exists user_TB;
drop table if exists option_TB;
drop table if exists menu_TB;
drop table if exists foodtruck_TB;


create table foodtruck_TB
(
 foodtruck_id bigint generated always as identity(start with 100 increment by 1),
 name varchar(20),
 image text,
 introduction text,
 notice text,
 origin_information text,
 location text,
 
 primary key(foodtruck_id)
);

create table menu_TB
(
	menu_id bigint generated always as identity(start with 300 increment by 1),
	foodtruck_id bigint,
	name varchar(20),
	image text,
	introduction text,
	price money,
	allergy_information text,
	
	primary key(menu_id),	
	foreign key(foodtruck_id) references foodtruck_TB(foodtruck_id)
	);

create table option_TB
(
	option_id bigint generated always as identity(start with 600 increment by 1),
	menu_id bigint,
	name varchar(20),
	price money,
	
	primary key(option_id),
	foreign key(menu_id) references menu_TB(menu_id)
);


create table user_TB
(
	user_id bigint generated always as identity(start with 1000 increment by 1),
	foodtruck_id bigint,
	
	primary key(user_id)
	
);	


create table user_order_menu_TB
(
	user_order_menu_id bigint generated always as identity(start with 2000 increment by 1),
	user_id bigint,
	foodtruck_id bigint,
	menu_id bigint,
	option_id bigint,
	menu_num int,
	option_num int,
	order_date_time timestamp with time zone,
	price money,
	is_paid boolean,
	other_request text,
	is_received boolean,
	grade real,
	order_number int,
	
	primary key(user_order_menu_id),
	foreign key(user_id) references user_TB(user_id),
	foreign key(foodtruck_id) references foodtruck_TB(foodtruck_id),
	foreign key(menu_id) references menu_TB(menu_id),
	foreign key(option_id) references option_TB(option_id)
);


--데이터 입력 sql
insert into foodtruck_tb values(default, 'truckName',100, '소개말', '공지', '원산지 정보','위치');
insert into user_tb values(default,null);

insert into menu_tb(menu_id ,name,image ,introduction ,price ,allergy_information ) values(default, 'meuName',default,'메뉴 소개말',1000,'알러지 정보');
insert into option_tb(option_id ,name,price) values(default,'optionName',500);

--단순 주문했을 떄
insert into user_order_menu_tb
values (default,1000,100,300,600,1,2,default,default,false,'추가 요청',false,default,1);
update user_order_menu_tb set price =((select price from menu_tb where menu_tb.menu_id=user_order_menu_tb.menu_id )*menu_num
+(select price from option_tb where option_tb.option_id =user_order_menu_tb.option_id )*option_num);
--주문 계산 했을때
update user_order_menu_tb set order_date_time =current_timestamp, is_paid =true;
select count(user_order_menu_id )as num_of_waiting,foodtruck_id from user_order_menu_tb group by foodtruck_id ;
--음식 받았을 때
update user_order_menu_tb set is_received =true;
--평점 남겼을 때
update user_order_menu_tb set grade=3.5;
--운영자 입장에서 통계 보기
select sum(price)as sales, foodtruck_id from user_order_menu_tb group by foodtruck_id;



