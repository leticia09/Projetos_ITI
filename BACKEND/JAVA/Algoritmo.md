# Algoritmo 
- Sequência finita de instruções para se desenvilver um problema

# Automação
- Utilizar máquina para executar o procedimento

# IDE
- Ambiente integrado de Desenvolvimento 
- Para o JAVA, utilizamos o Eclipse e NetBeans;
- Funcionalidades: 
    - Edição do código;
    - Depuração e testes;
    - Construção do produto final;
    - Sugestão de modelos
    - Auxiliar em várias tarefas do seu projeto; 

# Compilação e interpretação Código fonte e Objeto Máquina virtual
- Código fonte: escrito pelo programador, em linguagem de programação; 
- Compilação : gera através do código fonte, o código objeto; 
- O JAVA utiliza a abordagem híbrida, ou seja, o código fonte -> compilador precompilação (Análise léxica e sintática) = Bytecode -> máquina virtual interpretação (geração de código) = execução;

# Utilização básica do eclipse
- workspace
- Layout: window -> perspective -> open perspective -> java
- zerar layout: window -> perspective -> reset perspective
- mostrar aba console: window -> show view -> console
- Criar projeto: file -> new -> java project

### Criar classe
- botão direito na masta "src" -> new -> class
- Package: deixe em branco
- Nome da classe: Main com o M
- Marque a opção: public static void main (string[]) args)

### Para escrever em JAVA conteúdo de uma variável com ponto flutuante
- `Sytem.out.println(x);` ln quebra linha
- `Sytem.out.printf("%.2f%n", x);` se o número quebrado for muito grande, ele mostra só duas casa. o F é de formatado. O %n é a quebra da linha,poderia ser o \n. 
- Para concatenar resultados, utilizamos:
`System.out.println("resultado = " + x + " metros);`

- Para concatenar com o printf: 
`System.out.printf("Resultado = %.2f metros\n", x)`

- Para entrar com dados no JAVA

```java
import java.util.Scanner; 

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in); 
		
		String x;
		x = sc.next();
		System.out.println("Você digitou: " + x);
		
		sc.close();
	}

}
```

- Para ler um inteiro `x = sc.nextInt();`
- Para ler um double `x = sc.nextdouble();`
- Para ler um caracter `x = sc.next().charAt(0);` esse charAt(0) pega o primero elemento da string;
- Para ler um texto até a quebra de linha usamos: 

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		String s1, s2, s3;

		s1 = sc.nextLine();
		s2 = sc.nextLine();
		s3 = sc.nextLine();

		System.out.println("Dados digitados: ");
		
		System.out.println(s1);
		System.out.println(s2);
		System.out.println(s3);
		sc.close();
	}

}

