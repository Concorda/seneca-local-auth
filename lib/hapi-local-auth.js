module.exports = function (options) {
  var seneca = this

  seneca.act(
    'role: web',
    {
      plugin: 'auth',
      config: options,
      use: {
        prefix: options.prefix,
        pin: {role: 'auth', cmd: '*'},
        map: {
          login: {GET: true, POST: true, data: true, alias: options.urlpath.login}
        }
      }
    })

  return {
    name: 'local-auth'
  }
}

