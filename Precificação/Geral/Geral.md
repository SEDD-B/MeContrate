# 📝 5W2H - Planejamento do Projeto de Desenvolvimento

| Dimensão | Pergunta | Resposta (Síntese do Projeto) | Referência no Documento |
| :--- | :--- | :--- | :--- |
| **What** | O que será feito? | Desenvolvimento de um Produto Digital (Software/Plataforma) em 6 meses (Fase 1 - MVP/Estável) até 1 ano (Fase 3 - Escala/Versão 2.0). | Seção 2: Cronograma |
| **Why** | Por que será feito? | Entregar um produto digital estável e escalável, cumprindo os marcos definidos para investidores e garantindo segurança e usabilidade (UI/UX). | Seção 5: Estratégia de Cultura e Motivação (Propósito) |
| **Who** | Por quem será feito? | Por uma equipe multidisciplinar de 11 profissionais, incluindo Sêniores/Plenos em Desenvolvimento, Especialistas em Dados/Infra/Cibersegurança e Gestão (Agile Master). | Seção 3: Estrutura da Equipe |
| **Where** | Onde será feito? | O desenvolvimento será realizado pela equipe remota ou interna, e a infraestrutura do produto será hospedada na nuvem, utilizando a plataforma **AWS** (Cenário 2 Intermediário). | Seção 1: Custo de Infraestrutura |
| **When** | Quando será feito? | O projeto tem início planejado em **01/12/2025**. A Fase 1 (MVP e Entrega Estável) tem duração de 6 meses (até 31/05/2026). O prazo total pode se estender por até 1 ano (Versão 2.0). | Seção 2: Cronograma de Entregas |
| **How** | Como será feito? | Através de uma metodologia **Ágil** (Scrum/Kanban) com foco em entregas mensais (Marcos), estrutura de papéis **RACI** para governança, e cultura de transparência e reconhecimento. | Seção 4: Definição de Papéis e Responsabilidades (RACI) e Seção 5: Estratégia de Cultura |
| **How Much** | Quanto custará? | O custo total é estimado em **R$ 119.200,00/mês** (Equipe + AWS). O investimento total é de **R$ 715.200,00** (6 meses) a **R$ 1.430.400,00** (1 ano). | Seção 1: Estimativa Orçamentária e Financeira |

---

## 1. Estimativa Orçamentária e Financeira

Este tópico detalha o investimento necessário para a equipe e infraestrutura.

### Custo de Pessoal (Mensal)
A equipe foi orçada considerando 22 dias úteis/mês.

| Especialidade | Nível | Custo Mensal (aprox.) | Custo Diário (aprox.) |
| :--- | :--- | :--- | :--- |
| **Back-end** | Sênior | R$ 16.000 | R$ 730 |
| **Back-end** | Pleno | R$ 12.000 | R$ 545 |
| **Front-end** | Sênior | R$ 13.000 | R$ 590 |
| **Front-end** | Pleno | R$ 12.000 | R$ 545 |
| **Dados** | Especialista | R$ 18.000 | R$ 820 |
| **Infraestrutura** | Especialista | R$ 13.000 | R$ 590 |
| **Cibersegurança** | Especialista | R$ 15.000 | R$ 680 |
| **Agile Master** | - | R$ 13.000 | R$ 590 |
| **Estagiários (3)** | - | R$ 2.000 (cada) | R$ 90-100 |

- **Total Equipe:** ~ R$ 118.000/mês.

### Custo de Infraestrutura (AWS)
Foi selecionado o **Cenário 2 (Intermediário)**, considerado o mais realista para um projeto profissional.

- **Configuração:** EC2 (t3.medium/large), RDS (db.t3.medium), S3 + CloudFront, Logs + Backups.
- **Custo Estimado:** R$ 800 a R$ 1.600/mês (Média considerada: R$ 1.200).

### Totalização do Investimento
Considerando o custo mensal total de **R$ 119.200,00** (Equipe + AWS):

- **Prazo Mínimo (6 Meses):** **R$ 715.200,00**.
- **Prazo Máximo (1 Ano):** **R$ 1.430.400,00**.

---

## 2. Cronograma de Entregas e Marcos

Planejamento completo das entregas técnicas e marcos para investidores. Prêmios em dinheiro extra serão aplicados a cada entrega.

### Fase 1: Fundação e MVP (Meses 1-3)

**MÊS 1: Planejamento e Arquitetura** (01/12/25 → 31/12/25)
* [ ] Documento de Arquitetura de Software
* [ ] Arquitetura de Dados + Modelo Entidade-Relacionamento
* [ ] Configuração inicial AWS e DevOps básico (CI/CD)
* [ ] Protótipo (wireframes) das telas
* 🏁 **MARCO:** Arquitetura aprovada + protótipo validado.

**MÊS 2: Fundamentos Técnicos** (01/01/26 → 31/01/26)
* [ ] Backend: estrutura base, autenticação, logs
* [ ] Frontend: layout inicial + componentes base
* [ ] Integração Front ↔ Back e Banco RDS implantado
* [ ] Setup de segurança inicial (WAF, IAM)
* 🏁 **MARCO:** Infraestrutura + app base rodando.

