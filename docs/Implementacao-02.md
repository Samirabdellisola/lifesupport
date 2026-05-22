# Implementação 02 - Frontend

Este documento resume a verificação feita em `docs/requisitos.md` e as funcionalidades adicionadas no frontend a partir do plano `login_campanhas_ranking_87cec048`.

## Requisitos de Front Verificados

Os requisitos funcionais de interface foram cobertos com dados mockados e persistência local em `localStorage`.

- `RF01` e `RF02`: cadastro/login visual com nome, e-mail e senha, mantendo sessão local.
- `RF03`: página de perfil com edição de nome, foto, endereço, contatos e preferência de ranking.
- `RF04`: criação de pedido/campanha por usuário logado, incluindo título, descrição, tipo de ajuda, valor/meta, cidade, estado, país, contatos e referências externas.
- `RF05`: listagem pública de campanhas com título, resumo, tipo de ajuda, localidade e status.
- `RF06`: detalhamento completo da campanha, com mídia, descrição, progresso, referências, atualizações e selo de verificação.
- `RF07`: registro mockado de apoio/doação com tipo, valor estimado e mensagem opcional.
- `RF08`: histórico de apoios realizados pelo usuário no perfil.
- `RF09`: painel do criador para visualizar apoios recebidos em campanhas criadas localmente.
- `RF10`: painel do criador para atualizar status e publicar mensagens de atualização em campanhas criadas localmente.
- `RF11`: filtros por palavra-chave, solicitante, tipo de ajuda, cidade, país, status e período.
- `RF12`: fluxo visual de solicitação de autenticação com envio de imagem da frente e verso do documento.
- `RF13`: indicação visual de campanha certificada ou não certificada.
- `RF14` e `RF15`: pontuação mockada gerada a partir dos apoios e exibida no perfil do usuário.
- `RF16`: página pública de ranking mensal com maiores ajudantes.
- `RF17`: preferência de participação no ranking disponível no perfil.

## O que foi adicionado no Frontend

### Sessão e Perfil

- Criação de `frontend/src/data/authStorage.ts` para centralizar sessão, perfil vazio e persistência no `localStorage`.
- Atualização da tela de usuário para carregar, salvar e limpar sessão local.
- Ajuste dos componentes de perfil para dependerem do tipo centralizado `UserProfile`.

### Campanhas e Pedidos de Ajuda

- Criação de `frontend/src/data/campaignStorage.ts` para combinar campanhas mockadas com campanhas criadas localmente.
- Expansão do modelo de campanha com:
  - tipo de ajuda;
  - status;
  - estado/localidade;
  - referências externas;
  - atualizações;
  - e-mail do criador quando a campanha é local.
- Criação da página `frontend/src/pages/CampaignCreate/ScreenCampaignCreate.tsx`.
- Adição da rota `/campaign/create`.
- Exibição do botão `Criar campanha` na home quando houver usuário logado.
- Redirecionamento automático para a campanha criada após salvar.

### Listagem, Filtros e Detalhe

- Atualização dos cards de campanha para exibir tipo de ajuda e status.
- Atualização dos filtros para incluir tipo de ajuda e status.
- Atualização da página de detalhe para exibir localidade, referências externas, atualizações e painel do criador.
- O painel do criador permite alterar status, publicar atualizações e visualizar apoios recebidos.

### Apoios, Pontos e Ranking

- Criação de `frontend/src/data/supportStorage.ts` para registrar apoios mockados no `localStorage`.
- Substituição do botão de doação externa por modal de registro de apoio interno.
- O modal de apoio coleta tipo de apoio, valor estimado e mensagem opcional.
- Cada apoio gera pontos mockados para o usuário.
- O perfil exibe total de pontos e histórico de apoios realizados.
- Criação de `frontend/src/data/rankings.ts` e `frontend/src/pages/Rankings/ScreenRankings.tsx`.
- Adição da rota `/rankings` e link no menu superior.
- A página de rankings mostra destaques do mês e explica os critérios mockados de pontuação.

