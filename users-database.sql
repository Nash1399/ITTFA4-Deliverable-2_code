-- Create the users table
CREATE TABLE IF NOT EXISTS users (  -- not exist used in case duplicate tables arise 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,  -- each user email is to be unique
    phone TEXT NOT NULL,
    password TEXT NOT NULL
);
