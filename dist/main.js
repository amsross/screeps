var spawner = require('spawner');

var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var conquistador = require('conquistador');
var healer = require('healer');
var archer = require('archer');
var miner = require('miner');
var scavenger = require('scavenger');

module.exports.loop = function () {
  spawner();

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];

    if (creep.memory.role == 'harvester') {
      harvester(creep);
    }

    if (creep.memory.role == 'miner') {
      miner(creep);
    }

    if (creep.memory.role == 'scavenger') {
      scavenger(creep);
    }

    if (creep.memory.role == 'builder') {
      builder(creep);
    }

    if (creep.memory.role == 'guard') {
      guard(creep);
    }

    if (creep.memory.role == 'archer') {
      archer(creep);
    }

    if (creep.memory.role == 'healer') {
      healer(creep);
    }

    if (creep.memory.role == 'conquistador') {
      conquistador(creep);
    }
  }
}
