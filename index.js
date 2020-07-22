const container = document.querySelector('#abaCertificados');

var dateCertificado = [{
        id: 1,
        nome: 'Back-end em PHP',
        // https://imgur.com/HgqMm2G.jpg
        imgFrente: './img/capa.png',
        imgFundo: './img/bootstrap.png'
    },
    {
        id: 2,
        nome: 'Back-end em PHP',
        // https://imgur.com/HgqMm2G.jpg
        imgFrente: './img/capa.png',
        imgFundo: './img/bootstrap.png'
    },
    {
        id: 3,
        nome: 'Back-end em PHP',
        // https://imgur.com/HgqMm2G.jpg
        imgFrente: './img/capa.png',
        imgFundo: './img/bootstrap.png'
    }
    
   
]




const gerarCertificados = () => {

    dateCertificado.forEach(data => {
        // VARIAVEIS
        const figure = document.createElement('figure');
        const link = document.createElement('a');
        const span = document.createElement('span');
        const img = document.createElement('img');



        // ADCIONANDO ATRIBUTOS
        figure.setAttribute('class', 'certif'); // atribuindo class no figure
        link.setAttribute('href', `${data.imgFrente}`); // atribuindo href e link para a tag (a)
        link.setAttribute('data-size', '1900x1967'); // atribuindo data-size a tag (a)
        span.setAttribute('class', 'nameTitulo');
        
        img.setAttribute('class', 'img-fluid');
        img.setAttribute('src', `${data.imgFundo}`);

        //ADICIONANDO CONTEXTO AS TAGS
        span.innerHTML = `${data.nome}`; // colocando valor na tag span

        // ADCIONANDO NOS CONTAINES FILHOS
        link.appendChild(span); //inserindo a tag span dentro de (a)
        link.appendChild(img); //inserindo a tag img dentro de (a)
        figure.appendChild(link); // inserindo a tag (a) dentro de figure

        // ADICIONANDO AO CONTAINER  PAI PARA TER VIZUALIZACAO NO HTML 
        container.appendChild(figure); // inserindo a tag figure dentro do container
    })

}

gerarCertificados();