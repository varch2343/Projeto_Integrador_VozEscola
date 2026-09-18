# VozCTBJ — v1.0.2

Sistema de gestão de chamados e feedbacks do CTBJ.

## Estado inicial
A versão inicia sem chamados pré-cadastrados e limpa automaticamente os três chamados de demonstração que possam ter ficado salvos no navegador. A única alteração desta versão em relação à v1.0.0 é a remoção dos chamados de demonstração.

## Execução
Abra `src/index.html` em um navegador moderno. O protótipo funciona no navegador e utiliza `localStorage` para manter os chamados no dispositivo.

## Perfis demonstrados
- Aluno / Solicitante: abre e acompanha chamados.
- Gestor: visualiza a fila e atualiza status/prioridade.
- Administrador: possui visão administrativa e pode revisar/moderar chamados.

## Fluxos implementados
- Categorias Infraestrutura, Pedagógico e Acadêmico.
- Roteamento para Manutenção, Coordenação e Secretaria.
- Modalidade Anônimo/Identificado.
- Priorização automática inicial.
- Status de atendimento.
- Exclusão de chamados pelo próprio solicitante, com confirmação.
- Dashboard de prioridades.
- Interface responsiva/mobile first.

## Estrutura
- `src/` — produto/protótipo funcional.
- `docs/testes.md` — validação da versão.