### Contato e Verificação

- O botão `Entrar em contato` agora abre modal com e-mail e telefone cadastrados na campanha.
- A solicitação de autenticação no perfil permite selecionar imagens da frente e verso do documento.
- Os arquivos selecionados não são enviados nem persistidos nesta etapa.

## Observações Sobre o Mock Atual

- A persistência do frontend usa `localStorage`, sem banco de dados.
- O login não valida credenciais contra backend.
- Campanhas criadas localmente ficam disponíveis apenas no navegador atual.
- A verificação de identidade é apenas visual; o usuário não é aprovado automaticamente.
- A regra de publicação apenas por usuários verificados ainda precisa ser aplicada pelo backend. No front, as campanhas locais são exibidas como não certificadas até haver integração real.
- O ranking público ainda usa dados mockados fixos. Os apoios feitos pelo usuário aparecem no perfil, mas ainda não alimentam o ranking público.

## Endpoints Necessários no Backend

Para a próxima entrega de sprint, o backend em C# deve expor uma API REST para substituir os dados mockados e o `localStorage`.

### Autenticação e Usuário

- `POST /api/auth/register`: cadastrar usuário com nome, e-mail e senha.
- `POST /api/auth/login`: autenticar usuário e retornar token/sessão.
- `POST /api/auth/logout`: encerrar sessão quando aplicável.
- `GET /api/users/me`: retornar dados do usuário autenticado.
- `PUT /api/users/me`: atualizar dados básicos do perfil.
- `PUT /api/users/me/contacts`: atualizar meios de contato.
- `PUT /api/users/me/address`: atualizar endereço.
- `POST /api/users/me/photo`: enviar ou atualizar foto de perfil.
- `PUT /api/users/me/ranking-privacy`: definir se o usuário participa publicamente do ranking.

### Verificação de Identidade

- `POST /api/users/me/verification-request`: enviar solicitação de verificação com dados e documentos.
- `GET /api/users/me/verification-request`: consultar status da solicitação do usuário.
- `GET /api/admin/verification-requests`: listar solicitações pendentes para análise.
- `PATCH /api/admin/verification-requests/{id}`: aprovar ou rejeitar uma solicitação.

### Campanhas/Pedidos de Ajuda

- `GET /api/campaigns`: listar campanhas com filtros por palavra-chave, tipo, localidade, status e período.
- `POST /api/campaigns`: criar campanha/pedido de ajuda.
- `GET /api/campaigns/{id}`: consultar detalhe completo de uma campanha.
- `PUT /api/campaigns/{id}`: atualizar dados principais da campanha pelo criador.
- `PATCH /api/campaigns/{id}/status`: atualizar status da campanha.
- `POST /api/campaigns/{id}/updates`: publicar atualização da campanha.
- `GET /api/campaigns/{id}/updates`: listar atualizações da campanha.
- `POST /api/campaigns/{id}/media`: enviar imagens ou vídeos da campanha, se houver upload real.
- `GET /api/users/me/campaigns`: listar campanhas criadas pelo usuário autenticado.

### Apoios, Doações e Pontos

- `POST /api/campaigns/{id}/supports`: registrar apoio/doação interna.
- `GET /api/campaigns/{id}/supports`: listar apoios recebidos por uma campanha, disponível ao criador.
- `GET /api/users/me/supports`: listar apoios realizados pelo usuário autenticado.
- `GET /api/users/me/points`: consultar pontuação total e resumo de pontos do usuário.
- `GET /api/rankings/monthly`: listar ranking mensal respeitando a privacidade dos doadores.
- `GET /api/rankings/rules`: retornar critérios de pontuação e funcionamento do ranking.

## Plano de Testes

O plano de testes foi organizado com base em práticas de Engenharia de Software, considerando rastreabilidade com os requisitos, validação de fluxos principais, testes de interface e critérios objetivos de aceite. Nesta etapa, como os dados ainda estão mockados no frontend, os testes priorizam comportamento visual, navegação, persistência em `localStorage` e consistência das regras simuladas.

