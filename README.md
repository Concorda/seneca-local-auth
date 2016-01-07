![Seneca](http://senecajs.org/files/assets/seneca-logo.png)

seneca-local-auth - a seneca-auth plugin
============================================

[![npm version][npm-badge]][npm-url]
[![Dependency Status][david-badge]][david-url]
[![Gitter chat][gitter-badge]][gitter-url]

Lead Maintainer: [Mircea Alexandru](https://github.com/mirceaalexandru)

This plugin is used by [seneca-auth](https://www.npmjs.com/package/seneca-auth) for authenticating via local strategy.
It uses [PassportJS](http://passportjs.org). The [seneca-auth](https://www.npmjs.com/package/seneca-auth) is the
authentication plugin used by [Seneca](http://senecajs.org) toolkit.

For a gentle introduction to Seneca itself, see the [senecajs.org](http://senecajs.org) site.

If you're using this plugin module, feel to contact on twitter if you have any questions! :) [@Alexandru_M](https://twitter.com/Alexandru_M)


### Install

```sh
npm install seneca-local-auth
```

### Using Local Auth

When using seneca-auth the local auth must be initialized using:

```
..........
seneca.use('auth')
seneca.use('local-auth', options)
..........

```

[npm-badge]: https://badge.fury.io/js/seneca-local-auth.svg
[npm-url]: https://badge.fury.io/js/seneca-local-auth
[david-badge]: https://david-dm.org/mirceaalexandru/seneca-local-auth.svg
[david-url]: https://david-dm.org/mirceaalexandru/seneca-local-auth
[gitter-badge]: https://badges.gitter.im/senecajs/seneca.png
[gitter-url]: https://gitter.im/senecajs/seneca
