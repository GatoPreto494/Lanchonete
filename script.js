// Dados dos itens do menu e adicionais
const itemsData = {
    lanches: [
        { name: "Queijo Quente Salada", price: 20.00, description: "Muçarela, alface, tomate, maionese" },
        { name: "Queijo Quente", price: 19.00, description: "Muçarela, maionese" },
        { name: "Misto Quente", price: 19.00, description: "Muçarela, presunto, maionese" },
        { name: "Bauru", price: 20.00, description: "Muçarela, presunto, alface, tomate, maionese" },
        { name: "Americano", price: 22.00, description: "Muçarela, presunto, ovo, alface, tomate, maionese" },
        { name: "Mistão", price: 23.00, description: "Muçarela, presunto, milho, bacon, maionese" },
        { name: "X-Salada", price: 22.00, description: "Hambúrguer, muçarela, alface, tomate, maionese" },
        { name: "X-Bacon", price: 26.00, description: "Hambúrguer, bacon, muçarela, alface, tomate, maionese" },
        { name: "X-Burguer", price: 21.00, description: "Hambúrguer, muçarela, maionese" },
        { name: "X-Burguer Duplo", price: 30.00, description: "Dois hambúrgueres, muçarela, maionese" },
        { name: "X-Egg", price: 24.00, description: "Hambúrguer, ovo, muçarela, alface, tomate, maionese" },
        { name: "X-Bacon Egg", price: 28.00, description: "Hambúrguer, bacon, ovo, muçarela, alface, tomate, maionese" },
        { name: "X-Bacon Calabresa", price: 28.00, description: "Hambúrguer, calabresa, bacon, muçarela, alface, tomate, maionese" },
        { name: "X-Crock", price: 24.00, description: "Hambúrguer, muçarela, batata palha, alface, tomate, maionese" },
        { name: "Lanche da Casa", price: 29.00, description: "Dois hambúrgueres, calabresa, muçarela, maionese" },
        { name: "X-Calabresa", price: 22.00, description: "Calabresa, muçarela, alface, tomate, maionese" },
        { name: "X-Tudo", price: 35.00, description: "Hambúrguer, bacon, milho, filé de frango, ovo, presunto, muçarela, alface, tomate, maionese" },
        { name: "X-Frango Crock", price: 26.00, description: "Filé de frango, batata palha, muçarela, maionese" },
        { name: "X-Framburguer", price: 32.00, description: "Filé de frango, hambúrguer, muçarela, alface, tomate, maionese" },
        { name: "X-Frango Bacon Egg", price: 28.00, description: "Filé de frango, bacon, ovo, muçarela, alface, tomate, maionese" },
        { name: "X-Frango", price: 23.00, description: "Filé de frango, muçarela, alface, tomate, maionese" },
        { name: "X-Frango Catupiry", price: 30.00, description: "Filé de frango, catupiry, muçarela, alface, tomate, maionese" },
        { name: "X-Frango Cheddar", price: 30.00, description: "Filé de frango, cheddar, muçarela, alface, tomate, maionese" },
        { name: "X-Frango Catupiry Milho", price: 32.00, description: "Filé de frango, catupiry, milho, muçarela, alface, tomate, maionese" },
        { name: "X-Frango Cheddar Milho", price: 32.00, description: "Filé de frango, cheddar, milho, muçarela" },
        { name: "X-Frango Egg", price: 25.00, description: "Filé de frango, ovo, muçarela, alface, tomate, maionese" },
        { name: "X-Frango Bacon", price: 25.00, description: "Filé de frango, bacon, muçarela, alface, tomate, maionese" }
    ],
    porcoes: [
        { name: "Batata (Inteira)", price: 28.00, description: "Porção de batatas fritas crocantes." },
        { name: "Batata 1/2 Porção", price: 17.00, description: "Porção de batatas fritas crocantes." },
        { name: "Batata Queijo (Inteira)", price: 35.00, description: "Porção de batatas com queijo derretido." },
        { name: "Batata Queijo (1/2 Porção)", price: 25.00, description: "Porção de batatas com queijo derretido." },
        { name: "Batata Bacon (Inteira)", price: 35.00, description: "Porção de batatas com bacon crocante." },
        { name: "Batata Bacon (1/2 Porção)", price: 25.00, description: "Porção de batatas com bacon crocante." },
        { name: "Batata Queijo e Bacon (Inteira)", price: 40.00, description: "Porção de batatas com queijo derretido e bacon crocante." },
        { name: "Batata Queijo e Bacon (1/2 Porção)", price: 30.00, description: "Porção de batatas com queijo derretido e bacon crocante." }
    ],
    bebidas: [
        { name: "Coca-Cola 2L", price: 17.00, description: "Coca-Cola 2L para compartilhar com os amigos." },
        { name: "Coca-Cola lata 350 mL", price: 6.00, description: "Coca-Cola lata para um lanche rápido." }
    ],
    adicionais: [
        { name: "Hamburguer", price: 9.00, description: "Quer um hambúrguer extra? Acrescente ao seu lanche!" },
        { name: "Bacon", price: 7.00, description: "Adicione bacon crocante ao seu lanche!" },
        { name: "Batata Palha", price: 3.00, description: "Dê um toque crocante ao seu lanche!" },
        { name: "Cheddar ou Catupiry", price: 7.00, description: "Escolha entre cheddar ou catupiry para deixar seu lanche mais cremoso!" },
        { name: "Milho", price: 2.00, description: "Adicione milho ao seu lanche!" },
        { name: "Salada", price: 2.00, description: "Adicione alface e tomate fresquinhos!" },
        { name: "Maionese", price: 3.00, description: "Mais cremosidade para seu lanche!" }
    ]
};

