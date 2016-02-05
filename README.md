![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js](https://github.com/senecajs/) a seneca-auth plugin

# seneca-local-auth

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Dependency Status][david-badge]][david-url]
[![Gitter chat][gitter-badge]][gitter-url]

Lead Maintainer: [Mircea Alexandru](https://github.com/mirceaalexandru)

This plugin is used by [seneca-auth](https://www.npmjs.com/package/seneca-auth) for authenticating via local strategy.
It uses [PassportJS](http://passportjs.org). The [seneca-auth](https://www.npmjs.com/package/seneca-auth) is the
authentication plugin used by [Seneca](http://senecajs.org) toolkit.

For a gentle introduction to Seneca itself, see the [senecajs.org](http://senecajs.org) site.

If you're using this plugin module, feel to contact on twitter if you have any questions! :) [@Alexandru_M](https://twitter.com/Alexandru_M)

- __Version:__ 0.1.0
- __Tested on:__ Seneca 0.8, 0.9
- __Node:__ 4, 5
- __License:__ [MIT][]


## Install

```sh
npm install seneca-local-auth
```

## Using Local Auth

When using seneca-auth the local auth must be initialized using:

```
seneca.use('auth')
seneca.use('local-auth', options)
```

## Test
To run tests, simply use npm:

```sh
npm run test
```

## Contributing
The [Senecajs org](https://github.com/senecajs/) encourage open participation. If you feel you can help in any way, be it with
documentation, examples, extra testing, or new features please get in touch.

## License
Copyright Mircea Alexandru and other contributors 2015, Licensed under [MIT][].


[npm-badge]: https://badge.fury.io/js/seneca-local-auth.svg
[npm-url]: https://badge.fury.io/js/seneca-local-auth
[david-badge]: https://david-dm.org/senecajs/seneca-local-auth.svg
[david-url]: https://david-dm.org/senecajs/seneca-local-auth
[gitter-badge]: https://badges.gitter.im/senecajs/seneca.png
[gitter-url]: https://gitter.im/senecajs/seneca
[travis-badge]: https://travis-ci.org/senecajs/seneca-local-auth.svg
[travis-url]: https://travis-ci.org/senecajs/seneca-local-auth

[MIT]: ./LICENSE
