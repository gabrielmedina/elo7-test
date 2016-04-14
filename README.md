# Elo7 test

Codificação front-end para landing page "Trabalhe na Elo7".

## O que foi utilizado

### Grunt.js

> O Grunt é uma aplicação de linha de comando que tem como objetivo automatizar tarefas, principalmente tarefas em aplicações JavaScript.

[Vagner Santana](http://tableless.com.br/grunt-voce-deveria-estar-usando/)

### Sass

> Sass permite usar recursos que não existem na CSS ainda como variáveis, aninhamento, mixins, herança e outras guloseimas bacana que tornar a escrita CSS divertida novamente.

[Hampton Catlin, Natalie Weizenbaum, Chris Eppstein, e vários colaboradores](http://sass-lang.com/guide).

## Ambiente de desenvolvimento

Para manter o projeto, seu ambiente de desenvolvimento deve conter o [Node.js](https://nodejs.org/en/download/), juntamente com o plugin [Grunt.js](http://gruntjs.com/getting-started).

Como os estilos estão sendo escritos utilizando o pré-processador Sass, você deve efetuar a instação da linguagem [Ruby](https://www.ruby-lang.org/pt/downloads/), juntamente com a gem [Sass](http://sass-lang.com/install).

Após a configuração do seu ambiente de desenvolvimento, basta executar os seguintes comandos:

Baixar as dependências do NPM, declaradas no arquivo package.json:

```bash
npm install
```

Ativar o plugin do Grunt para compilar os arquivos:

```bash
grunt
```

Ativar o plugin do Grunt durante o desenvolvimento, para que a compilação dos arquivos seja efetuada assim que as modificações acontecerem:

```bash
grunt w
```
