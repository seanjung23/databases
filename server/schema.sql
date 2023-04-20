CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id int AUTO_INCREMENT,
  roomname text,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int AUTO_INCREMENT,
  username text,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int AUTO_INCREMENT,
  texts text,
  room_id int,
  username_id int,
  PRIMARY KEY (id),
  -- add a room column here
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (username_id) REFERENCES users(id)
);



-- insert integero chat (room_name) values``
--   ('Main')
--   ('Secondary');

-- insert integero users ()

-- insert integero chat (message, room, username) values
--   ()

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

