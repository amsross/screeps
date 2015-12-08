var incrementor = 0,
    conquistadors, guards, harvesters, builders
    ;

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

  if (Game.spawns.Spawn1.energy >= 200) {
    if ( !conquistadors.length ) {
      Game.spawns.Spawn1.createCreep( [MOVE, WORK, CARRY, CARRY], 'Conquistador' + incrementor++, {role: 'conquistador'} );
    }
  }

  if (Game.spawns.Spawn1.energy >= 300) {
    if ( builders.length >= (harvesters.length / 4) || !Game.rooms.sim.find(FIND_CONSTRUCTION_SITES).length ) {
      Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Harvester' + incrementor++, {role: 'harvester'} );
    } else {
      Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder' + incrementor++, {role: 'builder'} );
    }
  }
};
