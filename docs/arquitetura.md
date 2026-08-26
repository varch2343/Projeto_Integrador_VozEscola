# 🏗️ Arquitetura do Sistema - VozCTBJ

## 1. Matriz RBAC (Role-Based Access Control)

### Tabela de Permissões por Perfil

| Funcionalidade | Aluno/Solicitante | Gestor (Coord/Manut/Secret) | Administrador (Direção) |
|----------------|-------------------|----------------------------|------------------------|
| **Abrir Chamado** | ✅ | ❌ | ❌ |
| **Acompanhar Chamado Próprio** | ✅ | ✅ | ✅ |
| **Visualizar Chamados da Área** | ❌ | ✅ | ✅ |
| **Responder Chamados** | ❌ | ✅ | ✅ |
| **Dashboard de Prioridades** | ❌ | ✅ | ✅ |
| **Classificar Prioridade** | ❌ | ✅ | ✅ |
| **Gerenciar Usuários** | ❌ | ❌ | ✅ |
| **Quebrar Anonimato** | ❌ | ❌ | ✅ |
| **Visualizar Relatórios** | ❌ | ✅ | ✅ |
| **Gerenciar Filtros de Moderação** | ❌ | ❌ | ✅ |

### Regras de Negócio

1. **Abertura de Chamados:**
   - Qualquer usuário pode abrir chamado (anônimo ou identificado)
   - Chamados anônimos só podem ter a identidade revelada pelo Diretor
   - Categoria Pedagógica só está disponível para alunos

2. **Roteamento:**
   - Infraestrutura → Equipe de Manutenção
   - Pedagógico → Coordenação Pedagógica
   - Acadêmico → Secretaria

3. **Priorização Automática:**
   - Problemas de segurança/infraestrutura vital → Prioridade Vital
   - Reclamações urgentes → Prioridade Urgente
   - Dúvidas gerais → Prioridade Média
   - Sugestões/elogios → Prioridade Baixa

4. **Moderação:**
   - Palavras proibidas ativam filtro de segurança
   - Chamados com ofensas vão para Direção antes do destino final

---

## 2. Diagrama de Fluxo (Fluxograma)

### Fluxo Principal do Sistema

```mermaid
graph TD
    A[Início] --> B{Login Realizado?}
    B -->|Não| C[Tela de Login]
    C --> D[Autenticação]
    D --> E{Perfil Identificado}
    
    B -->|Sim| E
    E -->|Aluno| F[Dashboard Aluno]
    E -->|Gestor| G[Dashboard Gestor]
    E -->|Admin| H[Dashboard Admin]
    
    F --> I[Abrir Chamado]
    I --> J[Escolher Tipo]
    J --> K{Infraestrutura?}
    K -->|Sim| L[Manutenção]
    K -->|Não| M{Pedagógico?}
    M -->|Sim| N[Coordenação]
    M -->|Não| O[Secretaria]
    
    L --> P[Fila de Atendimento]
    N --> P
    O --> P
    
    P --> Q[Gestor Analisa]
    Q --> R[Classifica Prioridade]
    R --> S{Resposta Pronta?}
    S -->|Não| T[Solicitar Informações]
    T --> U[Aluno Responde]
    U --> Q
    S -->|Sim| V[Finalizar Chamado]
    V --> W[Notificar Usuário]
    W --> X[Arquivar]
    
    G --> Y[Visualizar Chamados Área]
    Y --> Q
    
    H --> Z[Painel Administrativo]
    Z --> AA[Gerenciar Usuários]
    Z --> AB[Quebrar Anonimato]
    Z --> AC[Relatórios]
    Z --> AD[Moderação]
