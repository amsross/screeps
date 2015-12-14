var spawner = require('spawner');

var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var conquistador = require('conquistador');
var archer = require('archer');

module.exports.loop = function () {
  spawner();

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];

    if (creep.memory.role == 'harvester') {
      harvester(creep);
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

    if (creep.memory.role == 'conquistador') {
      conquistador(creep);
    }
  }
}
