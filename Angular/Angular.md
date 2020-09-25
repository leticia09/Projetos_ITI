# Json Server
- Lê um arquivo que tem um json e cria um api baseada nesse json
- O que é um API (Application Programming Interface)? É um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. Na pática, são mini sistemas que é feito para acessar/se comunicar com um sistema maior. Faz uma ponte entre o sistema maior e os terceiros que tem a necessidade de acessar informações do sistema maior
- Basicamente o que o comando abaixo vai fazer é chamar o Json-server, para monitorar as mudanças do arquivo db.json na porta 3001.
```json
"scripts": {
    "start": "json-server --watch db.json --port 3001"
  },
```
- Para iniciar a API é só colocar o seguinte comando no bash `npm start`
- instalar e pesquisar o postman
## Node e npm
- **NPM:** Gerenciador de pacotes do Node.js, é utilizado para gerenciar pacotes dentro de um ambiente de desenvolvimento, por exemplo ele controla as dependências, dentro do `package.json` são informados as dependências que ele deve instalar no projeto a partir do `npm install`.   
- **Node.js:** é um "runtime" que permite a execução de código JavaScript fora dos navegadores. Pode ser usado dentro de outras aplicações ou mesmo sozinho. Ele é um ambiente que funciona como uma máquina virtual para a execução do scripts JS.

## Comandos Angular CLI
- Para a criação de:
    - Componentes: ng g c component/template/nome-do-componente
    - Diretiva (Directive): ng g directive nome-da-diretiva
    - Filtro (Pipe): ng g pipe nome-do-filtro
    - Serviço (Service): ng g service nome-do-servico
    - Módulo (Module): ng g module nome-do-modulo
> OBS: Para conhecer mais comandos do Angular CLI, clique [aqui](http://www.macoratti.net/18/04/ang_angcli1.htm)

## Gitignore
- Para informações sobre o gitignore, clique [aqui](http://help.github.com/ignore-files/)


# Angular
- É um Framework JavaScript desenvolvido pelo Google para criação de aplicações Web SPA (Single Page Application),baseada em componentes. 
- O código será escrito em typeScript. Basicamente através do JavaScript será produzido o HTML (dinâmicamente a partir do JavaScript) e Css. 
- O que é typeScript?  É um superset do JS, ou seja, tem tudo que o JS tem, mas acrescenta uma série de funcionalidades, Ex: Orientada a Objetos & **Tipagem forte**, além de outros recuros. O TS é uma linguagem desenvolvida pela Microsoft. O código desenvolvido em TS será compilado para JavaScript.
- O Angular, frequêntemente usa o CLI (Command Line Interface). Para instalar o CLI o comando é `npm i -g @angular/cli`. A partir disso, é preciso criar uma nova aplicação usando `ng new nome-da-app`. OBS:
    - npm(Node Package Manager) é o gerenciador de pacotes do node.js
    - i de install
    - -g de global (instalar na máquina inteira)
    - O cli vai criar automáticamente os arquivos de projeto

## Árvore de Componentes
- A implementação de cada Framework é diferente, e tem uma árvore de componentes diferentes.
- Basicamente, começamos uma aplicação a partir de um componente principal, que é o raiz da aplicação (MyAPP), a partir desse componente referencia-se outros componentes (Header e Content). Vai ter um componente pai e dai uma lista de componentes. Ex:
- MyAPP
    - Header
        - Nav
            - list
                - item
    - Content
        - ContentTitle
        - ProductCrud
            - ProductForm
                - Input

## Conceitos Essenciais do Angular

### Fluxo da Inicialização da APP
> OBS: O arquivo será criado nome.ts. Ex: main.ts
- A inicialização será dividida em: main.ts, esse arquivo vai chamar o módulo da aplicação, que é o AppModule, ou seja, a aplicação Angular é modularizada, os componentes ficam dentro do módulos.
- Dentro do AppModule terá um atributo chamado Bootstrap, que vai apontar para o AppComponent, que é criado por padrão, e é o lugar onde toda árvore de componentes será criada. Então: main.ts -> AppModule -> AppComponent. Esse é o processo de inicialização.
- O que é um Componente? É um trecho de código que representa um componente visual da sua tela. Esse componente visual é HTML, CSS e TS. Vamos trabalhar com três tipos de arquivos. Ex:
    - home.component.css
    - home.component.html
    - home.component.ts
- A ideia é encapsular os três componentes em uma tag personalizada. Ex:`<app-home></app-home>`

### Organização usando Módulos
- Todos os componentes vão estar dentro de um módulo. Ex:
    - AppModule - A;
    - XModule - B C D;
    - YModule - E F G H. 
- **Anatomia do Módulo:** Os atributos servem para configurar o módulo.Atributos:
    - **Declarations:** Components, Diretivas, Pipes;
    - **Exports:** Será tudo que foi colocado em declaration que poderá ser exportado. Components, Diretivas, Pipes;
    - **Imports:** Importação de módulos. Pode ser externo ou interno. Module A, Module B, Module C;
    - **Providers:** Service A, Service B, Service C;
    - **Bootsrtap:** O componente principal será carregado no caso o APP Component.

### Baixar components
- Para baixar uma lista de components usamos o `ng add @angular/material`. Nesta instalação ele vai perguntar o esquemas de cores que vamos utilizar. Geralmente usa-se o 1. Depois ele pergunta se é para aplicar a tipografia de forma global no projeto, e depois pergunta sobre as animações. Para ambas eu coloquei sim.
- Após a instalação, digitar o comando `npm start`

## Perguntas. 
- Para que serve esse modulo MatToobarModule?