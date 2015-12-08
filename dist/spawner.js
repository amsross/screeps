var incrementor = 0,
    conquistadors, guards, harvesters, builders,
    MAX_BUILDERS = 2,
    MAX_HARVESTERS = 6,
    MAX_CONQUISTADORS = 1,
    MAX_GUARDS = 2
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

  if ((Game.spawns.Spawn1 || {}).energy >= 300) {
    if ( builders.length >= (harvesters.length / 4) || !Game.rooms.sim.find(FIND_CONSTRUCTION_SITES).length ) {
      if ( harvesters.length < MAX_HARVESTERS ) {
        incrementor++;
        Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Harvester' + incrementor, {role: 'harvester'} );
      }
    } else {
      if ( builders.length < MAX_BUILDERS ) {
        incrementor++;
        Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder' + incrementor, {role: 'builder'} );
      }
    }
  }

  if ((Game.spawns.Spawn1 || {}).energy >= 200) {
    if ( conquistadors.length < MAX_CONQUISTADORS && harvesters.length == (MAX_HARVESTERS / 2)) {
      incrementor++;
      Game.spawns.Spawn1.createCreep( [MOVE, WORK, CARRY, CARRY], 'Conquistador' + incrementor, {role: 'conquistador'} );
    }
  }

  if ((Game.spawns.Spawn1 || {}).energy >= 180) {
    if ( guards.length < MAX_GUARDS ) {
      incrementor++;
      Game.spawns.Spawn1.createCreep( [MOVE, MOVE, ATTACK], 'Guard' + incrementor, {role: 'guard'} );
    }
  }
};
