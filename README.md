# Minha Loja - Iniba

Aluno(a): Paulo Henrique Pereira de Freitas - 202612010012

Como executar: node loja.js

Funcionalidades:
  //--- Tarefa 2: Lista todo o catálogo de produtos ---
  listarProdutos(lista)

  //--- Tarefa 3: Cadastra um produto, adiciona na lista fornecida e retorna a quantidade de produtos ---
  cadastrarProduto(lista, nome, categoria, preco, qtd)

  //--- Tarefa 4: Calcula o valor total do estoque
  calcularValorEstoque(lista)

  //--- Tarefa 5: Procura o primeiro produto com o nome igual ao fornecido e o retorna ---
  buscarProduto(lista, nome)

  //--- Tarefa 6: Retorna um novo array onde os itens tem a quantidade menor que o minimo ---
  produtosEmFalta(lista, minimo)

  //--- Tarefa 7: Altera o preço dos produtos da categoria informada aplicando o desconto informado ---
  aplicarDesconto(lista, categoria, percentual)

  //--- Tarefa 8: Registra a venda de um produto, alterando a quantidade em estoque e de vendidos ---
  registrarVenda(lista, nome, quantidade)

  //--- Tarefa 9: Retorna o texto sem espaços nas pontas, com a primeira letra maiúscula e o restante em minúsculas ---
  formatarNome(texto)

  //--- Tarefa 10.1: Retorna o array convertido em texto JSON ---
  converterParaJSON(lista)
  
  //--- Tarefa 10.2: Retorna o JSON convertido em array ---
  lerJSON(texto)

  //--- Tarefa 11: Gera um relatório da loja ---
  gerarRelatorio(nome, lista)