let carrinho = {}; // { "Nome do Item": quantidade }

// Função para formatar IDs de elementos HTML (remove espaços e caracteres especiais)
function formatId(name) {
    return name.replace(/[^a-zA-Z0-9]/g, '');
}

// Função para gerar o HTML dos itens do menu
function generateMenuItems(categoryName) {
    const container = document.getElementById(categoryName);
    container.innerHTML = ''; // Limpa o container antes de adicionar
    itemsData[categoryName].forEach(item => {
        const itemId = formatId(item.name);
        const quantity = carrinho[item.name] || 0; // Pega a quantidade atual do carrinho

        const itemHtml = `
            <div class="item">
                <div class="controls">
                    <button class="btn btn-decrease" onclick="updateQuantity('${item.name}', 'decrease')">-</button>
                    <input type="number" id="${itemId}-quantity" value="${quantity}" readonly>
                    <button class="btn btn-increase" onclick="updateQuantity('${item.name}', 'increase')">+</button>
                </div>
                <div class="text-content">
                    <span>${item.name} - R$${item.price.toFixed(2)}</span>
                    <p class="description">${item.description}</p>
                </div>
            </div>
        `;
        container.innerHTML += itemHtml;
    });
}

// Função para gerar o HTML dos itens adicionais no pop-up
function generateAdditionalItems() {
    const container = document.getElementById('adicionais-list');
    container.innerHTML = '';
    itemsData.adicionais.forEach(item => {
        const itemId = formatId(item.name);
        // Os adicionais têm seu próprio controle de quantidade, não dependem do carrinho principal inicialmente
        const quantity = 0; // Começa com 0 no pop-up de adicionais

        const itemHtml = `
            <div class="item">
                <div class="controls">
                    <button class="btn btn-decrease" onclick="updateAdditionalQuantity('${item.name}', 'decrease')">-</button>
                    <input type="number" id="${itemId}-additional-quantity" value="${quantity}" readonly>
                    <button class="btn btn-increase" onclick="updateAdditionalQuantity('${item.name}', 'increase')">+</button>
                </div>
                <div class="text-content">
                    <span>${item.name} (+R$${item.price.toFixed(2)})</span>
                    <p class="description">${item.description}</p>
                </div>
            </div>
        `;
        container.innerHTML += itemHtml;
    });
}

