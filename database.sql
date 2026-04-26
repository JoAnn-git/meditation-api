

use meditation_db,

CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  duration INTEGER NOT NULL,
  notes TEXT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

ALTER TABLE sessions
ADD COLUMN user_id INTEGER REFERENCES users(id) ON DELETE CASCADE;

select * from sessions;
DELETE FROM sessions WHERE user_id IS NULL;

ALTER TABLE sessions
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE;