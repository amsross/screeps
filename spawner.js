
module.exports = function() {

  if (Game.spawns.Spawn1.energy === 300) {
    harvesters = Object.keys(Game.creeps).filter(function(creep) {
      return Game.creeps[creep].memory.role === 'harvester';
    });
    builders = Object.keys(Game.creeps).filter(function(creep) {
      return Game.creeps[creep].memory.role === 'builder';
    });
    if ((builders.length + 2) > harvesters.length) {
      Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Worker' + (harvesters.length + 1), {role: 'harvester'} );
    } else {
      Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder' + (builders.length + 1), {role: 'builder'} );
    }
  }
};
