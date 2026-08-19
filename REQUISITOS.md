# 📚 Documento de Requisitos do Sistema - VozCTBJ

## 🎯 1. Requisitos Funcionais (RF)
*Representam as funcionalidades que o sistema deve executar para atender à comunidade do CTBJ.*

* **[RF01] Cadastro e Perfis de Acesso:**
  * **Solicitante (Aluno/Pai/Professor):** Pode abrir e acompanhar chamados.
  * **Gestor (Coordenação, Manutenção, Secretaria):** Responsáveis por responder os chamados da sua área.
  * **Administrador (Direção):** Tem visão total do sistema e pode gerenciar os demais usuários.

* **[RF02] Abertura de Chamado com Categorias Específicas do CTBJ:** O formulário de abertura de chamado deve conter:
  * **Tipo do Chamado:**
    1. *Infraestrutura (Obras/Manutenção):* Para reportar ar-condicionado quebrado, banheiros com problemas, equipamentos antigos, etc.
    2. *Pedagógico / Metodologia de Ensino:* **Categoria criada exclusivamente para os alunos.** Permite que o aluno sugira melhorias, critique ou elogie a metodologia de um professor (ex: "Sugiro que o professor X intercale aulas expositivas com as aulas de pesquisa").
    3. *Acadêmico (Dúvidas):* Para tirar dúvidas sobre o calendário letivo, lançamento de notas no sistema ou rematrícula.
  * **Localização (Onde fica o problema?):** Ex: Sala de aula 204, Laboratório de Informática, Banheiro do Bloco B.
  * **Modalidade:** Anônimo ou Identificado (essencial para o feedback pedagógico, onde o aluno pode se sentir mais à vontade para falar).

* **[RF03] Roteamento Automático:** O sistema deve encaminhar o chamado diretamente para o responsável:
  * *Infraestrutura* -> Vai para a equipe de manutenção.
  * *Pedagógico* -> Vai para a coordenação pedagógica.
  * *Acadêmico* -> Vai para a secretaria.

* **[RF04] Interação e Resolução:** O funcionário pode responder ao chamado com uma solução, um pedido de mais informações, ou até mesmo justificar porque determinado problema é de baixa prioridade (caso o banheiro ou equipamento antigo não seja urgente naquele momento).

* **[RF05] Dashboard de Prioridades (Gestão):** Para atender à política da gestão que "procura resolver o vital primeiro", o sistema deve ter um painel que classifica os chamados como: **"Vital", "Urgente", "Média" e "Baixa"**. A gestão pode visualizar um relatório com os chamados mais críticos em primeiro lugar, otimizando o tempo da direção.

* **[RF06] Notificações por E-mail:** Sempre que um chamado for aberto, respondido ou solucionado, o solicitante e o gestor devem receber um e-mail de alerta.

---

## 🔒 2. Requisitos Não Funcionais (RNF)

* **[RNF01] Garantia de Anonimato (Alta Prioridade):** O sistema deve ter uma camada de segurança que impeça o funcionário de ver quem abriu um chamado na modalidade "Anônimo". Apenas o Administrador Geral (Diretor) pode quebrar o anonimato em casos de segurança (como bullying ou ameaças).

* **[RNF02] Filtro de Moderação:** Para evitar que reclamações virem ofensas pessoais a professores, o sistema deve ter um filtro de palavras proibidas. Se o aluno digitar algo grave, o chamado não vai direto para o professor, e sim para a direção analisar.

* **[RNF03] Interface Mobile First (Responsiva):** Alunos do CTBJ acessam tudo pelo celular. O sistema deve ser desenvolvido para funcionar perfeitamente em smartphones, com poucos cliques para abrir um chamado.

* **[RNF04] Disponibilidade:** O sistema precisa estar disponível 24h por dia, 7 dias por semana, para que os alunos possam tirar dúvidas sobre notas ou calendário a qualquer hora do dia ou da noite.

* **[RNF05] Segurança de Dados:** Os dados de identificação de alunos e suas notas (caso eles usem o sistema para pedir revisão de nota) devem ser armazenados com criptografia no banco de dados, seguindo os padrões de proteção de dados (LGPD).
