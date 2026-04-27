# Arquitetura do LifeSupport (rascunho)

Este documento será detalhado no **SPT2 – Projeto de Software**, utilizando o **modelo C4** para descrever a arquitetura da solução.

## Visão geral inicial

De forma preliminar, a arquitetura do LifeSupport será composta por:

- **Frontend**
  - Aplicação web desenvolvida em **React** com **TypeScript**;
  - Responsável pela interação com o usuário (interface, navegação, formulários, visualização de dados).

- **Backend**
  - API desenvolvida em **C#**, utilizando um framework web (por exemplo, **ASP.NET Core**);
  - Responsável por:
    - autenticação e autorização de usuários;
    - gerenciamento de pedidos de ajuda;
    - registro de apoios/doações;
    - cálculo e armazenamento de pontos;
    - fornecimento de dados para rankings;
    - fluxo de verificação de identidade dos solicitantes;
    - acesso e persistência dos dados em um banco de dados.

- **Banco de dados**
  - Tecnologia a ser definida (por exemplo, SQL Server, PostgreSQL ou outro banco relacional);
  - Armazenará:
    - usuários;
    - pedidos de ajuda;
    - apoios/doações;
    - pontos e rankings;
    - informações relacionadas à verificação de identidade.

## Próximos passos (SPT2)



3. **Justificativa da arquitetura**:
   - por que a combinação React + TypeScript + C# backend é adequada ao problema;
   - como a arquitetura proposta facilita a evolução do sistema (novas funcionalidades, integrações futuras, etc.).