// Função para atualizar a quantidade de um item do menu
function updateQuantity(itemName, action) {
    const itemId = formatId(itemName);
    const quantityInput = document.getElementById(`${itemId}-quantity`);
    let currentQuantity = parseInt(quantityInput.value);

    if (action === 'increase') {
        currentQuantity++;
    } else if (action === 'decrease' && currentQuantity > 0) {
        currentQuantity--;
    }
    quantityInput.value = currentQuantity;
    carrinho[itemName] = currentQuantity;

    // Remove do carrinho se a quantidade for zero ou menor
    if (carrinho[itemName] <= 0) {
        delete carrinho[itemName];
    }
    atualizarContadorCarrinho();
    toggleConfirmOrderButton();
}

// Função para atualizar a quantidade de um item adicional no pop-up
function updateAdditionalQuantity(itemName, action) {
    const itemId = formatId(itemName);
    const quantityInput = document.getElementById(`${itemId}-additional-quantity`);
    let currentQuantity = parseInt(quantityInput.value);

    if (action === 'increase') {
        currentQuantity++;
    } else if (action === 'decrease' && currentQuantity > 0) {
        currentQuantity--;
    }
    quantityInput.value = currentQuantity;
}

// Função para alternar entre as categorias de menu
function showMenu(menu) {
    const allMenus = document.querySelectorAll('.menu-items');
    allMenus.forEach(menuItem => menuItem.classList.remove('active'));

    const selectedMenu = document.getElementById(menu);
    selectedMenu.classList.add('active');

    // Atualiza o estado dos botões de aba
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    tabButtons.forEach(button => {
        if (button.onclick.toString().includes(`showMenu('${menu}')`)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Reseta a rolagem do container principal
    document.querySelector('.menu').scrollTop = 0;
}

// Função para calcular o total do pedido (itens principais + adicionais + taxa de entrega)
function calcularTotalPedido() {
    let subtotal = 0;

    // Calcula total dos itens do carrinho principal
    for (const itemName in carrinho) {
        if (carrinho.hasOwnProperty(itemName) && carrinho[itemName] > 0) {
            // Encontra o item em qualquer categoria
            let item = null;
            for (const category in itemsData) {
                if (Array.isArray(itemsData[category])) { // Garante que é um array de itens
                    item = itemsData[category].find(i => i.name === itemName);
                    if (item) break; // Sai assim que encontrar
                }
            }
            if (item) {
                subtotal += carrinho[itemName] * item.price;
            }
        }
    }

    // Calcula total dos adicionais
    itemsData.adicionais.forEach(extra => {
        const itemId = formatId(extra.name);
        const quantityInput = document.getElementById(`${itemId}-additional-quantity`);
        if (quantityInput) {
            const quantity = parseInt(quantityInput.value) || 0;
            subtotal += quantity * extra.price;
        }
    });

    const taxaEntrega = parseFloat(sessionStorage.getItem("taxaEntrega")) || 0;
    return subtotal + taxaEntrega;
}

// Função para atualizar o resumo do pedido no pop-up de confirmação
function atualizarResumoPedido() {
    const resumoItensDiv = document.getElementById("itens-pedido");
    const extrasPedidoDiv = document.getElementById("extras-pedido");
    const observacaoPedidoDiv = document.getElementById("observacao-pedido");
    const trocoPedidoDiv = document.getElementById("troco-pedido");
    const totalPedidoSpan = document.getElementById("total-pedido");
    const taxaEntregaElement = document.getElementById("taxa-entrega");

    let resumoItensHtml = "";
    let resumoExtrasHtml = "";

    // Itens principais do pedido
    for (const itemName in carrinho) {
        if (carrinho.hasOwnProperty(itemName) && carrinho[itemName] > 0) {
            let item = null;
            for (const category in itemsData) {
                if (Array.isArray(itemsData[category])) {
                    item = itemsData[category].find(i => i.name === itemName);
                    if (item) break;
                }
            }
            if (item) {
                resumoItensHtml += `<div>${carrinho[itemName]}x ${item.name} - R$ ${(item.price * carrinho[itemName]).toFixed(2)}</div>`;
            }
        }
    }
    resumoItensDiv.innerHTML = resumoItensHtml || "<div>Nenhum item selecionado.</div>";

    // Adicionais selecionados
    itemsData.adicionais.forEach(extra => {
        const itemId = formatId(extra.name);
        const quantityInput = document.getElementById(`${itemId}-additional-quantity`);
        if (quantityInput) {
            const quantity = parseInt(quantityInput.value) || 0;
            if (quantity > 0) {
                resumoExtrasHtml += `<div>${quantity}x ${extra.name} (adicional) - R$ ${(extra.price * quantity).toFixed(2)}</div>`;
            }
        }
    });
    extrasPedidoDiv.innerHTML = resumoExtrasHtml || "<div>Sem adicionais.</div>";

    // Observação do cliente
    const observacao = document.getElementById("observacao").value.trim();
    observacaoPedidoDiv.innerHTML = observacao ? `📝 Observação: ${observacao}` : "<div>Sem observações.</div>";

    // Informação de troco
    const trocoInfo = sessionStorage.getItem("troco") || "Não informado";
    trocoPedidoDiv.innerHTML = `💵 Troco: ${trocoInfo}`;

    // Taxa de entrega
    const taxaEntrega = parseFloat(sessionStorage.getItem("taxaEntrega")) || 0;
    taxaEntregaElement.innerHTML = `🚚 Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}`;

    // Total final
    totalPedidoSpan.innerText = calcularTotalPedido().toFixed(2);
}


// Gerenciamento de Pop-ups
function togglePopup(popupId, show) {
    const popup = document.getElementById(popupId);
    const fundoEscuro = document.getElementById("fundo-escuro");
    const body = document.body;

    if (show) {
        popup.style.display = "flex";
        fundoEscuro.style.display = "block";
        body.classList.add("body-bloqueado");
    } else {
        popup.style.display = "none";
        fundoEscuro.style.display = "none";
        body.classList.remove("body-bloqueado");
    }
}

function fecharCarrinho() {
    togglePopup('carrinho-popup', false);
}

function askAddress() {
    fecharCarrinho();
    togglePopup('popup-endereco', true);
    loadUserData(); // Carrega dados preenchidos anteriormente
}

function closeAddressPopup() {
    togglePopup('popup-endereco', false);
}

function checkPaymentMethod() {
    let paymentMethod = document.getElementById("forma-pagamento").value;
    let erroPagamento = document.getElementById("erro-pagamento");

    if (!paymentMethod) {
        erroPagamento.style.display = "block";
        return;
    } else {
        erroPagamento.style.display = "none";
        saveUserData(); // Salva os dados do formulário de endereço
        togglePopup('popup-endereco', false);

        if (paymentMethod === "dinheiro") {
            togglePopup('popup-troco', true);
        } else {
            // Se não for dinheiro, não precisa de troco
            sessionStorage.setItem("troco", "Não precisa");
            togglePopup('popup-adicionais', true); // Pula o troco e vai para adicionais
            generateAdditionalItems(); // Garante que os adicionais estejam carregados
        }
    }
}

function showTrocoInput(needsChange) {
    const trocoInputDiv = document.getElementById("troco-input-div");
    if (needsChange) {
        trocoInputDiv.style.display = "block";
    } else {
        sessionStorage.setItem("troco", "Não precisa");
        togglePopup('popup-troco', false);
        togglePopup('popup-adicionais', true); // Vai para adicionais
        generateAdditionalItems(); // Garante que os adicionais estejam carregados
    }
}

function confirmTroco() {
    let valorTroco = document.getElementById("valor-troco").value;
    if (valorTroco.trim() === "" || isNaN(valorTroco) || parseFloat(valorTroco) <= calcularTotalPedido()) {
        alert("Por favor, informe um valor para o troco maior que o total do pedido.");
        return;
    }
    sessionStorage.setItem("troco", `Precisa de troco para R$ ${parseFloat(valorTroco).toFixed(2)}`);
    togglePopup('popup-troco', false);
    togglePopup('popup-adicionais', true); // Vai para adicionais
    generateAdditionalItems(); // Garante que os adicionais estejam carregados
}

function confirmarAdicionais() {
    togglePopup('popup-adicionais', false);
    atualizarResumoPedido();
    togglePopup('popup-confirmation', true);
}

function pularAdicionais() {
    togglePopup('popup-adicionais', false);
    atualizarResumoPedido();
    togglePopup('popup-confirmation', true);
}

function cancelRequest() {
    const confirmCancel = confirm("Tem certeza de que deseja cancelar o pedido?");
    if (confirmCancel) {
        togglePopup('popup-confirmation', false);
        // Opcional: Resetar carrinho e inputs de endereço/observação
        resetOrder();
    }
}

function resetOrder() {
    carrinho = {};
    Object.keys(itemsData).forEach(category => {
        if (Array.isArray(itemsData[category])) {
            itemsData[category].forEach(item => {
                const input = document.getElementById(`${formatId(item.name)}-quantity`);
                if (input) input.value = 0;
            });
        }
    });
    // Resetar adicionais
    itemsData.adicionais.forEach(item => {
        const input = document.getElementById(`${formatId(item.name)}-additional-quantity`);
        if (input) input.value = 0;
    });

    document.getElementById("nome").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("forma-pagamento").value = "";
    document.getElementById("observacao").value = "";
    document.getElementById("valor-troco").value = "";

    sessionStorage.removeItem("taxaEntrega");
    sessionStorage.removeItem("troco");
    atualizarContadorCarrinho();
    toggleConfirmOrderButton();
    showMenu('lanches'); // Volta para a primeira aba
}


// Funções de localização (mantidas, mas considere o aviso sobre API Key)
function aceitarLocalizacao() {
    localStorage.setItem("localizacaoPermitida", "true");
    togglePopup('popup-permissao-localizacao', false);
    obterLocalizacao();
}

function inserirEnderecoManual() {
    localStorage.setItem("localizacaoPermitida", "false"); // Marca como não permitido para não pedir de novo
    togglePopup('popup-permissao-localizacao', false);
    askAddress(); // Abre o pop-up de endereço direto
}

function obterLocalizacao() {
    if (!navigator.geolocation) {
        alert("Seu navegador não suporta geolocalização. Por favor, insira o endereço manualmente.");
        inserirEnderecoManual();
        return;
    }

    navigator.geolocation.getCurrentPosition(usarLocalizacao, erroLocalizacao);
}

function usarLocalizacao(position) {
    const latUsuario = position.coords.latitude;
    const lngUsuario = position.coords.longitude;
    console.log(`📍 Localização obtida: ${latUsuario}, ${lngUsuario}`);
    calcularDistancia(latUsuario, lngUsuario);
}

function erroLocalizacao(error) {
    console.error("Erro ao obter localização:", error);
    if (error.code === error.PERMISSION_DENIED) {
        alert("⚠️ A permissão de localização foi negada. Por favor, permita a localização ou insira seu endereço manualmente.");
        localStorage.removeItem("localizacaoPermitida"); // Remove para pedir novamente na próxima
        inserirEnderecoManual();
    } else {
        alert("Erro ao obter localização. A taxa de entrega pode ser padrão ou inválida. Por favor, insira seu endereço manualmente.");
        inserirEnderecoManual();
    }
}

// Loja localizada em Jacareí, São Paulo.
// Coordenadas aproximadas da loja (exemplo para demonstração)
const LOJA_LATITUDE = -23.2982;
const LOJA_LONGITUDE = -45.9658;

// Calcula a distância do usuário até a loja
function calcularDistancia(userLat, userLng) {
    if (typeof google === 'undefined' || !google.maps) {
        console.error("Google Maps API não carregado. Verifique sua chave ou conexão.");
        // Define uma taxa padrão se a API não estiver disponível
        sessionStorage.setItem("taxaEntrega", 10.00); // Taxa de fallback
        return;
    }

    const origem = new google.maps.LatLng(userLat, userLng);
    const destino = new google.maps.LatLng(LOJA_LATITUDE, LOJA_LONGITUDE);
    const service = new google.maps.DistanceMatrixService();

    service.getDistanceMatrix({
        origins: [origem],
        destinations: [destino],
        travelMode: google.maps.TravelMode.DRIVING,
    }, function (response, status) {
        if (status === 'OK' && response.rows[0].elements[0].status === 'OK') {
            const distanciaMetros = response.rows[0].elements[0].distance.value; // Em metros
            const distanciaKm = distanciaMetros / 1000;
            console.log(`📏 Distância calculada: ${distanciaKm.toFixed(2)} km`);

            let taxaEntrega = 0;
            if (distanciaKm <= 3) {
                taxaEntrega = 5.00;
            } else if (distanciaKm <= 7) {
                taxaEntrega = 8.00;
            } else if (distanciaKm <= 12) {
                taxaEntrega = 12.00;
            } else if (distanciaKm <= 20) {
                taxaEntrega = 18.00;
            } else {
                taxaEntrega = 25.00; // Para distâncias maiores
            }

            sessionStorage.setItem("taxaEntrega", taxaEntrega);
            console.log(`💰 Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}`);
        } else {
            console.error("Erro ao calcular distância:", response);
            alert("Não foi possível calcular a taxa de entrega automaticamente. Usaremos uma taxa padrão.");
            sessionStorage.setItem("taxaEntrega", 10.00); // Taxa de fallback
        }
    });
}

// Salva dados do endereço no localStorage
function saveUserData() {
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("endereco", document.getElementById("endereco").value);
    localStorage.setItem("bairro", document.getElementById("bairro").value);
    localStorage.setItem("numero", document.getElementById("numero").value);
    localStorage.setItem("complemento", document.getElementById("complemento").value);
    localStorage.setItem("pagamento", document.getElementById("forma-pagamento").value);
}

// Carrega dados do endereço do localStorage
function loadUserData() {
    const nome = localStorage.getItem("nome");
    const endereco = localStorage.getItem("endereco");
    const bairro = localStorage.getItem("bairro");
    const numero = localStorage.getItem("numero");
    const complemento = localStorage.getItem("complemento");
    const pagamento = localStorage.getItem("pagamento");

    if (nome) document.getElementById("nome").value = nome;
    if (endereco) document.getElementById("endereco").value = endereco;
    if (bairro) document.getElementById("bairro").value = bairro;
    if (numero) document.getElementById("numero").value = numero;
    if (complemento) document.getElementById("complemento").value = complemento;
    if (pagamento) document.getElementById("forma-pagamento").value = pagamento;
}


// Atualiza o contador do carrinho na interface
function atualizarContadorCarrinho() {
    let totalItens = 0;
    for (const item in carrinho) {
        if (carrinho.hasOwnProperty(item)) {
            totalItens += carrinho[item];
        }
    }
    document.getElementById("carrinho-contador").innerText = totalItens;
    toggleConfirmOrderButton();
}

// Ativa/desativa o botão "Confirmar Pedido"
function toggleConfirmOrderButton() {
    const confirmarBtn = document.getElementById("confirmar-pedido");
    const totalItens = parseInt(document.getElementById("carrinho-contador").innerText);
    confirmarBtn.disabled = totalItens === 0;
}

// Mostra o conteúdo do carrinho no pop-up
function mostrarCarrinho() {
    let carrinhoItensDiv = document.getElementById("carrinho-itens");
    carrinhoItensDiv.innerHTML = "";

    let hasItems = false;
    let resumoHtml = "";

    for (const itemName in carrinho) {
        if (carrinho.hasOwnProperty(itemName) && carrinho[itemName] > 0) {
            let item = null;
            // Busca o item em todas as categorias
            for (const category in itemsData) {
                if (Array.isArray(itemsData[category])) {
                    item = itemsData[category].find(i => i.name === itemName);
                    if (item) break;
                }
            }
            if (item) {
                hasItems = true;
                resumoHtml += `<p>${carrinho[itemName]}x ${item.name} - R$ ${(item.price * carrinho[itemName]).toFixed(2)}</p>`;
            }
        }
    }

    if (!hasItems) {
        carrinhoItensDiv.innerHTML = "<p>Seu carrinho está vazio.</p>";
    } else {
        carrinhoItensDiv.innerHTML = resumoHtml;
    }
    atualizarContadorCarrinho();
}


// Envia o pedido para o WhatsApp
function sendToWhatsApp() {
    let nome = localStorage.getItem("nome") || "Nome não informado";
    let endereco = localStorage.getItem("endereco") || "Endereço não informado";
    let bairro = localStorage.getItem("bairro") || "Bairro não informado";
    let numero = document.getElementById("numero").value || "N/A";
    let complemento = document.getElementById("complemento").value.trim();
    let formaPagamento = localStorage.getItem("pagamento") || "Não informado";
    let trocoInfo = sessionStorage.getItem("troco") || "Não informado";
    let observacao = document.getElementById("observacao").value.trim();
    let total = calcularTotalPedido();
    let taxaEntrega = parseFloat(sessionStorage.getItem("taxaEntrega")) || 0;

    let message = "🍔 *RESUMO DO PEDIDO* 🍔\n\n";

    // Itens principais
    for (const itemName in carrinho) {
        if (carrinho.hasOwnProperty(itemName) && carrinho[itemName] > 0) {
            let item = null;
            for (const category in itemsData) {
                if (Array.isArray(itemsData[category])) {
                    item = itemsData[category].find(i => i.name === itemName);
                    if (item) break;
                }
            }
            if (item) {
                message += `*${carrinho[itemName]}x* ${item.name} ........ R$ ${(item.price * carrinho[itemName]).toFixed(2)}\n`;
            }
        }
    }

    // Adicionais
    let extrasSelecionados = itemsData.adicionais.filter(extra => {
        const itemId = formatId(extra.name);
        const quantityInput = document.getElementById(`${itemId}-additional-quantity`);
        return quantityInput && parseInt(quantityInput.value) > 0;
    });

    if (extrasSelecionados.length > 0) {
        message += `\n⭐ *ADICIONAIS:* ⭐\n`;
        extrasSelecionados.forEach(extra => {
            const itemId = formatId(extra.name);
            const quantity = parseInt(document.getElementById(`${itemId}-additional-quantity`).value);
            message += `*${quantity}x* ${extra.name} (Adicional) .... R$ ${(extra.price * quantity).toFixed(2)}\n`;
        });
    }

    message += `\n🚚 *Taxa de entrega:* R$ ${taxaEntrega.toFixed(2)}\n`;
    message += `💰 *TOTAL:* R$ ${total.toFixed(2)}\n\n`;

    if (observacao !== "") {
        message += `📝 *OBSERVAÇÃO:* ${observacao}\n\n`;
    }

    message += `--- Dados do Cliente ---\n`;
    message += `📛 *NOME:* ${nome}\n`;
    message += `📍 *ENDEREÇO:* ${endereco}, ${numero}${complemento ? `, ${complemento}` : ''}\n`;
    message += `🏘️ *BAIRRO:* ${bairro}\n`;
    message += `💳 *FORMA DE PAGAMENTO:* ${formaPagamento}\n`;

    if (formaPagamento.toLowerCase() === "dinheiro" && trocoInfo !== "Não precisa") {
        message += `💵 *TROCO:* ${trocoInfo}\n`;
    }

    // Limpa sessionStorage após o envio
    sessionStorage.removeItem("troco");

    togglePopup('popup-confirmation', false); // Fecha o pop-up de confirmação

    const whatsappUrl = `https://wa.me/5511971624216?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Opcional: Resetar o estado da aplicação após o envio
    resetOrder();
}

// Evento DOMContentLoaded para inicializar
document.addEventListener("DOMContentLoaded", function () {
    // Esconde o pop-up de permissão de localização por padrão
    document.getElementById("popup-permissao-localizacao").style.display = "none";

    // Verifica se a localização já foi permitida antes
    if (localStorage.getItem("localizacaoPermitida") === "true") {
        console.log("✅ Localização já permitida.");
        obterLocalizacao();
    } else if (localStorage.getItem("localizacaoPermitida") === "false") {
        console.log("❌ Localização negada anteriormente. Ir para endereço manual.");
        // Não mostra o pop-up, vai direto para o endereço manual se já negou
    } else {
        console.log("❓ Pedindo permissão de localização pela primeira vez.");
        togglePopup('popup-permissao-localizacao', true); // Mostra o pop-up de permissão
    }

    // Gera os itens dos menus e adicionais
    generateMenuItems('lanches');
    generateMenuItems('porcoes');
    generateMenuItems('bebidas');
    generateAdditionalItems(); // Gera os itens para o pop-up de adicionais

    // Exibe a primeira categoria por padrão
    showMenu('lanches');

    // Inicializa o contador do carrinho
    atualizarContadorCarrinho();

    // Listener para o campo de pagamento
    document.getElementById("forma-pagamento").addEventListener("change", function () {
        document.getElementById("erro-pagamento").style.display = "none";
    });
});