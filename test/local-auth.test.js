'use strict'

var Lab = require('lab')
var lab = exports.lab = Lab.script()
var suite = lab.suite
var test = lab.test

var Code = require('code')
var expect = Code.expect

suite('local strategy suite tests', function () {
  test('call auth register service', function (done) {
    var si = require('seneca')()

    si.add('role: auth,  cmd: register_service', function (msg, next) {
      expect(msg).to.exist()
      expect(msg).to.be.an.object()
      expect(msg.service).to.exist()
      expect(msg.service).to.be.equal('local')
      expect(msg.plugin).to.exist()
      expect(msg.conf).to.exist()

      next()
      done()
    })

    si.use(require('..'))
  })
})
