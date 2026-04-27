# Requisitos do Projeto – LifeSupport

## 1. ODS abordado

O projeto **LifeSupport** está alinhado principalmente ao **ODS 1 – Erradicação da Pobreza**, que tem como objetivo acabar com a pobreza em todas as suas formas, em todos os lugares.

A aplicação busca contribuir com esse ODS ao facilitar o acesso a apoio financeiro e material para pessoas em situação de vulnerabilidade, aproximando quem precisa de ajuda de pessoas dispostas a apoiar.

De forma complementar, o projeto também se relaciona com outros objetivos, como:

- **ODS 10 – Redução das Desigualdades**, ao oferecer um canal de apoio focado em populações vulneráveis;
- **ODS 3 – Saúde e Bem-Estar**, nos casos em que os pedidos de ajuda se relacionam a necessidades de saúde.

---

## 2. Problema

Pessoas em situação de necessidade ou vulnerabilidade recorrem, com frequência, a canais como:

- redes sociais (postagens em perfis pessoais ou grupos abertos);
- grupos de mensagens instantâneas;
- campanhas informais em diferentes plataformas.

Esse cenário traz diversos problemas:

- **Dispersão e baixa visibilidade:** pedidos importantes se perdem em meio a outros conteúdos;
- **Falta de organização:** não há um espaço dedicado exclusivamente a pedidos de ajuda;
- **Dificuldade de confiança:** potenciais apoiadores não têm informações estruturadas sobre quem pede ajuda ou sobre o contexto do pedido;
- **Pouca transparência:** é difícil acompanhar se o pedido ainda está ativo, se já recebeu apoio suficiente ou se houve alguma mudança na situação.

Além disso, a ausência de mecanismos de **confirmação de identidade** de quem está pedindo ajuda aumenta a desconfiança, afetando inclusive pessoas que realmente precisam de suporte.

Por outro lado, potenciais doadores/apoiadores podem se sentir pouco motivados a contribuir de forma recorrente, seja pela falta de reconhecimento ou de uma percepção clara de impacto.

---

## 3. Tipo de solução

A solução proposta é um **sistema web** composto por:

- **Frontend**  
  - Desenvolvido em **React** com **TypeScript** e **JavaScript**;  
  - Responsável pela interface com o usuário (cadastro, login, criação de pedidos, visualização, apoios, pontos, ranking, etc.).

- **Backend**  
  - Desenvolvido em **C#**, utilizando um framework web (ASP.NET Core);  
  - Fornece uma **API** responsável por:
    - gerenciar usuários;
    - gerenciar pedidos de ajuda;
    - registrar apoios/doações;
    - gerenciar pontos e rankings;
    - tratar o fluxo de verificação de identidade de solicitantes;
    - persistir os dados em um banco de dados.

A escolha por um sistema web com frontend e backend se justifica por:

- necessidade de **persistir dados** (usuários, pedidos, apoios, pontos, status de verificação);
- necessidade de **autenticação e controle de acesso**;
- possibilidade de evoluir a solução (ex.: integração futura com serviços de pagamento, envio de e-mails, etc.);
- alinhamento com o escopo da disciplina, que exige soluções com mais de uma camada.

---

## 4. Requisitos Funcionais (RF)

**RF01 – Cadastro de usuário**  
O sistema deve permitir que um usuário se cadastre informando, no mínimo, nome completo, e-mail e senha.

**RF02 – Autenticação de usuário**  
O sistema deve permitir que o usuário faça login utilizando e-mail e senha.

**RF03 – Perfil de usuário**  
O sistema deve permitir que o usuário visualize e atualize seus dados básicos de perfil (por exemplo, nome e informações de contato).

**RF04 – Cadastro de pedido de ajuda**  
O sistema deve permitir que um usuário registre um pedido de ajuda, informando:
- título;
- descrição detalhada da situação;
- tipo de ajuda necessária (ex.: financeira, alimentos, roupas, serviços, outro);
- valor estimado (quando fizer sentido, ex.: ajuda financeira);
- localidade (cidade/estado);
- opcionalmente, links ou referências externas (ex.: comprovantes, laudos, etc.).

**RF05 – Listagem de pedidos de ajuda**  
O sistema deve permitir que qualquer usuário (autenticado ou não) visualize uma lista de pedidos de ajuda cadastrados, exibindo:
- título;
- resumo da descrição;
- tipo de ajuda;
- localidade;
- status (ex.: Aberto, Em andamento, Concluído).

**RF06 – Detalhamento de pedido de ajuda**  
O sistema deve permitir que o usuário visualize os detalhes completos de um pedido de ajuda específico.

**RF07 – Registro de apoio/doação**  
O sistema deve permitir que um usuário apoiador registre um apoio a um pedido, informando:
- tipo de apoio (financeiro, material, outro);
- valor estimado (quando aplicável);
- mensagem opcional ao solicitante.

> Observação: inicialmente, o registro de apoio será apenas interno ao sistema, sem integração com serviços reais de pagamento.

**RF08 – Histórico de apoios realizados pelo usuário**  
O sistema deve permitir que um usuário apoiador visualize uma lista dos apoios que já realizou na plataforma.

