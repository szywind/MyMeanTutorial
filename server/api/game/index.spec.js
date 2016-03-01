'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var gameCtrlStub = {
  index: 'gameCtrl.index',
  show: 'gameCtrl.show',
  create: 'gameCtrl.create',
  update: 'gameCtrl.update',
  destroy: 'gameCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var gameIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './game.controller': gameCtrlStub
});

describe('Game API Router:', function() {

  it('should return an express router instance', function() {
    gameIndex.should.equal(routerStub);
  });

  describe('GET /yes', function() {

    it('should route to game.controller.index', function() {
      routerStub.get
        .withArgs('/', 'gameCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /yes/:id', function() {

    it('should route to game.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'gameCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /yes', function() {

    it('should route to game.controller.create', function() {
      routerStub.post
        .withArgs('/', 'gameCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /yes/:id', function() {

    it('should route to game.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'gameCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /yes/:id', function() {

    it('should route to game.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'gameCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /yes/:id', function() {

    it('should route to game.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'gameCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
