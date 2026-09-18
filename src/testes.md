# Relatório de Validação — VozCTBJ

## 1. Objetivo
Registrar os testes realizados na versão 1.0.0 do protótipo, conforme a Etapa 3 do Projeto Integrador II.

## 2. Casos de teste

| ID | Teste | Resultado esperado | Resultado |
|---|---|---|---|
| CT01 | Abrir chamado de Infraestrutura | Chamado criado e roteado para Manutenção | APROVADO |
| CT02 | Abrir chamado Pedagógico | Chamado criado e roteado para Coordenação | APROVADO |
| CT03 | Abrir chamado Acadêmico | Chamado criado e roteado para Secretaria | APROVADO |
| CT04 | Selecionar modalidade Anônimo | Chamado aparece sem identidade exposta ao perfil Gestor | APROVADO |
| CT05 | Priorização automática | Sistema define prioridade conforme conteúdo/categoria | APROVADO |
| CT06 | Alterar status pelo Gestor | Status é atualizado na fila | APROVADO |
| CT07 | Classificar prioridade pelo Gestor/Admin | Prioridade é alterada | APROVADO |
| CT08 | Dashboard | Quantidade por prioridade é apresentada | APROVADO |
| CT09 | Responsividade | Interface se adapta a telas menores | APROVADO |
| CT10 | Persistência local | Chamados permanecem após recarregar a página | APROVADO |

## 3. Validação funcional
A validação foi realizada sobre o fluxo implementado no protótipo. O resultado confirma o fluxo básico de abertura, roteamento, priorização, acompanhamento e gestão dos chamados.

## 4. Limitações da versão 1.0.0
Esta entrega é um protótipo funcional local. Ainda não possui backend, autenticação real, banco de dados remoto, envio efetivo de e-mails ou criptografia de produção. Esses pontos devem ser tratados antes de uso institucional.

## 5. Próximos passos
- Backend e banco de dados.
- Autenticação e RBAC real.
- Persistência remota.
- E-mail real.
- Filtro de moderação robusto.
- Auditoria e controle formal de quebra de anonimato.
