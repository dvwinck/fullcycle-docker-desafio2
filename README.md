## Desafio Full Cycle: Nginx com Node.js e MySQL

Este projeto implementa um proxy reverso Nginx para uma aplicação Node.js que persiste dados em um banco MySQL. 

**Estrutura:**

* **app:** Aplicação Node.js
* **nginx:** Configuração do Nginx
* **db:**  Scripts e inicialização do MySQL

**Para executar:**

```bash
docker-compose up -d 
Acesse a aplicação em: http://localhost:8080


**Observações:**

* A porta 8080 é mapeada para o Nginx.

