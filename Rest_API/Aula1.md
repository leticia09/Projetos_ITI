> Curso AlgaWorks REST API

# Application Programming Interface (API)

- Interface de programação de uma aplicação
- É um componente de software que faz a intermediação do acesso as funcionalidades de algum sistema. Para API existir, é necessário um Software Consumidor e um Software Provedor. Um sotfware conversa com outro através de uma API.
- Um exemplo real de API é o Ifood. O ifood disponibiliza uma API para um software restaurante para que o restaurante possa se comunicar com o software do ifood.

### Web Services x API´s
- Web Services são um tipo de API que fornece a sua interface de comunicação pela web.

# Representational State Transfer (REST)
- Estilo arquitetural para desenvolver web API´s, ou seja, desenvolver web services. REST é uma especificação que define a forma de cominicação entre componentes de software na web independente da linguagem de porgramação usada. 
- Vantagens de usar o REST: 
    - Separação entre cliente e servidor, ou seja, quem consome a API e quem provê a API. Os sistemas podem evoluir independente do cliente ou do servidor; 
    - Escalabilidade; 
    - Independência de linguagem;
## Regras do REST (Constrains)
1) Cliente-servidor: significa que precisamos de um cliente (aplicação frontend, mobile..) enviando requisições para um servidor;
2) Stateless: significa sem estado, a aplicação não deve conter estado. O servidoe não pode manter um sessão; 
3) Cache: informação memorizada cache é um tipo de "memória" de consulta rápida;
4) Interface uniforme: Conjunto de operações bem definidas do sistema; 
5) Sistema em camadas: Possibilidade de entre o clinte que consome a API e o servidor que hospeda a API ter outros servidores entre eles, esses servidores podem fornecer uma camada se segurança, cache, entre outros; 
6) Código sob demanda: O servidor pode enviar como resposta de uma requisição algum código que deve ser executado no cliente.

- O protocolo do REST é o HTTP

## Protocolo HTTP
- É um protocolo requisição resposta. O cliente faz a requisição e o servidor traz a resposta. 
- Composição da requisição: 
    - Métodos: Indica a ação que desejamos que seja executada. Ex: get (devolve na requisição os dados solicitados); 
    - URI: Caminho que indica o que nós queremos no servidor;
    - Versão do protocolo; 
    - Cabeçalhos: Informações sobre as requisições; 
    - corpo/ PAYLOAD. 

```http
[método][URI] HTTP/ [Versão] 
[Cabeçalhos]

[corpo/PAYLOAD]
```

```http
POST /produtos HTTP/1.1 
Content-Type: application/json
Accept: application/json

{
    "nome": "Notebook", 
    "preco": 2000
}
```