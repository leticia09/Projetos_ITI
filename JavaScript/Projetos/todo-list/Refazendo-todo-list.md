# Refazer Todo-List
## Etapas:
### 1° parte
- Pegar icones;
- Criar o HTML e CSS do primeiro input;
- No input, criar botão com os icones.
- Fazer funcionar:
    - Declarar variáveis;
    - Criar os eventos com `variavel.addEventLitener('click', function)`;
    - Abrir a `function` com o parâmetro `event`;
    - Declarar `event.preventDefault();`
    - Criar uma div e colocar classe com `var.classList.add("")`
    - Criar li, receber o valor do input com `varInput.innerText = varInput.value` , colocar classe e adicionar como filho da div usando `div.appendChild(nome-li)`;
    - Criar os botões de mark e check para cada linha da lista. Declarar var para e criar o botão com `document.createElement`. Colocar o icone no botão com o `var.innerHTML = '<i icone </i>'`. Adicionar classe. Adicionar como filho da div. No caso do trash, Limpar o input e  adicionar como filho o todoList;
### 2° parte
- Fazer funcionar os botões delete/check:
    - Criar `function` com o parâmetro (e);
    - Declarar `var = e.target`;
    - declarar um IF com o var declarado no `var.e.target.classLit[0]=== 'nome do botão'`;
    - Dentro do IF criar o `const var = var.parentElemet`, adicionar uma classe, criar um evento com o css `transitionend` e dentro do evento uma function com o `remove()`;
    - Criar outro IF para o botão completed, criar o `const var = var.parentElemet` e `todo.classList.toggle('completed');`
### 3° parte
- Criar os filtros dentro de uma div no HTML com as tags
`select` e `option`.
- Fazer funcionar:
    - declarar function com o parametro (e);
    - delarar `const = var.childNodes`;
    - Criar uma function dentro do `todos.forEach`;
    - Dentro da function usar o switch com `e.target.value` para pegar o nome, e usar o display flex para cada `option` e fazer aparecer só o que foi selecionado;
    - Dentro do completed e trash usar o IF; Não esquecer do `break`;