```
> OBS: O next lê apenas uma palavra, pra ler a palavra inteira, é necessário usar o nextline.

# Funções matemáticas em JAVA
- A = Math.sqrt(x); A recebe raiz quadrada de x
- A = Math.pow(x, y); A recebe x^y
- A = Math.abs(x); A recebe valor absoluto de x

# Operadores de atribuição cumulativa

- a += b; -> a = a + b;
- a -= b; -> a = a - b;
- a *= b; -> a = a * b;
- a /= b; -> a = a / b;
- a %= b; -> a = a % b;

# Estrutura Switch-case

- Quando se tem várias opções de fluxo a serem tratadas com base no valor de uma variável, ou invés de várias estruturas if-else encadeadas.
ex. 8

# Expressão condicional ternária 

- Estrutura opcional ao if-else quando se deseja decidir um valor com base numa comndição;
- Sintaxe: `(condição) ? valor_se_verdadeiro : valor_se_falso`

# Escopo de uma variável
- É a região do programa onde a variável é válida, ou seja, onde ela pode ser referênciada.
- Uma variável não pode ser usada se não for iniciada;
- Todas as  variáveis inicializadas dentro de qualquer estrutura, seja if, swicth, while, só será válida até o fim da execução da estrutura.

# Como utilizar o Debug no eclipse (Execução passo a passo)
- Para marcar a linha do brackpoint: Run-> Toggle Breakpoint
- Para iniciar o debug: Botão direito na classe-> Debug as -> Java Application
- Para executar uma linha: F6;

# Do while
- Uma estrutura pouco utilizada, mas muito eficiente em alguns casos pois ela roda os comandos pelo menos 1 vez, para depois testar a condição.

# Restrições para nomes de variáveis
- Não pode começar com dígito;
- Não usar acentos, ~;
- Não pode ter espaços;

- Para nome de atributos, pacotes, métodos, variáveis e parâmetros usamos o Camel Case: lastName;
- Para classes usamos o Pascal Case: ProductService;

# Operadores Bitwise
- & E bit a bit;
- | OU bit a bit; 
- ^ OU-exclusivo bit a bit; 
- Usado para comparar bit a bit de um número binário.

# Funções String
- Formatar: toLowerCase(), toUpperCase(), trim() - remover espaços;
- Recortar: substring(inicio), substring(inicio,fim);
- Substituir: Replace(char, char), Replace(string, string);
- Buscar: indexOf, LastIndexOf;
- str.Split("") - recortar string com base no separador, e guarda tudo num vetor. Ex: leticia alves de azevedo
vetct

# Funções 
- Representam um processamento que possui um significado;
- Principais vantagens: modularização, reaproveitamento;
- Dados de entrada e saída
- Em orientação a objetos, funções em classes recebem o nome de "métodos"

# Orientação a objetos
## Classe
- É um tipo estruturado que pode conter membros (atributos, dados/campos, métodos, funções/operações);
- A classe também pode prover muitos outros recursos, tais como: 
	- Construtores;
	- Sobrecarga;
	- Encapsulamento;
	- Herança;
	- Polimorfirsmo.
- Instanciação: Alocação dinâmica de memória

## Métodos
- O método pode ser usado dentro de uma classe. É uma função que será chamada dentro de outra classe, ela pode fazer um cálculo específico, ou algo do tipo.
- Public significa que o atributo ou método pode ser usado em outros arquivos;

# Objetos e toString
- Toda classe JAVA é uma subclasse da classe Object;
- Object possui os seguintes métodos: 
	- getClass: retorna o tipo do objeto;
	- equals: compara se o objeto é igual a outro;
	- hashCode: retorna um código hash do objeto;
	- toString: converte o objeto para string


# Membros estáticos
- Também chamados de classes, são membros que fazem sentido independentemente de objetos. Não precisam de objeto para serem chamados. São chamados a partir do próprio nome da classe.
- Aplicações: 
	- Classes utilitárias
	- Declaração de constantes

> OBS: uma classe que possui somente membros estáticos, pode ser uma classe estática também. Esta classe não poderá ser instanciada. 
> O padrão para escrever uma constante é letras maiúsculas. Ex: PI = 3,14
- A declaração de um método estático é `public static final double PI = 3,15`. O `final` quer dizer que é uma constante que não vai mudar.
- O método main por padrão é estático 
- Numa classe estática, não é possível chamar uma função/métodos que não seja estática.
- Quando utilizamos os métodos estáticos, no main não é necessário chamar o objeto e sim a classe. O exemplo está no eclipse "estatico"

# Construtor 
- É uma operação especial da classe, que executa no momento da instanciação do objeto;
- Usos comuns: 
	- iniciar valores dos atributos;
	- permitirr que o objeto receba dados
- Se um construtor customizado não for especificado, a classe disponibiliza o construtor padrão ``product p = new product();`
- É possível especificar mais de um construtor na mesma classe (sobrecarga);

# Sobrecarga 
- É um recurso que uma classe possui de oferecer mais de uma operação com o mesmo nome, porém com diferentes listas de parâmetros.

# Encapsulamento
- É um princípio que consiste em esconder detalhes de implementação de uma classe, expondo apenas operações seguras e que mantenham os objetos em um estado consistente.
- Regra de ouro: O objeto deve sempre estar em um estado consistente e a própria classe deve garantir isso.
- Regra geral básica: Um objeto não deve expor nenhum atributo (modificador de acesso private);
- Os atributos devem ser acessados por meio e métodos get e set: 

```java
private String name;
private double price;

public String getName(){
	return name;
}

public void setName(String name){
	this.name = name;
}

public double getPrice(){
	return price;
}

public void setPrice(double price){
	this.price = price;
}

```
> Para gerar automaticamente os getters e setters. 
- botão direito -> source -> generate constructor using fields;
- botão dieito -> source -> generate getters and setters;