**RF09 – Acompanhamento de apoios recebidos em um pedido**  
O sistema deve permitir que o criador de um pedido visualize os apoios associados ao seu pedido.

**RF10 – Atualização de status e progresso do pedido**  
O sistema deve permitir que o criador do pedido atualize:
- o status do pedido (por exemplo, Aberto, Em andamento, Concluído);
- mensagens de atualização sobre o andamento da situação.

**RF11 – Filtro/pesquisa de pedidos**  
O sistema deve permitir que o usuário pesquise ou filtre pedidos de ajuda por:
- palavra-chave;
- tipo de ajuda;
- localidade;
- status.

### Funcionalidades de verificação de identidade

**RF12 – Verificação de identidade do solicitante**  
O sistema deve permitir que usuários que desejem criar pedidos de ajuda passem por um processo de verificação de identidade, que pode incluir:
- envio de informações adicionais de identificação (por exemplo, CPF, número de documento);
- envio de documentos comprobatórios (por exemplo, foto de documento);
- análise manual ou automatizada desses dados.

Apenas usuários verificados poderão ter seus pedidos de ajuda publicados na plataforma.

**RF13 – Indicação visual de usuário verificado**  
O sistema deve indicar, na interface, quando um solicitante é verificado (por meio de um selo ou rótulo “Verificado” associado ao usuário e/ou ao pedido).

### Funcionalidades de pontos e ranking de doadores

**RF14 – Sistema de pontos para doadores**  
O sistema deve atribuir pontos aos usuários apoiadores com base nos apoios/doações realizados. Cada apoio deve gerar uma quantidade de pontos conforme critérios definidos (por exemplo, valor estimado, frequência de apoio).

**RF15 – Visualização dos pontos do doador**  
O sistema deve permitir que o doador visualize o total de pontos acumulados e, se possível, um resumo de como esses pontos foram obtidos (por exemplo, lista de apoios e pontos gerados).

**RF16 – Ranking e destaques de doadores**  
O sistema deve apresentar uma área com destaques dos doadores que mais acumularam pontos em um determinado período (por exemplo, “destaques do mês”).

**RF17 – Configuração de privacidade do doador no ranking**  
O sistema deve permitir que o doador escolha se deseja:
- aparecer publicamente no ranking/destaques; ou
- permanecer anônimo/oculto nesses rankings.

Caso o doador opte por não aparecer, seus pontos ainda podem ser contabilizados internamente, mas seu nome/identidade não deve ser exibido nos destaques.

---

## 5. Requisitos Não Funcionais (RNF)

**RNF01 – Tecnologia de frontend**  
O frontend da aplicação deve ser desenvolvido utilizando **React** com **TypeScript**.

**RNF02 – Tecnologia de backend**  
O backend da aplicação deve ser desenvolvido em **C#**, utilizando um framework web adequado (por exemplo, ASP.NET Core), expondo uma API REST para consumo pelo frontend.

**RNF03 – Arquitetura cliente-servidor**  
A aplicação deve seguir o modelo cliente-servidor, com o frontend consumindo a API backend.

**RNF04 – Persistência de dados**  
Os dados da aplicação (usuários, pedidos de ajuda, apoios, pontos, status de verificação) devem ser armazenados em um banco de dados (relacional ou não relacional, a ser definido no TP2).

**RNF05 – Segurança de dados e senhas**  
As senhas dos usuários devem ser armazenadas de forma segura (com uso de hash).  
Dados sensíveis utilizados no processo de verificação de identidade devem ser protegidos, com acesso restrito às partes do sistema que realmente necessitam deles.

**RNF06 – Usabilidade e responsividade**  
A interface deve ser responsiva, permitindo uso adequado em dispositivos desktop e móveis.

**RNF07 – Desempenho**  
As principais telas (como a listagem de pedidos de ajuda) devem ser carregadas em tempo aceitável, buscando tempo de resposta inferior a 3 segundos em uma conexão comum.

**RNF08 – Disponibilidade para desenvolvimento**  
A aplicação deve poder ser executada localmente, com instruções claras de configuração e execução documentadas no repositório.

**RNF09 – Padrões de código**  
O código deve seguir boas práticas de desenvolvimento (organização, nomeação, uso consistente de TypeScript no frontend e C# no backend).  
Quando possível, devem ser utilizadas ferramentas de análise estática e formatação (por exemplo, ESLint/Prettier no frontend, analisadores de código no backend C#).

**RNF10 – Documentação**  
A documentação do projeto deve ser mantida em arquivos markdown e versionada junto com o código no GitHub.

**RNF11 – Privacidade de informações do doador**  
As preferências de privacidade do doador em relação à exibição no ranking devem ser respeitadas em todas as telas da aplicação.  
Dados pessoais de doadores que optarem por anonimato não devem ser exibidos em seções públicas da plataforma.

**RNF12 – Transparência na gamificação**  
Os critérios de atribuição de pontos e funcionamento do ranking devem ser claros e documentados, permitindo que o usuário entenda como sua pontuação é calculada.
