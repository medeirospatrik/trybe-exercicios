Restaure o banco de dados abaixo antes de continuar:

Para realizar os exercícios propostos para o dia, faremos uso da tabela employees do banco de dados hr. O banco de dados pode ser gerado e restaurado usando este arquivo SQL.

Instruções de como restaurar o banco de dados
Baixe o conteúdo do arquivo .sql disponibilizado acima;
Copie todo o código SQL;
Abra o MySQL Workbench e abra uma nova janela de query;
Copie todo o código para dentro dessa janela;
Selecione todo o código usando Ctrl + a;
Execute o código teclando Ctrl + ENTER.
Exercícios
🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

## 1. Escreva uma query que exiba o maior salário da tabela.

## 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.

## 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.

## 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

## 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

## 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).

## 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).

## 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).

## 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).

## 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.

## 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

## 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

## 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).

## 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

## 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).

## 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

## 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

## 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).

# Solução

-- 1. Escreva uma query que exiba o maior salário da tabela.
-- Select * from employees;
-- SELECT first_name, MAX(salary) FROM employees;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
-- SELECT MAX(salary) - MIN(salary) from employees;

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.
-- SELECT job_id, AVG(salary) AS 'media salarial' from employees
-- group by job_id
-- ORDER BY 'media salarial' desc;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
-- SELECT SUM(salary) AS 'Quantia para pagar todas as pessoas' FROM employees;

-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. 
-- Todos os valores devem ser formatados para ter apenas duas casas decimais.
-- Select * from employees;
-- SELECT ROUND(MAX(salary),2) AS 'Maior salario', ROUND(MIN(salary),2) AS 'Menor salario', ROUND(SUM(salary),2) AS 'Soma de todos os salarios', round(AVG(salary),2) AS 'MEDIA DOS SALARIOS' from employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).
-- Select job_id, COUNT(*) from employees
-- WHERE job_id = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).
-- Select * from employees;

-- SELECT job_id, SUM(salary) AS 'Sum salary' FROM employees
-- group by job_id;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras 
-- (it_prog).

-- SELECT * FROM employees;
-- SELECT job_id, SUM(salary) AS 'Sum salary' FROM employees
-- WHERE job_id = 'it_prog'
--  group by job_id;

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).

-- SELECT job_id, AVG(salary) AS 'MEDIA' FROM employees
-- WHERE job_id <> 'it_prog'
-- GROUP BY job_id
-- order by MEDIA desc;

-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.

-- SELECT * FROM hr.employees;

-- SELECT department_id, COUNT(department_id) AS 'NUMERO', AVG(salary) AS 'MEDIA SALARIAL' 
-- FROM hr.employees
-- GROUP BY department_id
-- HAVING NUMERO > 10;

-- 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
-- SELECT * FROM hr.employees;
-- SET SQL_SAFE_UPDATES = 0;
-- UPDATE hr.employees
-- SET phone_number = REPLACE(phone_number, '515', '777')
-- WHERE phone_number LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
-- SELECT * FROM hr.employees
-- where char_length(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
-- SELECT employee_id, first_name, year(hire_date) FROM hr.employees;

-- 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
-- SELECT employee_id, first_name, day(hire_date) FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
-- SELECT employee_id, first_name, month(hire_date) FROM hr.employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
-- SELECT UCASE(first_name) FROM hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
-- SELECT first_name, hire_date FROM hr.employees
-- WHERE hIre_date LIKE '1987-07%';

-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
-- SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) FROM hr.employees;

