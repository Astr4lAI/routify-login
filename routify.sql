use Routify;
create table users (
userID serial primary key, 
name varchar(255) not null, 
email varchar(255) not null unique, 
phone varchar(20), 
type varchar(50) check (type IN ('driver', 'passenger'))
);

create table routes (
routeID serial primary key, 
name varchar(255) not null, 
start_location varchar(255) not null, 
end_location varchar(255) not null
);

create table stops (
stopID serial primary key, 
name varchar(255) not null, 
routeID int not null, 
foreign key (routeID) references routes(routeID)
);

create table buses (
busID serial primary key, 
license_plate varchar(20) not null unique, 
routeID int not null, 
driverID int not null,
capacity int not null, 
current_location int not null,
next_stop int, 
foreign key (routeID) references routes(routeID), 
foreign key (driverID) references users(userID), 
foreign key (current_location) references stops(stopID), 
foreign key (next_stop) references stops(stopID)
);

create table schedule (
scheduleID serial primary key, 
busID int not null, 
stopID int not null, 
arrival_time time not null,
foreign key (busID) references buses(busID), 
foreign key (stopID) references stops(stopID)
);


