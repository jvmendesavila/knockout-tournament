Esta aplicação utiliza o framework [Next.js](https://nextjs.org/) e foi criada inicialmente usando o comando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Iniciando o Projeto

```bash
#Primeiro, instale as dependências:
yarn

#Depois, rode a aplicação em modo de desenvolvimento:
yarn dev

#Abra http://localhost:3000 com seu browser para ver o aplicação rodando.
```

## Problematica

Este projeto foi desenvolvido com o intuito de automatizar a montagem de um sistema eliminatório, onde um conjuntos de jogadores se enfrentam em partidas de 2, sendo o vencedor de cada partida que avança até chegar na final onde será definido o vencedor de todo o sistema.

A maior complexidade do problema consiste quando o sistema não possui uma quantidade de participantes equivalente a uma potência de 2, tornando o sistema assimétrico, para tornalo simétrico definimos alguns participantes como cabeça de chave, os quais avançam na primeira rodada com intuito de deixar a quantidade de jogos da segunda rodada equivalente a uma potencia de dois.

A definição dos cabeça de chave pode ser feita de maneiras diferentes, e uma ampla distribuição feita na primeira rodada permite que, em uma situação onde os cabeças de chave são os favoritos, os mesmo terão menos chances de se enfrentar, promovendo partidas mais interessantes no final do sistema, uma característica buscada pelos campeonatos atuais nas montagens dos seus sistemas.
