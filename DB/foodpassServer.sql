drop table if exist foodtruck_TB;
drop table if exist menu_TB;
drop table if exist option_TB;
drop table if exist user_TB;
drop table if exist user_order_menu_TB;

create table foodtruck_TB{
 foodtruck_id bigint,
 name varchar(20),
 image text,
 introduction text,
 notice text,
 origin_information text,
 location text,
 
 primary key(foodtruck_id)
};

create table menu_TB{
	menu_id bigint,
	foodtruck_id bigint,
	name varchar(20),
	image text,
	introduction text,
	price money,
	allergy_information text,
	
	primary key(menu_id),	
	foreign key(foodtruck_id) references foodtruck_TB(foodtruck_id)
};

create table option_TB{
	option_id bigint,
	menu_id bigint,
	name varchar(20),
	price money
	
	primary key(option_id),
	foreign key(menu_id) references menu_TB(menu_id)
};

create table user_TB{
	user_id bigint,
	foodtruck_id bigint,
	
	unique(user_id, foodtruck_id),
	foreign key(foodtruck_id) references foodtruck_TB(foodtruck_id)
};

create table user_order_menu_TB{
	user_order_menu_id bigint,
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
	is_received boolearn,
	grade real,
	order_number int,
	
	primary key(user_order_menu_id),
	foreign key(user_id) references user_TB(user_id)
};
