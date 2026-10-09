
const nomeLoja = "Iniba";
let produtos = [    
    {
        nome: "Minecraft",
        categoria: "Aventura",
        preco: 89.99,
        quantidade: 80,
        vendidos: 1000
    },
    {
        nome: "Elden Ring",
        categoria: "Soulsborne",
        preco: 299.99,
        quantidade: 30,
        vendidos: 50
    },
    {
        nome: "Dark Souls II",
        categoria: "Soulsborne",
        preco: 79.99,
        quantidade: 4,
        vendidos: 10
    },
    {
        nome: "Undertale",
        categoria: "Aventura",
        preco: 30.00,
        quantidade: 3,
        vendidos: 500
    },
    {
        nome: "Outlast",
        categoria: "Terror",
        preco: 10.00,
        quantidade: 76,
        vendidos: 33
    },
    {
        nome: "Sifu",
        categoria: "Aventura",
        preco: 39.99,
        quantidade: 10,
        vendidos: 7
    },
];

// ===== 2. FUNÇÕES =====
//--- Tarefa 2: Lista todo o catálogo de produtos ---
const listarProdutos = (lista) => {
    for (let i = 0; i < produtos.length; i++) {
        const produto = lista[i];
        console.log(`${i+1}. ${produto.nome} | ${produto.categoria} | R$ ${produto.preco} | ${produto.quantidade} un. | ${produto.vendidos} vendidos`);
    }
}

//--- Tarefa 3: Cadastra um produto, adiciona na lista fornecida e retorna a quantidade de produtos ---
const cadastrarProduto = (lista, nome, cat, preco, qtd) => {
    lista.push(
        {
            nome: formatarNome(nome),
            categoria: cat,
            preco: preco,
            quantidade: qtd,
            vendidos: 0
        }
    );

    return `Produto cadastrado! Agora a loja tem ${lista.length} produtos.`;
}

//--- Tarefa 4: Calcula o valor total do estoque
const calcularValorEstoque = (lista) => {
    let total = 0;

    for (let i = 0; i < lista.length; i++) {
        const produto = lista[i];
        total += produto.preco * produto.quantidade;
    } 

    return total.toFixed(2);
}

//--- Tarefa 5: Procura o primeiro produto com o nome igual ao fornecido e o retorna ---
const buscarProduto = (lista, nome) => {
    const produtoEncontrado = lista.find((p) => p.nome.toLowerCase() === nome.toLowerCase());
    if (produtoEncontrado) return produtoEncontrado;
    return "Produto não encontrado";
}

//--- Tarefa 6: Retorna um novo array onde os itens tem a quantidade menor que o minimo ---
const produtosEmFalta = (lista, minimo) => {
    let produtosEmFalta = [];
    for (let i = 0; i < lista.length; i++) {
        const produto = lista[i];
        if (produto.quantidade < minimo) produtosEmFalta.push(produto); 
    }

    return produtosEmFalta.length;
}   

//--- Tarefa 7: Altera o preço dos produtos da categoria informada aplicando o desconto informado ---
const aplicarDesconto = (lista, categoria, percentual) => {
    //novo preço = preço - (preço × percentual ÷ 100)
    let totalAlterados = 0;
    let ultimoProdutoAlterado;
    let novoPreco;
    for (let i = 0; i < lista.length; i++) {
        const produto = lista[i];
        const preco = produto.preco;
        if (produto.categoria.toLowerCase() === categoria.toLowerCase()) {
            novoPreco = preco - (preco * percentual / 100);
            produto.preco = novoPreco;
            totalAlterados++;
            ultimoProdutoAlterado = produto;
        }
    }

    return `${totalAlterados} produtos receberam desconto.\nNovo preço de ${ultimoProdutoAlterado.nome}: R$ ${novoPreco.toFixed(2)}`;
}

