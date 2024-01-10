function classificar() {
    let classe = document.getElementById('classe').value;
    let experiencia = parseInt(document.getElementById('experiencia').value);

    let level;
    if (experiencia <= 1000) {
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
    } else if (experiencia >= 10001) {
        level = "Radiante";
    }

    // Exibe o resultado na página
    document.getElementById('resultado').innerHTML = `O Personagem da classe ${classe} está no nível ${level}`;

    // Carrega a imagem correspondente ao personagem
    if (classe === 'Barbaro') {
        document.getElementById('imagemPersonagem').src = 'Imagens/Barbaro.png';
    } else if (classe === 'Assassina') {
        document.getElementById('imagemPersonagem').src = 'Imagens/Assassina.png';
    } else if (classe === 'Druida') {
        document.getElementById('imagemPersonagem').src = 'Imagens/Druida.png';
    } else if (classe === 'Amazona') {
        document.getElementById('imagemPersonagem').src = 'Imagens/Amazona.png';
    } else if (classe === 'Feiticeira') {
        document.getElementById('imagemPersonagem').src = 'Imagens/Feiticeira.png';
    } else if (classe === 'Necromante') {
        document.getElementById('imagemPersonagem').src = 'Imagens/Necromante.png';
    } else if (classe === 'Paladino') {
        document.getElementById('imagemPersonagem').src = 'Imagens/Paladino.png';
    }
}
