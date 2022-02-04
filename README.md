<h1 aling="center"><strong>Serviço WEB</strong></h1>

<p aling="center">Serviço WEB que utiliza a tecnologia REST. Esse serviço espera uma requisição GET, do qual passando usuário e senha corretos como parâmetros da requisição, o sistema irá retornar um JSON com a seguinte mensagem: </p>

    
    {
        "mensagem": "Meu nome completo é xxx. Eu quero essa vaga!"
    }

<h2 aling="center"><strong>Tecnologias e Libs</strong></h2>

<ul>
    <li><i>NodeJS</i></li>
    <li><i>Husky</i></li>
    <li><i>ESLint</i></li>
    <li><i>JEST</i></li>
    <li><i>Yub</i></li>
    <li><i>Express</i></li>
    <li><i>Nodemon</i></li>
</ul>
<h2 aling="center"><strong>Preparar o ambiente Local ou de produção:</strong></h2>

1. Clone esse repositório: https://github.com/Weslin-0101/WebServiceSimple.git

2. Crie, de acordo com o arquivo ***.env.example***, o arquivo *`.env`* dentro da pasta do repositório

3. Execute, dentro da pasta do repositório, o comando:
    ```
    npm run start
    ```


<h2 aling="center"><strong>Prepara o ambiente de Dev:</strong></h2>

1. Execute, dentro da pasta do repositório, os comandos:
    ```
    npm set-script prepare "husky install"
    
    npm run prepare
    ```

2. Após isso, rode o comando no terminal:
    ```
    npm run start:dev
    ```

<h2 aling="center"><strong>Ambiente de testes:</strong></h2>

1. Para rodar os testes, basta executar o seguinte comando no terminal, dentro da pasta do repositório:
    
    ```
    npm run test
    ```
