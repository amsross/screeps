var conquistadors, guards, harvesters, builders;

module.exports = function() {

  guards = Object.keys(Game.creeps).filter(function(creep) {
    return Game.creeps[creep].memory.role === 'guard';
  });
  conquistadors = Object.keys(Game.creeps).filter(function(creep) {
    return Game.creeps[creep].memory.role === 'conquistador';
  });
  harvesters = Object.keys(Game.creeps).filter(function(creep) {
    return Game.creeps[creep].memory.role === 'harvester';
  });
  builders = Object.keys(Game.creeps).filter(function(creep) {
    return Game.creeps[creep].memory.role === 'builder';
  });

  if (Game.spawns.Spawn1.energy >== 200) {
    if ( !conquistador.length ) {
      Game.spawns.Spawn1.createCreep( [MOVE, MOVE, CARRY, CARRY], 'Conquistador' + (conquistadors.length + 1), {role: 'conquistador'} );
    }
  }

  if (Game.spawns.Spawn1.energy >== 300) {

    if ( (builders.length + 2) > harvesters.length ) {
      Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Harvester' + (harvesters.length + 1), {role: 'harvester'} );
    } else {
      Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder' + (builders.length + 1), {role: 'builder'} );
    }
  }
};
