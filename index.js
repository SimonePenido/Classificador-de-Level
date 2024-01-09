// Variáveis de exemplo (pode alterar os valores conforme necessário)
let classe = "Bárbaro"; // Pode mudar a classe aqui
let experiencia = 7500; // Pode mudar a experiência aqui

// Verifica a quantidade de experiência para determinar o nível da classe
let level;
if (experiencia < 1000) {
    level = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    level = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    level = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    level = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    level = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    level = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    level = "Imortal";
} else {
    level = "Radiante";
}

// Exibe a mensagem com o nível da classe do personagem
console.log(`O Personagem da classe ${classe} está no nível de ${level}`);
