# Exlusión mutua - Concurrencia - Semáforo
[![Build Status][travis-badge]][travis-badge-url]

El objetivo de este algoritmo es ejemplificar la exclusión mutua con relacion a la concurrencias y el concepto de semáforo.

## Base conceptual

Para comprender el funcionamiento y comportamiento de la aplicación es necesario repasar los conceptos a demostrar.

## Exclusión mutua

La exclusión mutua hace presencia en el momento en que se obtiene un solo recurso con multiples peticiones, para ejecutar la tarea de forma adecuada se debe atender las peticiones de acuerdo a un orden de prioridad, algunas veces se atienden como una cola, pero en el caso de existir una variable que exprese mayor relevancia, esta debe atender primero la de más alta prioridad.

## Concurrencia

Hace alusion a un número de conexiones simultaneas al mismo servidor, para contrarestar el alto volumen de información se deben tener varias fuentes de información.

## Explicación del sistema

Con la intención de generar una ejemplificación didáctica, se genero una aplicación web en la que se tienen 10 usuarios, es posible modificar sus carácterísticas base que son: Nombre, Calidad de canción requerida, estado de registro y palabras a buscar.

Se genera un nivel de relevancia de petición dependiente al estado del registro y calidad solicitada, dejando de primero usuarios registrados con solicitud de alta calidad.

Los usuarios son obtenidos de forma local en un Json estático.

Las peticiones al API de Spotify se realizan de acuerdo a la prioridad asignada y se hace uso de peticiones con protocolo http para obtener el resultado para cada palabra indicada por usuario.

## Diagrama MVCS

![img](https://lh3.googleusercontent.com/Wwi2tbnSItUklKZn4sHJlNjuPxDvxuTbZlv6hxak54G1p7bVoLy1XI8N9-iS08W1zpCp8TKrHStNAYnIsZgYEa9rXxXv5fWIyql0Y5uy674hAsFFnoG3MJbMFRLRwrvUH1vf0qjWJbAJb4F-RMMZKWn4x4tXuTcZGUGCzkKrs73XQ_DH0jQcgqQcbR7kPvbEJwlTdCygcEtT5yvDnAy4k7fCf5Fo1aWO5RMHXSJQW558MXUmbj5A1EbsjMQMwbC55rYi1gR4GklMYHd8vwt8iRZadBzvg3qlGw9REhe4_Icdl_S_Q2WKx7I67qFAifoPX_0ocw2PdamY_ZCQk8WbS-7-1pWapDKcISgO0pNJJw33V07cDl-sTTBhRL9mhnhDEQ3x_J3_8w6oE2qUWsZr61BIQxX4K4oYvsphRSZKiL71JP_-oO2eyOxkFKIVoJp_DM7-Uli3BdBkWjdKcQHWdz_NbQPiE5HE7De4kS-4ye9IJPfnKJxlIemCNXqnGcPl1cESErbXsppYuDz1S9x2Vv8LC89jykHFjT9ckzxlDvZVBbkNDX0GWwHJCG9uwocLSn7Xar1U3n7jGcvbsQpSphuObHIaqSxXpVj1qDCEIJidaMWaW0yp=w1053-h726-no)

## Instalación

Siga los pasos para realizar la instalación en cualquier sistema operativo.

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Download the project

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/ssvargass/exclusion-concurrencia  my-proj
cd my-proj
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run build` - runs the TypeScript compiler once.
* `npm run build:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)

## Testing

The QuickStart documentation doesn't discuss testing.
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests
TypeScript unit-tests are usually in the `src/app` folder. Their filenames must end in `.spec.ts`.

Look for the example `src/app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `src` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured Protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the `lite-server` at `localhost:8080`
and launches Protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart
