
module.exports = function (opts) {
  var seneca = this

  var defaultOptions = {
    urlpath: {
      login: 'login'
    },
    prefix: '/auth'
  }

  var options = seneca.util.deepextend(defaultOptions, opts || {})

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

