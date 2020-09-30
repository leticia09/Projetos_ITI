# Elementos do Angular

## Componentes
- Formado pelo HTML, CSS e TS. O componente é uma pequena aplicação de um todo.

## Diretivas
### Attribute Directives
- Altera a aparência (CSS) e o comportamento de um elemento (JS), componente ou outra diretiva.
- Para criar uma diretiva:
```ts
// Esse @ é um decorator, tem como obj, evitar herança com composição
@Directive({
    seletor: '[appRed]'
})
export class RedDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.color = '#e35e6b';
    }
}
```
- No HTML, essa mudança funciona da seguinte forma: 
```html
<i class="matrial-icons v-middle"> favorite</i>
```

```html
<i class="material-icons v-middle" appRed> favorite </i>
```

### Structural Directives
- Altera o layout (estrutura da página HTML) adicionando e removendo elementos da DOM. A difereça da diretiva de atributo para estrutural é o * na frente.Ex: 
```html
<form *ngIf="product" class="product-form"></form>
<!-- nesse caso, vai exibir ou não o produto estiver se definido -->
```

```html
<ul>
    <li *ngFor="let product of products">
        {{product.name}}
    </li>
</ul>
<!-- a partir do li, ele entra no laço for e se tiver 10 produtos, ele vai mostrar o nome dos 10 produtos. Vai adicionar novos elementos na DOM de acordo com a lista de produtos -->
```
### Property Binding
- Binding que dizer "ligação". É a comunicação entre o TS e o HTML. No HTML, para acessar um elemento no TS, usamos os [] referenciando um atributo. Ex:
```html
<table [dataSource]="products"></table>
```
```ts
@Component {{
    selector: 'app-product-read',
    templateUrl: '...'.
    styleUrls: ['']
}}
    export class ProductReadComponent
    implements OnInit {
        products: Products[];
    }
```
### Event Binding
- Ligar um evento do HTML para um método no TS. Para fazer isso, usamos a sintaxe dos parênteses (). Ex:
```html
<button mat-raised-button
(click)="createProduct()"
color="primary">Salvar</button>
```
```ts
@Component {{
    selector: 'app-product-read',
    templateUrl: '...'.
    styleUrls: ['']
}}
export class ProductReadComponent 
    implements OnInit {
        createProduct(): void{
            // ....
        }
    }
```
### One Way Data Binding
- Alteração do TS para o HTML, nesta direção TS -> HTML, ou seja, se aterei uma variável nome no ts, automaticamente será alterado no HTML. Ex:
```html
<input [value]="nome"></input>
```
```ts
nome: string;
```
### Two Way Data Binding
- Alteração do HTML e TS será nas duas direções, ou seja, se alterar uma variável nome no ts, automaticamente será alterado no HTML e vice-versa. Ex:
```html
<input [(ngModel)]="nome"></input>
```
```ts
nome: string;
```
## Rotas
- As rotas de Urls, navegação na aplicação. Um exemplo é o menu, qunado clica em um elemento, carrega o componente e vai para outro url, se assim for escrito no TS. Ex: Componente NAV tem HOME PRODUTO USUÁRIO. Quando clica no HOME, será carregado o Router Outlet, o /home sera depositado, que mostrará o Componente Home, e assim por diante.
```html
<a routerLink="/products">Produtos</a>
```
```ts
const routes: Routes = [
    {
        path:"products",
        component: ProductCrudComponent
    }, 
    {
        path: "products/criate",
        component: ProductCrudComponent
    }
]
```

```html
<mat-sedenav-content>
    <router-outlet></router-outlet>
</mat-sedenav-content>
```

## Pipes
- São processamentos feitos em variáveis, ou seja, irá interpretar o valor que está dentro dos `{{ }}`. Ex: 

```HTML
<p>
O vencimento é 
{{produto.vencimento | date }}
</p>
```

> OBS: O `|` tem a função de alterar o formato, ou seja, a formatação. No exemplo acima, o valor recebido, poderia vir na forma 09062001, e o `| data` transforma em 09/06/2001. O mesmo pode acontecer com o `| currency: 'BRL'` . É possível ter uma cadeia de `|`. Ex:

```html
O vencimento é {{produto.vencimento | date:'fullDate' | uppercase}}
```

## Observables
- A partir do JS, começamos a trabalhar com o conceito de reatividade para que tenhamos a oportunidade de passar uma função com o parâmetro para outra função, e essas funções são chamas de `callbacks`. Com o uso do `callbacks` surgiu o `Promises`, que tem a capacidade de encadear várias chamadas, um dos problemas é que o `Promises` é executada apenas uma vez. Com a evolução dos `callbacks` e `Promises` veio o `Observables`, que é reusável, consegue lidar com o stream de dados, ex: votação, e os operadores, que são funções que já existem nos `Observables` que ajudam a processar os dados que está observando. Ex: 
```ts

criarNoBackend(produto: Produto): Obervable<Produto>{
    return this.http.post<Produto>(this.url, produto);
}

criarProduto(): void {
    this.criarNoBackend(this.produto).subscribe( () => {
        this.exibirMensagem("Salvo");
    });
}
```
> O Observable é o subject, quando a função criarNoBackend acontecer, ele vai retornar  a mensagem "salvo"
### Programação Reativa
- Reativo é o contrário de proativo. Precisa acontecer um evento externo para o código ser executado. Ex:
```ts
import { Observable } from "rxjs";
```
> OBS: o padrão de projeto mais utilizado na WEB é o Observer
### Padrão Observer
- Padrão orientado a Evento. Existe um Subject, que é quem tem a capacidade de monitorar e detectar quando o evento acontece. Existe também os Observer, que são os códigos que estão interessadas no evento, cada Observer precisa ser registrado no Subject. O observador está interessado em saber sobre o evento que o Subject monitora.

## Services

- Services são classes que têm como principal objetivo tanto organizar quanto compartilhar códigos, métodos e dados (membros de uma classe) entre componentes, diretivas, etc... O objetivo é viabilizar a comunição entre componentes.
- Um exemplo claro é: existem 2 componentes com lógicas visuais diferentes Y, mas também tem lógicas iguais X. O service vai "guardar" essa lógica X e compartilhar entre os componentes. 

> OBS: Para estar dentro do Service, não necessáriamente precisa ser um conjuto de lógicas iguais usadas em vários componentes. O objetivo é guardar um conjunto coerente de responsabilidades, independente se é usado um mais de um componente. Ex: adicionar, excluir, editar um produto. Todas essas funções podem estar dentro de um Service.

- Para criar um Service, o comando é `ng g s services/local`.
- A definição de uma classe que representa um Service: 
```ts
@Injectable({
    providedIn: "root",
})
export class ProductService {
    //...
}
```
- O `@Injectable` é um decorator, que permite que essa classe seja injetável em outras classes.
- O `providedIn` está dizendo que existe um injetor que é o `root` (AppModule), ou seja, é um injetor raiz da aplicação. Isso significa que vai existir apenas uma instância do `ProductService` em toda aplicação. Sempre que for injetado, o angular vai devolver a mesma istância.

### Injeção de Dependência
- É um padão no qual a classe recebe as dependências de uma fonte externa ao invés de criar por conta própria.
- Os Services são **singletons** dentro do escopo de um **injector**