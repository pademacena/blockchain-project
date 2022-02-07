# Modelo Blockchain em Rest

## Introdução

A Aplicação desenvolvida é um modelo de uma Blockchain desenvolvida para o projeto de Redes 2 Ministrada pelo professor Flávio da UFF.

## Execução 

Ao fazer clone do projeto, utilize o comando abaixo para instalar as dependencias.

```
npm install
```

Após a instalação das dependencias, podemos utilizar o comando abaixo para executar a nossa blockchain .

```
npm run dev
```

## Build App

Podemo realizar o build da aplicação, para isso execute o comando abaixo.

```
npm run build
```

## Adicionando novos Serviços

Para adicionar novos serviços, basta crialo na pasta services, lembrando sempre de importar o servico abaixo:

```
import Blockchain from './blockchain';
```

Após isso, crie o controller dele na pasta controllers, por fim lembre-se de colocar seu novo serviço no arquino ```routes.ts```, pos assim ele sera chamado na URL.

## Testando conectividade

Apos você executar o comando de inicar a blockchain, acesse ```localhost:3333/api``` para ver se ela está funcionando perfeitamente, ira aparecer o json abaixo como resposta.

```
{
  "message": "Connected"
}
```
