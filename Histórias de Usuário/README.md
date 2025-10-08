## Histórias de Usuário – Funcionais

### Empregado (Freelancer)

- **Cadastro e Perfil:**  
  Como freelancer de garçom, quero criar meu perfil com minhas experiências, disponibilidade e fotos de documentos, para que os empregadores possam avaliar minha confiabilidade antes da contratação.

- **Busca de Oportunidades:**  
  Como auxiliar de cozinha, quero visualizar vagas disponíveis próximas à minha localização, para poder escolher as oportunidades mais viáveis e rápidas de atender.

- **Aplicação em Vaga:**  
  Como vendedor de doces em eventos, quero me candidatar facilmente a uma vaga com apenas um clique, para aumentar minhas chances de conseguir trabalho sem burocracia.

- **Avaliações:**  
  Como freelancer de limpeza, quero receber avaliações de empregadores após cada serviço, para construir uma reputação positiva e conseguir mais trabalhos.

### Empregador (Contratante)

- **Cadastro de Vaga:**  
  Como dono de restaurante, quero cadastrar rapidamente uma vaga de barman com data, horário e valor da diária, para encontrar candidatos disponíveis o quanto antes.

- **Seleção de Freelancers:**  
  Como organizador de festas, quero visualizar candidatos que já possuem boas avaliações, para escolher com mais segurança quem vai trabalhar no meu evento.

- **Confirmação e Pagamento:**  
  Como contratante de auxiliar de segurança, quero confirmar a contratação e já realizar o pagamento dentro da plataforma, para garantir que o freelancer estará no local combinado.

- **Avaliações:**  
  Como empregador de serviços de limpeza, quero receber avaliações de freelancer após o término do trabalho, para contribuir para a reputação do estabelecimento.

---

## Histórias de Usuário – Não Funcionais

- **Desempenho:**
  Como freelancer que busca vagas, quero que os resultados de pesquisa apareçam em até 2 segundos, para que eu não perca tempo e consiga escolher oportunidades rapidamente.

- **Usabilidade:**
  Como contratante que não é especialista em tecnologia, quero uma interface simples e intuitiva, para que eu consiga cadastrar vagas e contratar freelancers sem dificuldade.

- **Confiabilidade:**
  Como usuário da plataforma, quero que o sistema esteja disponível 24 horas por dia e 7 dias por semana, para que eu possa acessar e usar os serviços quando precisar.

- **Segurança:**
  Como freelancer que compartilha meus documentos, quero que minhas informações sejam armazenadas de forma criptografada, para que meus dados pessoais fiquem protegidos contra acessos indevidos.

- **Escalabilidade:**
  Como administrador da plataforma, quero que o sistema suporte um grande número de usuários simultâneos, para que mesmo em dias de alta demanda ele continue funcionando sem falhas.

- **Manutenibilidade:**
  Como desenvolvedor da plataforma, quero que o sistema seja modular e fácil de atualizar, para que novas funcionalidades possam ser adicionadas sem causar erros nos recursos já existentes.



### Modelo Atualizado com Gherkin


### Gherkin – Freelancers

### Cadastro e Perfil
Feature: Cadastro de perfil de freelancer

  **Scenario**: Freelancer cria seu perfil com dados e documentos
  
  **Given** que o freelancer acessa a tela de cadastro
    
  **When** ele preenche suas experiências, disponibilidade e anexa documentos
    
  **Then** o perfil deve ser salvo com sucesso
    
  **And** o freelancer deve estar visível para empregadores

### Busca de Oportunidades
Feature: Busca de vagas por localização

  **Scenario**: Freelancer visualiza vagas próximas
  
  **Given** que o freelancer está logado no sistema
    
  **When** ele acessa a busca de vagas com a localização ativada
    
  **Then** o sistema deve exibir as vagas mais próximas