//--- Tarefa 8: Registra a venda de um produto, alterando a quantidade em estoque e de vendidos ---
const registrarVenda = (lista, nome, quantidade) => {
    let existe, qtdSuficiente;
    const produto = buscarProduto(lista, nome);
    
    produto === "Produto não encontrado" ? existe = false : existe = true;
    produto.quantidade <= 0 ? qtdSuficiente = false : qtdSuficiente = true;
    
    if (existe && qtdSuficiente) {
        produto.quantidade -= quantidade;
        produto.vendidos += quantidade;
        return true;
    } else {
        return false;
    }
}

//--- Tarefa 9: Retorna o texto sem espaços nas pontas, com a primeira letra maiúscula e o restante em minúsculas ---
const formatarNome = (texto) => {
    let textoFormatado;

    textoFormatado = texto.trim();
    textoFormatado = textoFormatado.toLowerCase();
    textoFormatado = textoFormatado.replace(textoFormatado[0], textoFormatado[0].toUpperCase());

    return textoFormatado;
}

//--- Tarefa 10.1: Retorna o array convertido em texto JSON ---
const converterParaJSON = (lista) => {
    return JSON.stringify(lista);
}

//--- Tarefa 10.2: Retorna o JSON convertido em array ---
const lerJSON = (texto) => {
    return JSON.parse(texto);
}

//--- Tarefa 11: Gera um relatório da loja ---
const gerarRelatorio = (nome, lista) => {
    console.log(`===== RELATÓRIO: ${nome} =====`);
    console.log(`Produtos cadastrados: ${lista.length}`);
    console.log(`Valor total em estoque: ${calcularValorEstoque(lista)}`);
    console.log(`Produtos com estoque baixo: ${produtosEmFalta(lista, 5)}`);
    for (let i = 0; i < lista.length; i++) {
        const produto = lista[i];
        if (produto.quantidade < 5) console.log(`- ${produto.nome} (${produto.quantidade} un.)`);
    }
}

// ===== 3. PROGRAMA PRINCIPAL =====

console.log("--- Tarefa 2: listar ---");
listarProdutos(produtos);
console.log("--- Tarefa 3: cadastrar ---");
console.log(cadastrarProduto(produtos, "Bloodborne", "Soulsborne", 199.99, 30));
console.log("--- Tarefa 4: valor do estoque ---");
console.log(`Valor do estoque: ${calcularValorEstoque(produtos)}`);
console.log("--- Tarefa 5: buscar ---");
console.log(`Encontrado: ${buscarProduto(produtos, "minecraft").nome} - R$ ${buscarProduto(produtos, "minecraft").preco}`);
console.log(buscarProduto(produtos, "pou 2"));
console.log("--- Tarefa 6: em falta ---");
console.log(`Produtos com menos de 5 unidades: ${produtosEmFalta(produtos, 5)}`);
console.log("--- Tarefa 7: desconto ---");
console.log(aplicarDesconto(produtos, "Aventura", 10));
console.log("--- Tarefa 8: registrar venda ---");
const nome = "Minecraft";
const nomeInvalido = "Astro Bot"
const quantidade = 10;
const produto = buscarProduto(produtos, nome);
registrarVenda(produtos, nome, quantidade) ? console.log(`Venda realizada! ${produto.nome}: ${produto.quantidade} un. em estoque, ${quantidade} vendidos.`) : console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
registrarVenda(produtos, nomeInvalido, quantidade) ? console.log(`Venda realizada! ${produto.nome}: ${produto.quantidade} un. em estoque, ${quantidade} vendidos.`) : console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
console.log("--- Tarefa 9: formatar nome ---");
console.log(formatarNome("blOoDBorNe"));
console.log("--- Tarefa 10: JSON ---");
const arrayParaJSON = converterParaJSON(produtos);
console.log(typeof(arrayParaJSON));
const JSONParaArray = lerJSON(arrayParaJSON);
console.log(`Itens recuperados: ${JSONParaArray.length} | Primeiro: ${JSONParaArray[0].nome}`);
console.log("--- Tarefa 11: relatório ---");
gerarRelatorio('Iniba', produtos);