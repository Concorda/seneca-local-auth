seneca-local-auth - a seneca-auth plugin
============================================

This plugin is used by [seneca-auth](https://www.npmjs.com/package/seneca-auth) for authenticating via local strategy.
It uses [PassportJS](http://passportjs.org). The [seneca-auth](https://www.npmjs.com/package/seneca-auth) is the
authentication plugin used by [Seneca](http://senecajs.org) toolkit.

For a gentle introduction to Seneca itself, see the [senecajs.org](http://senecajs.org) site.

If you're using this plugin module, feel to contact on twitter if you have any questions! :) [@rjrodger](http://twitter.com/rjrodger)

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
