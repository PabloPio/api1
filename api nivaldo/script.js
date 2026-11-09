
function consultarAPI() {

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(dados => {

            dados.forEach(publicacao => {

                console.log("--------------------------");
                console.log("ID:", publicacao.id);
                console.log("TITLE:", publicacao.title);
                console.log("BODY:", publicacao.body);

            });

        })
        .catch(erro => {
            console.log("Erro ao consultar a API:", erro);
        });

}