### Objetivos

- Verificar se os requisitos funcionais implementados no frontend estão acessíveis ao usuário.
- Validar os principais fluxos de navegação: login, perfil, criação de campanha, listagem, detalhe, apoio e ranking.
- Confirmar que dados mockados persistidos em `localStorage` continuam disponíveis após recarregar a página.
- Identificar falhas de interface, validação de formulários e inconsistências entre telas.
- Garantir que a aplicação continue compilando sem erros de TypeScript.

### Escopo dos Testes

Entram no escopo:

- telas de login/cadastro e perfil;
- criação, listagem, filtro e detalhamento de campanhas;
- modal de contato e modal de registro de apoio;
- histórico de apoios e pontuação no perfil;
- ranking mensal;
- solicitação visual de autenticação com documentos;
- painel do criador da campanha para status, atualizações e apoios recebidos.

Ficam fora do escopo nesta etapa:

- autenticação real com token;
- validação de senha no backend;
- upload real de arquivos;
- persistência em banco de dados;
- processamento real de pagamento;
- aprovação real de verificação de identidade.

### Estratégia de Testes

- **Testes funcionais manuais:** executar os casos de uso principais conforme os requisitos `RF01` a `RF17`.
- **Testes de interface:** verificar textos, botões, modais, estados vazios e responsividade básica.
- **Testes de persistência local:** recarregar a página após criar dados e confirmar que continuam disponíveis.
- **Testes de regressão:** repetir os fluxos principais após alterações para garantir que funcionalidades anteriores não quebraram.
- **Testes de build:** executar `npm run build` para validar TypeScript e empacotamento.

### Casos de Teste

#### CT01 - Cadastro e Login

- Requisito relacionado: `RF01`, `RF02`.
- Pré-condição: usuário acessa a página de perfil sem estar logado.
- Passos:
  - abrir `/user`;
  - alternar para `Cadastrar`;
  - preencher nome, e-mail e senha;
  - confirmar o formulário.
- Resultado esperado:
  - usuário entra na área de perfil;
  - nome e e-mail ficam disponíveis no estado local;
  - sessão permanece ativa após recarregar a página.

#### CT02 - Edição de Perfil

- Requisito relacionado: `RF03`.
- Pré-condição: usuário logado.
- Passos:
  - editar nome, endereço, telefone, WhatsApp e website;
  - recarregar a página.
- Resultado esperado:
  - dados editados continuam exibidos;
  - logout limpa a sessão local.

#### CT03 - Criação de Campanha

- Requisito relacionado: `RF04`.
- Pré-condição: usuário logado.
- Passos:
  - acessar a home;
  - clicar em `Criar campanha`;
  - preencher título, resumo, descrição, tipo de ajuda, imagem, cidade, estado, país, meta, contatos e referências;
  - publicar campanha.
- Resultado esperado:
  - usuário é redirecionado para a campanha criada;
  - campanha aparece na listagem;
  - dados persistem após recarregar a página.

#### CT04 - Listagem e Filtros

- Requisito relacionado: `RF05`, `RF11`.
- Pré-condição: existem campanhas mockadas ou criadas localmente.
- Passos:
  - acessar a home;
  - filtrar por palavra-chave, solicitante, tipo de ajuda, cidade, país, status e período.
- Resultado esperado:
  - lista exibe apenas campanhas compatíveis com os filtros;
  - estado vazio aparece quando não há resultados.

#### CT05 - Detalhamento da Campanha

- Requisito relacionado: `RF06`, `RF13`.
- Pré-condição: campanha existente.
- Passos:
  - clicar em uma campanha da listagem;
  - verificar título, solicitante, localidade, data, tipo, status, progresso, descrição, referências e selo de certificação.
- Resultado esperado:
  - todos os dados da campanha são exibidos corretamente;
  - campanhas certificadas e não certificadas mostram mensagens visuais diferentes.

#### CT06 - Modal de Contato

