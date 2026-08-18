# 📚 Documento de Requisitos do Sistema - VozEscola (Ouvidoria e Demandas Gerais)

## 🎯 1. Requisitos Funcionais (RF)
*Representam as funcionalidades que o sistema deve executar.*

* **[RF01] Cadastro e Perfis de Acesso:**
  * **Solicitante (Aluno, Pai, Professor):** Pode abrir e acompanhar chamados de qualquer natureza.
  * **Coordenador/Setor (RH, Direção, Manutenção):** Responsáveis por responder os chamados da sua área.
  * **Administrador (Diretor):** Tem visão total do sistema, pode gerenciar usuários e categorias.

* **[RF02] Abertura de Chamado com Categorias Amplas:** O solicitante preenche um formulário contendo:
  * **Categoria Principal (O que é?):** Ex: Infraestrutura (Ar, Vazamento), TI (Computador, Internet), Pedagógico (Metodologia do professor, Conteúdo das aulas), Administrativo (Merenda, Limpeza, Secretaria).
  * **Urgência:** Baixa, Média, Alta.
  * **Modalidade:** Anônimo ou Identificado (se anônimo, o nome não aparecerá para o funcionário que for responder).

* **[RF03] Roteamento Inteligente:** O sistema deve direcionar automaticamente o chamado para o setor responsável. Ex: Se o aluno escolhe "Pedagógico", o chamado vai para a Coordenação Pedagógica. Se escolhe "Infraestrutura", vai para a Manutenção.

* **[RF04] Interação e Feedback:** O funcionário responsável deve poder responder ao chamado com uma solução, um pedido de mais informações ou uma justificativa. O solicitante recebe uma notificação (pode ser via e-mail) sobre cada interação.

* **[RF05] Dashboard de Gestão:** A direção da escola deve ter um painel com gráficos mostrando:
  * Quantidade de reclamações por setor.
  * Quais professores/metodologias estão recebendo mais críticas ou elogios (para direcionar treinamentos).
  * Tempo médio de resposta de cada setor.
  * Satisfação geral baseada em uma avaliação final que o solicitante pode dar ao fechar o chamado.

---

## 🔒 2. Requisitos Não Funcionais (RNF)

* **[RNF01] Privacidade e Anonimato (LGPD):** Requisito crucial. O sistema deve garantir que, se o aluno escolher "Anônimo", o funcionário que ler o chamado NÃO veja quem abriu. Apenas o administrador (diretor) deve ter a capacidade de "quebrar o anonimato" em casos extremos de segurança.

* **[RNF02] Classificação de Conteúdo (Moderação):** Para evitar bullying ou ofensas, as mensagens enviadas devem passar por um filtro de palavras proibidas (ex: palavrões, ameaças). Se detectado, o chamado é suspenso e enviado apenas para a direção.

* **[RNF03] Disponibilidade e Mobilidade:** O sistema precisa ser 100% responsivo e funcionar em celulares, pois alunos e pais usarão majoritariamente o smartphone. Deve estar disponível 24h para que possam reportar problemas a qualquer momento.

* **[RNF04] Desempenho:** A listagem dos chamados para os funcionários deve ser carregada em menos de 2 segundos, permitindo que eles gerenciem rapidamente a fila de trabalho.

* **[RNF05] Backup e Segurança de Dados:** Todas as interações devem ser armazenadas em um banco de dados relacional seguro, com backups diários, pois representam a "voz da comunidade escolar" e precisam ser preservadas para a gestão.
