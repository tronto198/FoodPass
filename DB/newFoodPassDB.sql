--2020 11 02 version 2.6
drop table if exists user_order_menu_TB cascade;
drop table if exists user_TB cascade;
drop table if exists option_TB cascade;
drop table if exists menu_TB cascade;
drop table if exists foodtruck_TB cascade;
drop table if exists order_tb cascade;
drop table if exists relation_user_foodtruck_tb cascade;
drop table if exists statistics_tb cascade;

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
 primary key(foodtruck_id),
 status varchar(20) default 'open' --open:영업중인 상태, close:영업종료 상태 
  --foreign key(owner_id)references user_tb(user_id)
);

create table menu_tb
(
	menu_id bigint generated always as identity(start with 2001 increment by 1),
	foodtruck_id bigint,
	name varchar(20),
	image text,
	introduction text,
	price integer,
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
	extra_price integer,
	
	primary key(option_id),
	foreign key(menu_id) references menu_TB(menu_id),
	foreign key(foodtruck_id) references foodtruck_tb(foodtruck_id)
);


create table user_tb
(
	user_id bigint generated always as identity(start with 4001 increment by 1),
	--foodtruck_id bigint,
	image text,
	name  varchar(20),
	push_token text,
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
	price integer,
	other_request text,
	is_received boolean default false,
	
	order_number int,
	finished_time timestamp with time zone,
	--rating real,
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

create table statistics_tb(
	foodtruck_id bigint  generated always as identity(start with 1001 increment by 1),
	num_of_waiting bigint,
	time_to_wait timestamp with time zone,
	rating real,
	primary key(foodtruck_id)
);


--statistics_tb trigger
create or replace function init_statistics() returns trigger as $$ 
    begin     	    
	   	insert into statistics_tb values(default, 0, default, 0);
		return new;
    end;
$$ language plpgsql;
 
create trigger trigger_statistics
after insert on foodtruck_tb
 for each row execute procedure init_statistics();


--orderNumber trigger
create or replace function orderNum() returns trigger as $$ 
    begin     	    
	   	update user_order_menu_tb set order_number=user_order_menu_id where order_number is null;
		return new;
    end;
$$ language plpgsql;
 
create trigger trigger_orderNum
after insert on user_order_menu_tb
 for each row execute procedure orderNum();





--대기인원 trigger
create or replace function calc_num_of_waiting() returns trigger as $$
    begin     	    
	    update statistics_tb set num_of_waiting = 
			(select count(*) from user_order_menu_tb where foodtruck_id = new.foodtruck_id and is_received = false) 
			where foodtruck_id = new.foodtruck_id;
		return new;  
    end;
$$ language plpgsql;
 
create trigger trigger_num_of_waiting
after insert or update or delete on user_order_menu_tb
 for each row execute procedure calc_num_of_waiting();





--대기시간 trigger

/*create or replace function calc_time_to_wait() returns trigger as $$
    begin 
	    
	   if(user_order_menu_tb.is_received =true) then
	    update statistics_tb set time_to_wait = 
			(select Avg(finished_time -order_date_time ) from user_order_menu_tb where foodtruck_id = new.foodtruck_id) 
		where foodtruck_id = new.foodtruck_id;
		return new;  
	   end if;
	  
    end;
$$ language plpgsql;
 
create trigger trigger_time_to_wait
after insert or update or delete on user_order_menu_tb
 for each row execute procedure calc_time_to_wait();*/


--평점 trigger

create or replace function calc_rating() returns trigger as $$

    begin  
	    update statistics_tb set rating = 
			(select avg(rating) from relation_user_foodtruck_tb where foodtruck_id = new.foodtruck_id )
		where foodtruck_id = new.foodtruck_id;
		return new;  
    end;
$$ language plpgsql;
 
create trigger trigger_rating
after update or delete on relation_user_foodtruck_tb
 for each row execute procedure calc_rating();

--지도 테스트

INSERT INTO foodtruck_tb 
VALUES(default,'푸켓쌀국수','images/1001/truck.jpg', '베트남','월요일 15시 한밭대', '국수: 한국산, 야채: 베트남산',st_setsrid(ST_MakePoint(127.026272,37.499851),4326));--경도,위도
INSERT INTO foodtruck_tb  
VALUES(default, '메드포갈릭','images/1002/truck.jpg', '미국','화요일 19시 한밭대', '스테이크: 미국산',  st_setsrid(st_makepoint( 127.026615,37.497774 ),4326));
INSERT INTO foodtruck_tb 
VALUES(default,'아리랑','images/1003/truck.jpg', '한식','수요일 13시 한밭대', '모든재료: 국산',  st_setsrid(st_makepoint( 127.027098,37.499587),4326));
INSERT INTO foodtruck_tb 
VALUES(default,'참치공방','images/1004/truck.jpg', '한식','목요일 19시 한밭대', '참치: 캐나다산',  st_setsrid(st_makepoint( 127.028428,37.497868 ),4326));
--insert into statistics_tb values(default, 0, 0, 0);
--insert into statistics_tb values(default, 0, 0, 0);
--insert into statistics_tb values(default, 0, 0, 0);
--insert into statistics_tb values(default, 0, 0, 0);


SELECT * FROM foodtruck_tb WHERE ST_DistanceSphere(location, ST_MakePoint(127.026993,37.497933)) <= 150;
select foodtruck_id, st_x(location),st_y(location) from foodtruck_tb;--x 경도, y 위도

--데이터 입력 sql

--insert into user_tb(user_id, image, name) values(default, '');
insert into user_tb values(default);
insert into user_tb values(default);

insert into relation_user_foodtruck_tb (user_id,foodtruck_id,authority) values(4001,1001,'owner');
insert into relation_user_foodtruck_tb (user_id,foodtruck_id,authority) values(4001,1002,'pure');
insert into relation_user_foodtruck_tb (user_id,foodtruck_id,authority) values(4002,1001,'pure');
insert into relation_user_foodtruck_tb (user_id,foodtruck_id,authority) values(4002,1002,'pure');


insert into menu_tb(menu_id ,foodtruck_id,name,image ,introduction ,price ,allergy_information ) 
values(default,1001, 'noodle1','images/1001/2001.jpg','국물없는 쌀국수입니다.',3000,'알러지 정보');
insert into menu_tb(menu_id ,foodtruck_id,name,image ,introduction ,price ,allergy_information ) 
values(default,1001, 'noodle2','images/1001/2002.jpg','야채와 밥이 있는 쌀국수입니다.',6000,'알러지 정보');
insert into menu_tb(menu_id ,foodtruck_id,name,image ,introduction ,price ,allergy_information ) 
values(default,1002, 'steak1','images/1002/2003.jpg','안심 스테이크',8000,'알러지 정보');
insert into menu_tb(menu_id ,foodtruck_id,name,image ,introduction ,price ,allergy_information ) 
values(default,1002, 'steak2','images/1002/2004.jpg','등심 스테이크',9000,'알러지 정보');
insert into menu_tb(menu_id ,foodtruck_id,name,image ,introduction ,price ,allergy_information ) 
values(default,1003, '김밥','images/1003/2005.jpg','꼬마김밥입니다.',4000,'알러지 정보');
insert into menu_tb(menu_id ,foodtruck_id,name,image ,introduction ,price ,allergy_information ) 
values(default,1003, '비빔밥','images/1003/2006.jpg','간장, 고추장 양념 선택하세요',6000,'알러지 정보');
insert into menu_tb(menu_id ,foodtruck_id,name,image ,introduction ,price ,allergy_information ) 
values(default,1004, 'tuna1','images/1004/2007.jpg','참치입니다.',7000,'알러지 정보');
insert into menu_tb(menu_id ,foodtruck_id,name,image ,introduction ,price ,allergy_information ) 
values(default,1004, 'tuna2','images/1004/2008.jpg','참치입니다.',8000,'알러지 정보');


insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1001,2001,'매운맛',0);
insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1001,2001,'중간맛',0);
insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1001,2001,'순한맛',0);
insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1001,2002,'밥 추가',1000);

insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1002,2003,'샐러드 추가',1000);
insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1002,2004,'샐러드 추가',1000);

insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1003,2005,'단무지 추가',500);
insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1003,2006,'간장 양념',0);
insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1003,2006,'고추장 양념',0);

insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1004,2007,'초고추장 소스 추가',500);
insert into option_tb(option_id,foodtruck_id,menu_id ,name,extra_price) values(default,1004,2008,'초고추장 소스 추가',500);

--단순 주문했을 떄

--insert into user_order_menu_tb
--values (default,4001,1002,current_timestamp,default,'추가 요청',false,1,default);
--insert into order_tb values(1,2003,3005,2);
--insert into order_tb values(1,2004,3006,2);--34000원
--
--
--insert into user_order_menu_tb
--values (default,4002,1001,current_timestamp,default,'추가 요청',false,2,default);
--insert into order_tb values(2,2001,3001,2);
--insert into order_tb values(2,2002,3004,2);--19000원


--가격계산 sub 쿼리 여러줄 나오는거 문제 해결해야함
--update user_order_menu_tb set price =(
--(select sum(menu_tb.price*count) from order_tb,menu_tb where user_order_menu_id =order_tb.user_order_menu_id and order_tb.menu_id=menu_tb.menu_id+
--(select sum(option_tb.extra_price*count) from order_tb,option_tb where user_order_menu_id =order_tb.user_order_menu_id and option_tb.option_id =order_tb.option_id ));


--주문 계산 했을때

--select foodtruck_id, count(user_order_menu_id )as num_of_waiting from user_order_menu_tb where is_received =false group by foodtruck_id ;

--손님이 음식 대기하는 화면
--select m.name, o.name, count, cartA.order_number, cartA.price, cartA.name, cartA.image, cartA.location
--from order_tb
--	inner join (select user_order_menu_id, order_number, price, t.name, t.image, t.location 
--				from user_order_menu_tb uo inner join foodtruck_tb t on uo.foodtruck_id=t.foodtruck_id
--				where user_id=4001 and uo.is_received=false) cartA 
--				on order_tb.user_order_menu_id= cartA.user_order_menu_id 
--	inner join  menu_tb m on order_tb.menu_id=m.menu_id 
--	inner join option_tb o on order_tb.option_id =o.option_id;

--select * from user_order_menu_tb where user_id=4001 and is_received=false;

--select o.user_order_menu_id, o.order_number, o.price, t.name, t.image, t.location 
--from user_order_menu_tb o inner join foodtruck_tb t on o.foodtruck_id=t.foodtruck_id
--where user_id=4001;
--손님 호출했을때
--update user_order_menu_tb set finished_time=current_timestamp where foodtruck_id =1001;
/*update statistics_tb 
set time_to_wait=(time_to_wait + (select Avg(finished_time -order_date_time ) from user_order_menu_tb where user_order_menu_tb.foodtruck_id=1001 ))/2
where statistics_tb.foodtruck_id =1001;*/
--음식 받았을 때
--update user_order_menu_tb set is_received =true where user_order_menu_id =1;
--select foodtruck_id, count(user_order_menu_id )as num_of_waiting from user_order_menu_tb where is_received =false group by foodtruck_id ;

--평점 남겼을 때
--(rating 이 rel에 있을 때)
--update relation_user_foodtruck_tb set rating=3.5 where (select is_received from user_order_menu_tb where user_order_menu_id =1 )=true and foodtruck_id=1001;
--update user_order_menu_tb set rating=3.5 where foodtruck_id=1001 and  is_received =true;

--사장이 자신의 푸드트럭 매출 통계 보기
--(rating이 rel 에 있을떄)
select foodtruck_id, sum(price)as sales,avg(rating) as rating  from user_order_menu_tb natural join relation_user_foodtruck_tb
where relation_user_foodtruck_tb.foodtruck_id =user_order_menu_tb.foodtruck_id group by foodtruck_id;


--사장이 주문 목록 보기
select user_order_menu_tb.foodtruck_id as foodtruck_id, user_order_menu_tb.order_number as order_number, user_order_menu_tb.user_id as user_id , menu_tb.name as menu_name, option_tb.name as option_name , order_tb.count as count , user_order_menu_tb.other_request as other_request 
from user_order_menu_tb 
	inner join order_tb on user_order_menu_tb.user_order_menu_id =order_tb.user_order_menu_id
	inner join menu_tb on order_tb.menu_id =menu_tb.menu_id 
	left outer join option_tb on order_tb.option_id =option_tb.option_id
where user_order_menu_tb.foodtruck_id=1001
order by user_order_menu_tb.order_number;

--사장이 주문 목록 보기2
select user_order_menu_tb.user_order_menu_id, user_order_menu_tb.foodtruck_id as foodtruck_id, user_order_menu_tb.order_number as order_number, user_order_menu_tb.user_id as user_id , menu_tb.menu_id as menu_id, option_tb.option_id as option_id , order_tb.count as count , user_order_menu_tb.other_request as other_request 
from user_order_menu_tb 
	inner join order_tb on user_order_menu_tb.user_order_menu_id =order_tb.user_order_menu_id
	inner join menu_tb on order_tb.menu_id =menu_tb.menu_id 
	left outer join option_tb on order_tb.option_id =option_tb.option_id
where user_order_menu_tb.foodtruck_id=1001
order by user_order_menu_tb.order_number;

--select user_order_menu_tb.user_order_menu_id, user_order_menu_tb.foodtruck_id , user_order_menu_tb.order_number, user_order_menu_tb.user_id  , menu_tb.menu_id as menu_id, option_tb.option_id as option_id , order_tb.count , user_order_menu_tb.other_request
--    from user_order_menu_tb 
--      inner join order_tb on user_order_menu_tb.user_order_menu_id =order_tb.user_order_menu_id
--      inner join menu_tb on order_tb.menu_id =menu_tb.menu_id 
--      left outer join option_tb on order_tb.option_id =option_tb.option_id
--    where user_order_menu_tb.foodtruck_id=1001
--    order by user_order_menu_tb.order_number;

--대기인원 -->트리거로 이미 만듦.
select foodtruck_id, count(user_order_menu_id ) as waiting from user_order_menu_tb where is_received=false group by foodtruck_id;
/*
select foodtruck_id, sum(price)as sales,avg(rating) as rating  
from user_order_menu_tb 
group by foodtruck_id;
*/

--
--select foodtruck_id, st_x(location) as x, st_y(location) as y, name, image, introduction, notice 
--from foodtruck_tb 
--where ST_DistanceSphere(location,ST_MakePoint($2, $1))<=500


select truck.foodtruck_id, truck.x, truck.y, truck.name, truck.image, truck.introduction, truck.notice, num_of_waiting as people, rating
from statistics_tb inner join (select foodtruck_id, st_x(location) as x, st_y(location) as y, name, image, introduction, notice 
								from foodtruck_tb 
								where ST_DistanceSphere(location,ST_MakePoint(127.026993,37.497933))<=500) truck 
								on statistics_tb.foodtruck_id =truck.foodtruck_id
order by foodtruck_id;

--update user_order_menu_tb set finished_time=current_timestamp where foodtruck_id=$1 and user_order_menu_id=$2  Returning user_order_menu_id, user_id, foodtruck_id, finished_time;