- Requisito relacionado: comunicação com solicitante definida no plano de implementação.
- Pré-condição: campanha existente com e-mail e telefone.
- Passos:
  - abrir detalhe da campanha;
  - clicar em `Entrar em contato`.
- Resultado esperado:
  - modal abre com e-mail e telefone cadastrados;
  - links `mailto:` e `tel:` estão disponíveis;
  - modal fecha pelo botão ou ao clicar fora.

#### CT07 - Registro de Apoio

- Requisito relacionado: `RF07`, `RF14`.
- Pré-condição: usuário logado e campanha existente.
- Passos:
  - abrir detalhe da campanha;
  - clicar em `Registrar apoio`;
  - preencher tipo de apoio, valor estimado e mensagem;
  - salvar apoio.
- Resultado esperado:
  - apoio é registrado no `localStorage`;
  - pontos são calculados e informados ao usuário;
  - progresso financeiro da campanha é atualizado quando o apoio for financeiro.

#### CT08 - Histórico de Apoios e Pontos

- Requisito relacionado: `RF08`, `RF15`.
- Pré-condição: usuário logado com apoio registrado.
- Passos:
  - acessar `/user`;
  - verificar seção de pontos e histórico de apoios.
- Resultado esperado:
  - total de pontos é exibido;
  - apoio realizado aparece com campanha, tipo, valor e pontos.

#### CT09 - Acompanhamento do Criador

- Requisito relacionado: `RF09`, `RF10`.
- Pré-condição: usuário logado criou uma campanha localmente.
- Passos:
  - abrir a campanha criada;
  - alterar status;
  - publicar uma atualização;
  - verificar apoios recebidos.
- Resultado esperado:
  - status é atualizado;
  - atualização aparece na campanha;
  - apoios recebidos são listados para o criador.

#### CT10 - Solicitação de Autenticação

- Requisito relacionado: `RF12`.
- Pré-condição: usuário logado e ainda não autenticado.
- Passos:
  - acessar `/user`;
  - clicar em `Solicitar autenticação`;
  - selecionar imagem da frente e verso do documento.
- Resultado esperado:
  - nomes dos arquivos selecionados aparecem na tela;
  - nenhum envio real é realizado nesta etapa.

#### CT11 - Ranking e Privacidade

- Requisito relacionado: `RF16`, `RF17`, `RNF11`, `RNF12`.
- Pré-condição: aplicação carregada.
- Passos:
  - acessar `/rankings`;
  - verificar lista de ajudantes do mês;
  - acessar `/user` e alterar opção de participação no ranking.
- Resultado esperado:
  - ranking exibe nomes, campanhas ajudadas, pontos e valor estimado;
  - tela explica os critérios de pontuação;
  - preferência de participação fica disponível no perfil.

#### CT12 - Build e Regressão

- Requisito relacionado: `RNF01`, `RNF09`.
- Pré-condição: dependências instaladas no frontend.
- Passos:
  - executar `npm run build` dentro de `frontend`;
  - navegar pelos fluxos principais após o build passar.
- Resultado esperado:
  - build finaliza sem erros;
  - fluxos principais continuam funcionando.

### Critérios de Aceite

- Todos os casos de teste críticos (`CT01`, `CT03`, `CT04`, `CT05`, `CT07`, `CT08`, `CT09` e `CT12`) devem passar.
- Não deve haver erro de build TypeScript.
- A navegação principal deve estar funcional sem telas quebradas.
- Dados criados localmente devem persistir após recarregar a página.
- O documento deve deixar claro quais comportamentos ainda são mockados e dependem do backend.

### Riscos e Pontos de Atenção

- Como o `localStorage` é local ao navegador, os dados não são compartilhados entre usuários reais.
- A regra de publicar campanhas apenas com usuário verificado ainda precisa ser aplicada no backend.
- O ranking público ainda não considera dinamicamente os apoios registrados no perfil.
- Upload de documentos e foto de perfil ainda não têm armazenamento real.
- A futura integração com API pode exigir ajustes nos modelos de dados e nos fluxos de erro/carregamento.
