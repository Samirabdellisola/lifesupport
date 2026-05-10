## Estado da implementação 01

No **SP3**, o foco foi iniciar o desenvolvimento do **frontend** do LifeSupport, criando a estrutura básica da aplicação React e as principais telas de navegação do usuário. As funcionalidades implementadas até o momento são:

- **Estrutura inicial do frontend (React + TypeScript)**  
  - Organização da pasta `frontend/` como projeto React com TypeScript;  
  - Criação da estrutura base de componentes e páginas, preparando o terreno para futuras integrações com a API em C#.

- **Tela de campanhas (feed de pedidos de ajuda)**  
  - Implementação de um **feed de campanhas/pedidos de ajuda**, que exibe uma lista de campanhas de forma contínua;  
  - Uso de um comportamento de **scroll infinito**, permitindo que o usuário role a página e veja mais campanhas à medida que navega;  
  - Os dados estão **mocados** no frontend neste momento, simulando o comportamento futuro da integração com o backend.

- **Tela de detalhes de campanha**  
  - Implementação da tela que é exibida quando o usuário clica em uma campanha do feed;  
  - Exibição das informações detalhadas da campanha selecionada (como título, descrição e dados principais);  
  - Navegação entre a lista de campanhas e a tela de detalhes já configurada.

- **Tela de autenticação e configuração de usuário**  
  - Criação da tela para **cadastrar** e **entrar** na plataforma (fluxos de criação de conta e login ainda baseados em dados mocados);  
  - Inclusão de área para **configuração de usuário**, preparada para receber futuramente:
    - informações de perfil;
    - ajustes de preferências, como privacidade no ranking de doadores;
    - outros dados relacionados ao usuário autenticado.

Neste estágio, o foco foi **consolidar o frontend e a navegação entre as principais telas**, utilizando dados mocados, deixando a base pronta para que, nos próximos TPs, seja feita a integração com a **API em C#** (backend), implementação de autenticação real, cadastro de pedidos, apoios, sistema de pontos e demais regras de negócio.

---

## Vídeo da entrega

O vídeo demonstrando o estado atual da aplicação no SP3 está disponível a seguir:

<p align="center">
  <video controls width="720">
    <source src="../videos/entregavel-01.mp4" type="video/mp4">
    Seu navegador não suporta a exibição de vídeos.
  </video>
</p>
 [Teste de vídeo](../videos/entregavel-01.mp4)
