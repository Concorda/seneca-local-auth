var passport_local = require('passport-local')
var LocalStrategy = passport_local.Strategy

module.exports = function (options) {
  var seneca = this
  var service = 'local'

  var authPlugin = new LocalStrategy(
    function (username, password, done) {
      seneca.act({role: 'user', cmd: 'login', nick: username, email: username, password: password},
        function (err, out) {
          done(out)
        })
    }
  )

  seneca.act({role: 'auth', cmd: 'register_service', service: service, plugin: authPlugin, conf: options})

  return {
    name: 'local-auth'
  }
}
