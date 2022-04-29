CREATE TABLE departments(
department_id INTEGER AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(50) NOT NULL,
    /*TODO: Add Foreign Key and constraint to department id*/
    department_id INTEGER NOT NULL,
    salary INTEGER NOT NULL
);

CREATE TABLE employees(
    employee_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    /*TODO: add foreign key and contraint to roles and departments and salary*/
    role_id INTEGER NOT NULL,
    manager_id INTEGER NULL
);
