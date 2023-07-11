-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
-- USE pixar;

-- SELECT m.title, b.domestic_sales, b.international_sales-- domestic_sales, international_sales 
-- FROM movies AS m
-- INNER JOIN box_office AS b
-- ON b.movie_id = m.id;

-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui 
-- um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
-- USE pixar;
-- SELECT m.title, (b.domestic_sales + b.international_sales) AS 'vendas'
-- FROM movies AS m
-- INNER JOIN box_office AS b
-- ON m.id = b.movie_id
-- WHERE b.international_sales > b.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
-- use pixar;
-- SELECT 
-- 	m.title 'FILME',
--     b.rating 'AVALIAÇÃO'
-- FROM 
-- 	movies m
-- INNER JOIN box_office b 
-- ON m.id = b.movie_id;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, 
-- mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. 
-- Retorne os nomes dos cinemas em ordem alfabética.
-- SELECT t.*, m.*  FROM theater AS t
-- LEFT JOIN movies m
-- ON m.theater_id = t.id
-- ORDER BY name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, 
-- mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. 
-- Retorne os nomes dos cinemas em ordem alfabética.

-- SELECT m.*, t.* FROM theater AS t
-- right JOIN movies m
-- ON m.theater_id = t.id
-- ORDER BY name;

-- Exercícios - bônus
-- Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.

-- SELECT m.*, rating FROM movies m
-- INNER JOIN box_office b
-- on m.id = b.movie_id
-- WHERE m.theater_id <> 'null';

