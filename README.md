# LifeSupport

O **LifeSupport** é uma aplicação web voltada para conectar pessoas em situação de vulnerabilidade, que precisam de apoio (financeiro, material ou outro tipo de suporte), com pessoas dispostas a ajudar.

A plataforma funciona como um intermediário entre **pedidos de ajuda** e **potenciais apoiadores/doadores**, oferecendo mais visibilidade, organização, transparência e confiança em relação a pedidos que, hoje, costumam acontecer de forma dispersa em redes sociais e grupos de mensagens.

Embora o foco sejam situações mais sérias e urgentes, o LifeSupport não impõe uma classificação rígida de gravidade: os usuários podem relatar suas necessidades de forma aberta, e os apoiadores decidem como e quando contribuir.

---

## ODS relacionado

Este projeto está alinhado principalmente ao **ODS 1 – Erradicação da Pobreza**, que busca acabar com a pobreza em todas as suas formas, em todos os lugares.

O **LifeSupport** contribui com esse objetivo ao:

- facilitar o acesso a apoio financeiro ou material para pessoas em situação de vulnerabilidade;
- centralizar pedidos de ajuda que, de outra forma, ficariam dispersos em redes sociais e grupos privados;
- incentivar a solidariedade e o apoio direto entre pessoas.

De forma complementar, o projeto também se relaciona com:

- **ODS 10 – Redução das Desigualdades**, ao promover apoio a pessoas e grupos em situação mais vulnerável;
- **ODS 3 – Saúde e Bem-Estar**, em casos em que o pedido de ajuda está ligado a necessidades de saúde.

---

## Problema

Atualmente, pessoas em situação de necessidade recorrem a:

- postagens em redes sociais;
- mensagens em grupos privados;
- campanhas informais, muitas vezes desorganizadas.

Esse cenário gera diversos problemas:

- **Baixa visibilidade:** pedidos de ajuda importantes se perdem no fluxo de conteúdos das redes;
- **Pouca organização:** não existe um lugar único, dedicado a pedidos de ajuda sérios;
- **Dificuldade de confiança:** potenciais doadores não têm informações suficientes sobre quem está pedindo ajuda;
- **Pouca transparência:** não é simples acompanhar o andamento de um pedido ou o apoio já recebido.

Além disso, a ausência de mecanismos de **verificação de identidade** dos solicitantes aumenta a desconfiança, o que pode prejudicar pessoas que realmente precisam de suporte.

---

## Proposta de solução

O **LifeSupport** propõe uma plataforma web onde:

- pessoas em situação de vulnerabilidade podem **criar pedidos de ajuda**, descrevendo sua situação e o tipo de apoio necessário;
- outros usuários podem **oferecer apoio** (financeiro, material ou de outra natureza), registrando seus apoios na plataforma;
- usuários que fazem pedidos podem passar por um processo de **verificação de identidade**, aumentando a confiança de quem pretende ajudar;
- doadores/apoiadores acumulam **pontos** com base nos apoios realizados, podendo aparecer em **rankings e destaques** — sempre com a opção de manter-se anônimos nesses rankings.

---

## Tipo de solução

O **LifeSupport** será um **sistema web** composto por:

- **Frontend:** desenvolvido em **React** com **TypeScript**, responsável pela interface com o usuário (cadastro, login, criação de pedidos, visualização de pedidos, apoios, pontos, ranking, etc.);
- **Backend:** desenvolvido em C# uma **API** responsável por:
  - gerenciar usuários;
  - gerenciar pedidos de ajuda;
  - registrar apoios/doações;
  - gerenciar pontos e rankings;
  - tratar o fluxo de verificação de identidade;
  - persistir os dados em um banco de dados.

A solução **não será apenas uma página estática**. Haverá autenticação, diferentes tipos de operações (CRUD de pedidos, registro de apoio), fluxo de verificações e armazenamento de dados.

---

## Processo de desenvolvimento

O desenvolvimento seguirá o framework ágil **Scrum**, com **sprints quinzenais**, conforme definido abaixo:

- **SPT1 – Definição do Problema e Planejamento Inicial**
- **SPT2 – Projeto de Software (modelo C4)**
- **SPT3 – Sprint de Desenvolvimento (primeiro entregável)**
- **SPT4 – Desenvolvimento + Plano de Testes**
- **SPT5 – Desenvolvimento + Execução de Testes**
- **SPT6 – Entrega Final**

O gerenciamento será feito com:

- **GitHub**: repositório do código-fonte e documentação;
- **GitHub Projects**: organização de tarefas, requisitos e planejamento dos sprints.

---

## Documentação

A documentação do projeto será mantida em arquivos no próprio repositório, seguindo o que foi solicitado na disciplina. A estrutura inicial prevista é:

- `docs/requisitos.md` – requisitos funcionais e não funcionais;
- `docs/casos-de-uso.md` – descrição dos casos de uso e diagrama de casos de uso;
- `docs/arquitetura.md` – documentação da arquitetura (modelo C4), a ser detalhada no TP2;
- `docs/testes.md` – plano de testes e resultados (a ser criado e evoluído a partir do TP4).

Na raiz do projeto, haverá também uma pasta:

- `Videos/` – contendo os vídeos de apresentação do estado da solução em cada entrega a partir do SPT3.

---

## GitHub Projects

O projeto será gerenciado via **GitHub Projects**, com um quadro kanban contendo, no mínimo, as colunas:

- `Project Backlog` – requisitos funcionais e itens de trabalho de médio/longo prazo;
- `TODO` – atividades planejadas para o próximo sprint;
- `In Progress` – atividades em execução;
- `Done` – atividades concluídas.