### Aplicação em Vaga
Feature: Candidatura rápida a vaga

  **Scenario**: Freelancer se candidata com um clique
  
  **Given** que o freelancer está visualizando uma vaga
    
  **When** ele clica no botão "Candidatar-se"
    
  **Then** ele deve ser adicionado à lista de candidatos daquela vaga

### Avaliações Recebidas
Feature: Avaliações de freelancers após o serviço

  **Scenario**: Freelancer recebe avaliação de empregador
  
  **Given** que o serviço foi concluído
    
  **When** o empregador avalia o freelancer
    
  **Then** a avaliação deve aparecer no perfil do freelancer





### Gherkin – Empregadores

### Cadastro de Vaga
Feature: Cadastro de vagas por empregadores

  **Scenario**: Empregador cadastra vaga de barman
  
  **Given** que o empregador está na tela de cadastro de vaga
    
  **When** ele informa a função, data, horário e valor
    
 **Then** a vaga deve ser publicada e visível para freelancers

### Seleção de Freelancers
Feature: Seleção com base em avaliações

  **Scenario**: Empregador visualiza freelancers avaliados
  
  **Given** que o empregador está na lista de candidatos
    
  **When** ele ordena por melhores avaliações
    
  **Then** freelancers bem avaliados devem aparecer primeiro

### Confirmação e Pagamento
Feature: Confirmação de contratação com pagamento

  **Scenario**: Empregador confirma contratação e realiza pagamento
  
  **Given** que o empregador escolheu um freelancer
    
  **When** ele confirma a contratação e realiza o pagamento
    
  **Then** o freelancer deve ser notificado
    
  **And** o valor deve ficar reservado até a conclusão do serviço

###Avaliações de Freelancers
Feature: Avaliação de freelancers após o serviço

  **Scenario**: Empregador avalia freelancer
  
  **Given** que o serviço foi concluído
    
  **When** o empregador envia uma avaliação
    
  **Then** a nota e comentário devem ser adicionados ao perfil do freelancer



  ### Gherkin – Requisitos Não Funcionais
  
### Desempenho
Feature: Tempo de resposta na busca de vagas

  **Scenario**: Freelancer busca vagas com rapidez
  
  **Given** que o freelancer acessa a busca
    
  **When** ele realiza uma pesquisa
    
  **Then** os resultados devem ser exibidos em até 2 segundos

### Usabilidade
Feature: Interface amigável para empregadores

  **Scenario**: Empregador leigo cadastra vaga facilmente
  
  **Given** que o empregador acessa a plataforma pela primeira vez
    
  **When** ele tenta cadastrar uma vaga
    
  **Then** o sistema deve guiá-lo com passos simples e linguagem clara

### Confiabilidade
Feature: Sistema disponível 24/7

  **Scenario**: Usuário acessa a plataforma em qualquer horário
  
  **Given** que o sistema está em operação
    
  **When** qualquer usuário tenta acessar o sistema
    
  **Then** ele deve estar disponível sem interrupções

### Segurança
Feature: Proteção dos dados dos freelancers

  **Scenario**: Freelancer envia documentos com segurança
  
  **Given** que o freelancer está cadastrando seus documentos
    
  **When** ele envia arquivos pela plataforma
    
  **Then** os dados devem ser criptografados e armazenados com segurança

### Escalabilidade
Feature: Suporte a muitos usuários simultâneos

  **Scenario**: Sistema lida com picos de acesso
  
  **Given** que há um grande número de usuários conectados
    
  **When** todos acessam simultaneamente
    
  **Then** o sistema deve continuar operando sem lentidão ou falhas

### Manutenibilidade
Feature: Sistema modular e de fácil manutenção

  **Scenario**: Desenvolvedor adiciona nova funcionalidade
  
  **Given** que o sistema é modular
    
  **When** uma nova funcionalidade é adicionada
    
  **Then** os recursos existentes não devem ser afetados
    
  **And** a integração deve ser simples
