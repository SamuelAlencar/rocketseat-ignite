# Comanados
Transpila ts => js
npx tsc .\src\server.ts

Sobe o server
npx tsx .\src\server.ts


npm run knex -- migrate:make create-documents
npm run knex -- migrate:latest


# RF

- [x] O usuário deve poder criar uma nova transação
- [x] O usuario deve poder obter um resumo da sua conta
- [x] O usuário deve poder listar todas transações que já ocorreram
- [x] O usuário deve poder visualizar uma unica transação unica

# RN

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou debito subtraíra
- [ ] Dever ser possível identificarmos o usuário entre as requisições;
- [ ] O ususário só pode visualizar transações o qual ele criou

# RNF

- [ ] 

# TESTES
https://vitest.dev/
https://jestjs.io/pt-BR/

# Deploy em produção
render.com
fly.io
railway.app

