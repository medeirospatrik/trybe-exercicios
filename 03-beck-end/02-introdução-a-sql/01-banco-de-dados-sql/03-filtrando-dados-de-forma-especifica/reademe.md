# Exercício 1

Para realizar as tarefas do 1 ao 7, restaure o seguinte banco de dados:

DROP SCHEMA IF EXISTS store;
CREATE SCHEMA store;
USE store;

CREATE TABLE itens (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE suppliers (
  id VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE supplies (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  item_id INTEGER,
  FOREIGN KEY (item_id) REFERENCES itens (id),
  supplier_id VARCHAR(40),
  FOREIGN KEY (supplier_id) REFERENCES suppliers (id),
  price INTEGER NOT NULL
);

CREATE TABLE sales (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  supply_id INTEGER,
  quantity INTEGER,
  order_date DATETIME,
  FOREIGN KEY (supply_id) REFERENCES supplies (id)
);

INSERT INTO suppliers(id, name)
  VALUES ('ROB', 'Robauto SA'),
    ('CNF', 'Confiauto LTDA'),
    ('MAP', 'Malok Auto Peças'),
    ('INF', 'Infinity Peças LTDA');

INSERT INTO itens(id, name)
  VALUES (1, 'Rebimboca'),
    (2, 'Parafuseta'),
    (3, 'Grampola'),
    (4, 'Grapeta');

INSERT INTO supplies(item_id, supplier_id, price)
  VALUES (1, 'CNF', 10),
    (1, 'ROB', 15),
    (2, 'CNF', 20),
    (2, 'ROB', 25),
    (2, 'MAP', 14),
    (3, 'INF', 50),
    (3, 'MAP', 45),
    (4, 'CNF', 5),
    (4, 'ROB', 7);

INSERT INTO sales(supply_id, quantity, order_date)
  VALUES (1, 3, '2017-05-22 11:28:36'),
    (2, 2, '2018-03-22 11:35:24'),
    (3, 8, '2018-11-16 15:51:36'),
    (3, 10, '2019-02-13 13:23:22'),
    (8, 5, '2019-06-11 12:22:48'),
    (6, 1, '2019-09-07 09:53:58'),
    (7, 3, '2020-01-05 08:39:33'),
    (9, 5, '2020-05-13 14:05:19');
Para restaurar o banco, copie o código acima no workbench do MySQL e execute o código por meio da opção “Query” do menu superior e depois selecionando “Execute (All or selection)” ou simplesmente clicando no ícone de raio.

	USE store;

    ## 1. Vamos lá! Faça uma consulta na tabela item que retorne todos os dados em que a coluna name comece com as letras GR.

    ## solução
    SELECT * FROM itens WHERE name LIKE 'GR%';
    
    ## 2. Agora, escreva uma query para retornar da tabela supplies os dados em que a coluna item_id possua o valor 2. 
   Organize o resultado por ordem alfabética de supplier_id.

   ## solução
   SELECT * FROM supplies where item_id = 2 ORDER BY supplier_id;
   
   ## 3. Em seguida, faça uma consulta para exibir item_id, price e supplier_id de supplies em que o valor de supplier_id tenha a letra N.

   ## solução
   SELECT item_id, price, supplier_id FROM supplies WHERE supplier_id LIKE '%N%';
   
   ## 4. Avante, falta pouco! Escreva uma query para exibir todas as informações de supplier que são empresas limitadas (LTDA).
   Ordene esses resultados em ordem alfabética decrescente.

   ## solução
   SELECT * FROM suppliers WHERE name LIKE '%LTDA' ORDER BY name;
   
   ## 5. Agora, faça uma consulta para exibir o número de empresas (supplier) que contém a letra F no código.
   SELECT * FROM suppliers where id LIKE '%F%';
   
   ## 6. Quase lá! Agora escreva uma query para exibir de supplies, itens que custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.

   ## solução
   SELECT * FROM supplies WHERE price
   BETWEEN 15 AND 40;
   
   ## 7. Ufa! Por fim, faça uma query para exibir o número de vendas (sales) feitas entre os dias 15/04/2018 e 30/07/2019.

   ## solução
   SELECT * FROM sales WHERE DATE(order_date) BETWEEN '2018-05-15' AND '2019-07-30';

# Exercício 2: Usando o banco de dados Scientists restaurado no dia anterior, realize os exercícios a seguir. Caso ainda não tenha restaurado o banco, utilize o código abaixo para fazê-lo.

Copiar
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN, Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste link.

use Scientists;
# Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.

## solução
SELECT * FROM Scientists WHERE Name LIKE '%E%';

# Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A . Ordene o resultado em ordem alfabética.

## solução
SELECT * FROM Projects WHERE Name LIKE 'A%';

# Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.
SELECT Code, Name FROM Projects WHERE Code LIKE '%3%' ORDER BY Name and Code;

# Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.

## solução
SELECT * FROM AssignedTo WHERE Project IN ('AeH3', 'Ast3', 'Che1');

# Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT * FROM Projects
WHERE Hours > 500;

# Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores que 800.

## solução
SELECT * FROM Projects
WHERE Hours BETWEEN 250 AND 800;

# Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letre A

## solução
SELECT Name, Code FROM Projects
WHERE Name NOT LIKE 'A%';

# Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.

## solução
SELECT Name FROM Projects
WHERE Name LIKE '%H%';