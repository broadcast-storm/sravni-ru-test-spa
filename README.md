# Установка

Для запуска на ПК должны быть установлены:
[Node.js и npm](https://nodejs.org/);
[Git](https://git-scm.com/);

Склонируйте репозиторий

```sh
$ git clone https://github.com/nikita220800/sravni-ru-test-spa.git
```

### 1) Настройка сервера Node.js

В корне проекта сделайте установку необходимых зависимостей

```sh
$ npm install
```

#### В папке client переименуйте файл .env.example в .env

### 2) Настройка React приложения

Из корня проекта перейдите в папку client и сделайте установку необходимых зависимостей

```sh
$ cd ./client/
$ npm install
```

# Запуск проекта

### а) в одном терминале: из корня проекта

```sh
$ npm run dev
```

### б) в 2 терминалах:

#### 1) из корня проекта

```sh
$ npm run server
```

#### 2) из папки client

```sh
$ npm run start
```
