CREATE DATABASE todo_tutorial;

USE todo_tutorial;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255)
);

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    completed BOOLEAN DEFAULT false,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE shared_todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    todo_id INT NOT NULL,
    user_id INT NOT NULL,
    shared_with_id INT NOT NULL,
    FOREIGN KEY (todo_id) REFERENCES todos(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (shared_with_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users(name, email, password) VALUES ('Beto', 'user1@example.com', 'password1');
INSERT INTO users(name, email, password) VALUES ('Juan', 'user2@example.com', 'password2');

INSERT INTO todos(title, user_id) VALUES ('Todo 1', 1), ('Todo 2', 1), ('Todo 3', 2), ('Todo 4', 2), ('Todo 5', 2), ('Todo 6', 2), ('Todo 7', 2);

INSERT INTO shared_todos(todo_id, user_id, shared_with_id) VALUES (1, 1, 2);

SELECT todos.*, shared_todos.shared_with_id
FROM todos
LEFT JOIN shared_todos ON todos.id = shared_todos.todo_id
WHERE todos.user_id = [user_id] OR shared_todos.shared_with_id = [user_id];