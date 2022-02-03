# Para o serviço WEB:

Deve der validações para a requisição GET, com os parâmetros corretos:

`user`: syscoin
`password`: meEscolhe

Para o caso das informações estarem transmitidas corretamente, deve retornar um `JSON` com a mensagem:

`mensagem`: "Meu nome completo é Wesley Lira Carvalho. Eu quero essa vaga!"

Caso contrário, deve retornar a mensagem:

`mensagem`: "Credenciais erradas"

Para a requisição GET, deve-se colocar os parâmetros `user` e `password` em uma URL como por exemplo:

`http://xxx/provasyscoin?user="syscoin"&password="meEscolhe"`

Onde xxx pode ser um domínio ou IP