# Modificadores de acesso
- Private: membro só pode ser acessado na própria classe;
- (nada): membro só pode ser acessado nas classes do mesmo pacote; 
- Protected: membro só pode ser acessado do mesmo pacote, bem como em subclasses de pacotes diferentes;
- Public: membro é acessado por todas classes (a menos que ele resida em um módulo diferente que não exporte o pacote onde ele está);

# Classes são tipos referência
- variaveis cujo tipo são classes não devem ser entendidas como caixas, mas sim tentáculos (ponteiros) para caixas;
- Alocação dinâmica de memória;
- Valor NULL tipos referência aceitam o valor "null", que indica que a variável aponta pra ninguém;

# Tipos primitivos que são tipos valor
- Em Java, tipo primitivos são tipos valor. Tipos valor são caixas e não ponteiros;
- Ex: `double x, y;`
- Tipos: 
	- booleam;
	- char;
	- byte;
	- short;
	- int;
	- long;
	- float;
	- double;

# Desalocação de memória
- Garbage collector: é um processo que automatiza o gerrenciamento de memória de um programa em execução. Monitora os objetos alocados dinamicamente pelo programa (no heap), desalocando aqueles que não estão mais sendo utilizados.

# Vetor
- Arrays: 
	- homogêmea;
	- ordenada, elementos acessados por meio de posições;
	- alocada de uma vez. Um bloco contínuo de memória;

# Boxing
- Processo de conversão de um objeto tipo valor para um obejto tipo referência compatível;
- `Object obj = x;`
- O Unboxing é o processo contrário, ou seja, de um objeto tiipo referência para um objerto tipo valor:
- `int y = (int) obj;`

# Wrapper classes
- São classes equivalentes aos tipos primitivos; 
- Boxing e unboxin é natural na linguagem;
- Uso comum: campos de entidades em sistemas de informação. Pois tipos de referência (classes) aceitam valor null e usufruem dos recussos OO.

# Laço for each
- Sintaxe opcional e simplificada para percorrer coleções; 
- Para cada objeto (apelido) contido no vetor vetor faça isso:
- `for(tipo apelido : coleção){comandos}`

# Listas 
- É uma estrutura de dados homogênea, ordenada, inicia vazia, cada elemento ocupa um nó; 
- Tipo: list. Classes que implementam: ArrayList, LinkedList, ..
- Desvantagens: Acesso sequencial aos elementos;
- Vantagem: Facilidade para se realizar inserções e deleções;
- Comandos importantes: 
	- Tamanho da lista: size();
	- Inserir elementos na lista: add(obj), add(int, obj);
	- Remover elementos na lista: remove(obj), remove(int), removeIf(Predicate);
	- Encontrar posição de elemento: indexOf(obj), lastIndexOf(obj);
	- Filtrar lista com base em predicado: `list<Integer> result = list.stream().filter(x -> x>4). collect(Collectors.toList());`; 
	- Econtrar primeira ocorrência com base em predicado: `Integer result = list.stream().filter(x -> x>4).findFirst().orElse(null);`;

# Matrizes 

-  Em programação matriz é um arranjo (array) bidimensional;
- A vantagem é o acesso imediato aos elementos pela sua posição;
- A desvantagem é que o tamanho é fixo e é mais dificil realizar inserções e deleções. 


# Date

- Representa um instante;
- Pacote java.util
- Um objeto DATE internamente armazena:
	- O número de milissegundos desde a meia noite do dia 1 de janeiro de 1970 GMT(UTC); 
- Define formatos para conversão entre Date e String
	- Classe: SimpleDateFormat;
	- dd/MM/yyyy; 
	- HH:mm:ss;

- Padrão ISO 8601 e classe instant
	- formato: yyyy-MM-ddTHH:mm:ssZ = 2021/01/18T11:20:09Z;
	- `Date y3 = Date.from(instant.parse("2021/01/18T11:20:09Z"));`

# Manipulando uma data com o Calendar 
- Somando uma unidade de tempo
```java
	SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

		Date d = Date.from(Instant.parse("2018-06-25T15:40:07z")); 

		System.out.println(sdf.format(d)); 

		Calendar cal = Calendar.getInstance();
		cal.setTime(d);
		cal.add(Calendar.HOUR_OF_DAY, 4);
		d = cal.getTime();

		System.out.println(sdf.format(d));

```

