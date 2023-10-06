// Função que verifica a idade com base no ano de nascimento e gênero


function verificar() {
    // Obtém a data atual

    var data = new Date();
    var ano = data.getFullYear();
    // Obtém o elemento de entrada de ano de nascimento

    var fano = document.getElementById('txtano');
    // Obtém o elemento de resultado

    var res = document.querySelector('div#res');
    //Micro validação
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO]: Verifique os dados e tente novamente.')
    } else {
        // Obtém os elementos de entrada de gênero (botões de opção)

        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = "masculino"
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1201&q=80';

            } else if (idade < 21) {
                //jovem
                img.src = 'https://images.unsplash.com/photo-1524601885886-1bdd86a02f5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80';

            } else if (idade < 50) {
                //adulto
                img.src = 'https://images.unsplash.com/photo-1584940120743-8981ca35b012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80';

            } else if (idade < 115) {
                //idoso
                img.src = 'https://images.unsplash.com/photo-1520853504280-249b72dc947c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80';

            } else {
                // Você é humano?
                img.src = 'https://images.unsplash.com/photo-1695902263709-573d9a31b2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
            }

        } else if (fsex[1].checked) {
            genero = 'feminino';
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80';

            } else if (idade < 21) {
                //jovem
                img.src = 'https://images.unsplash.com/photo-1610013597022-4f545164310c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80';

            } else if (idade < 50) {
                //adulto
                img.src = 'https://images.unsplash.com/photo-1568923066121-fb6216cf26f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80';

            } else if (idade < 115) {
                //idoso
                img.src = 'https://images.unsplash.com/photo-1521139342376-d2f8686c09b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1263&q=80';

            } else {
                // Você é humano?
                img.src = 'https://images.unsplash.com/photo-1695902263709-573d9a31b2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
            }

        }

        // Define o estilo do resultado

        res.style.textAlign = 'center';
        res.innerHTML = ` <br>Gênero ${genero} com ${idade} anos. <br>`

        // Adiciona a imagem ao resultado

        res.appendChild(img);
    }

}