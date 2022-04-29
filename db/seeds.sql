INSERT INTO departments (department_name)
VALUES
("Sales"),
("Marketing"),
("Accounting"),
("Management");

INSERT INTO roles(job_title, department_id, salary)
VALUES
("Sales Director", 1, 90000),
("CEO", 4, 100000),
("Marketing Associate", 2, 50000),
("Accountant", 3, 80000);

INSERT INTO employees(first_name, last_name, role_id)
VALUES
("Roger", "Anderson", 4);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
("Sample", "1", 2, 1),
("Sample", "2", 3, 2),
("Sample", "3", 4, 2);