# Obtendo uma unidade de tempo
```java

	SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

		Date d = Date.from(Instant.parse("2018-06-25T15:40:07z")); 

		System.out.println(sdf.format(d)); 

		Calendar cal = Calendar.getInstance();
		cal.setTime(d);
		int minutes = cal.get(Calendar.MINUTE);
		int month = 1 + cal.get(Calendar.MONTH);

		System.out.println("Minutos: " + minutes);
		System.out.println("Mês: " + month);

```

# Enumeração

- É um tipo especial que serve para especificar de forma literal um conjunto de constantes relacionadas;
- Palavra chave em Java: enum;
- As vantagens são melhor semântica, código mais legível e auxiliado pelo compilador. 

- Conversão de String para enum: 
	- `OrderStatus os1 = OrderStatus.DELEVERED;`
	- `OrderStatus os2 = OrderStatus.valueOf("DELEVERED");`

# Design 
- Em um sistema orientado a objetos, de modo geral "tudo" é objeto;
- Por questões de design tais como organização, flexibilidade, reuso, delegação, etc., há várias categorias de classes:
	- Views (telas);
	- Controllers;
	- Entities;
	- Services;
	- Repositories.

# Composição 
- É o tipo de associação que permite que um objeto contenha outro;
- Relação "tem-um" ou "tem vários";
- As vantagens são organização, coesão, flexibilidade, reuso; 

# Herança
- É um tipo de assiciação quer permite que uma classe herde todos dados e comportamentos de outra classe;
- As vantagens são: Reuso e polimorfismo; 
- Sintaxe: `class A extends B`; 
- A herança é uma associação entre classes e não entre objetos

### Modificador de acesso protected
- Em caso de uma variável dentro do objeto não possa ser public, mas é necessário usa-lá em outra classe, usamos o `protected`. 

### Upcasting e Downcasting
- Upcasting é o casting da subclasse para a superclasse. Uso comum é o polimorfismo; 
- Downcasting é o casting da superclasse para a subclasse. Palavra instanceof. Uso comum em métodos que recebem parâmetros genéricos; 

# Sobreposição, palavra super, anotação @Override
- Sobreposição é uma implementação de um método (função) de uma superclasse na subclasse;
- É fortemente recomendável usar a anotação @Override em um método sobrescrito pois facilita a leitura e compreensão código, é uma boa prática pois avisa ao compilador;

- Palavra `super()` é possível chamar a implementação da superclasse usando a palavra super;

# Classes e métodos final
- Palavra chave `final` aplicada a: 
	- Classe: evita que a classe seja herdada `public final class contaPoupanca`;
	- Método: evita que o método sob seja sobreposto;
- A utilização da palavra `final`. Dependendo da regra do negócio, às vezes é desejável garantir que uma classe não seja herdada, ou que um método não seja sobreposto. Geralmente convem acrescentar `final` em métodos sobrepostos, pois sobreposições múltiplas podem ser uma porta de entrada para inconsistências. A performance, atributos de uma classe final são analisados de forma mais rápida em tempo de execução. Ex: String. 
	

# Polimorfismo 
- É o recurso que permite que várias variáveis de um mesmo tipo genérico possam apontar objetos de tipos específicos diferentes, tendo assim comportamentos diferentes conforme cada tipo específico. 
- É importante entender que a associação do tipo específico com o tipo genérico é feita em tempo de execução; 
- O compilador não sabe para qual tipo específico a chamada do método `saque()` está sendo feita (ele só sabe que são duas variáveis Conta)

# Classes abstratas
- São classes que não podem ser instanciadas; 
- É uma forma de garantir herança total: Somente subclasses não abstratas podem ser instanciadas, mas nunca a superclasse abstrata;
- Instanciar, quer dizer, atribuir valores para a classe determinada; 
- Obs: na UML a notação da classe abstrata é em itálico; 

# Métodos abstratos 
- Não possuem implementação; 
- Precisam ser abstratos quando a classe é genérica demais para conter implementação. Se uma classe possuir pelo menos um método abstrato, então essa classe também é abstrata;
- Obs: na UML a notação da classe abstrata é em itálico;