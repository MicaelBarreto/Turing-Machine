<p align="center">Maquina de Turing</p>

## Instalação

Para instalar a aplicação abra o terminal e:
Clone o projeto
- git clone https://github.com/MicaelBarreto/Turing-Machine.git
- cd Turing-Machine

Instale os repositórios do composer
- composer install

Instale os reposritórios do npm
- npm i

Crie e edite os arquivos de configuração  do laravel
- cp -r .env-example .env
- php artisan key:generate

## Banco de dados
Existem duas formas de utilizar banco de dados neste projeto
1º caso: Banco de dados local
- Crie um banco de dados local nomeado [name]
- 
Para migrar as tabelas
- php artisan migrate