**MÊS 3: MVP Funcional** (01/02/26 → 28/02/26)
* [ ] MVP completo com principais funcionalidades
* [ ] Fluxos integrados end-to-end e Autenticação
* [ ] Primeiras métricas (CloudWatch)
* 🏁 **MARCO:** MVP entregue e navegável.

### Fase 2: Estabilização e Evolução (Meses 4-6)

**MÊS 4: Versão Estável** (01/03/26 → 31/03/26)
* [ ] Testes automatizados de integração
* [ ] Hardening de segurança e CI/CD avançado
* [ ] Interface refinada (UI/UX)
* 🏁 **MARCO:** Versão estável e preparada para usuários reais.

**MÊS 5: Funcionalidades Avançadas** (01/04/26 → 30/04/26)
* [ ] Funcionalidades premium/diferenciais
* [ ] Otimizações Backend (cache, filas) e Frontend
* [ ] Testes de carga
* 🏁 **MARCO:** Funcionalidades avançadas concluídas.

**MÊS 6: Entrega Final (Fase 1)** (01/05/26 → 31/05/26)
* [ ] Pentest e relatório de segurança
* [ ] Documentação técnica e Manual do usuário
* [ ] Treinamento da equipe
* 🏁 **MARCO:** Produto final entregue + documentação oficial.

### Fase 3: Expansão e Escala (Meses 7-12)

- **MÊS 7 (Expansão):** Novos módulos, feedback de usuários e versão 1.1.
- **MÊS 8 (Integrações):** APIs de terceiros, Webhooks e Logs de auditoria.
- **MÊS 9 (Inteligência):** Algoritmos de recomendação e Dashboards inteligentes.
- **MÊS 10 (Alta Disponibilidade):** Load Balancers, Auto-scaling e Failover de BD.
- **MÊS 11 (Compliance):** LGPD completa, Criptografia reforçada e Plano de continuidade.
- **MÊS 12 (Release Final v2.0):** Versão 2.0 oficial, Relatório Executivo e Encerramento.

---

## 3. Estrutura da Equipe

Para garantir a execução do projeto nos prazos estipulados, a equipe será composta pelos seguintes perfis profissionais:

- **Desenvolvimento Back-end:** 1 Sênior, 1 Pleno.
- **Desenvolvimento Front-end:** 1 Sênior, 1 Pleno.
- **Dados:** 1 Especialista em Arquitetura de Dados, 1 Cientista de Dados.
- **Infraestrutura e Segurança:** 1 DevOps, 1 Cyber Segurança, 1 Pen Tester.
- **Gestão:** 1 Agile Master.
- **Apoio:** 3 Estagiários.

---

## 4. Definição de Papéis e Responsabilidades (RACI)

Utilizaremos a matriz **RACI** (Responsible, Accountable, Consulted, Informed) para definir a governança.

### Gestão
- **Agile Master (Accountable):** Responsável final por entregas mensais, métricas e remoção de impedimentos.

### Desenvolvimento
- **Dev Sênior Back-end (Accountable/Responsible):** Responsável pela arquitetura, qualidade da API e revisão de código.
- **Dev Pleno Back-end (Responsible):** Implementa endpoints, regras de negócio e testes unitários.
- **Dev Sênior Front-end (Accountable/Responsible):** Responsável pela arquitetura (Design System), acessibilidade e UX funcional.
- **Dev Pleno Front-end (Responsible):** Executor principal do desenvolvimento visual e conexão com APIs.
- **Estagiários (Responsible):** Suporte no desenvolvimento de componentes simples e testes.

### Dados
- **Especialista Arquitetura de Dados (Accountable):** Governança, modelagem de dados e compliance LGPD.
- **Especialista Ciência de Dados (Responsible/Accountable):** Construção de dashboards, KPIs e modelos estatísticos.

### Infraestrutura e Segurança
- **Especialista Infraestrutura/DevOps (Accountable):** Gestão AWS, automação CI/CD e monitoramento.
- **Especialista Cyber Segurança (Accountable):** Definição de políticas de acesso, criptografia e monitoramento de riscos.
- **Pen Tester (Accountable):** Execução de pentests mensais e validação de correções.

---

## 5. Estratégia de Cultura e Motivação

Plano para manter o engajamento da equipe e foco no objetivo final.

1. **Propósito Claro:** Kickoff inicial e uso de um documento "North Star" para evitar desalinhamento.
2. **Reconhecimento:** Premiações financeiras e reconhecimento público a cada entrega mensal.
3. **Comunicação:** Dailies rápidas e transparência total sobre riscos e prioridades.
4. **Colaboração:** Cultura de "Zero Culpa" com resolução conjunta de problemas.
5. **Crescimento:** Sessões de compartilhamento de conhecimento e desafios proporcionais ao nível.
6. **Bem-estar:** Planejamento realista e acompanhamento individual para evitar burnout.
7. **Feedback:** Demonstrações mensais para investidores com correção de rota imediata.
