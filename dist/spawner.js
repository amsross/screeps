
module.exports = function() {

  if ((Game.spawns.Spawn1 || {}).energy >= 300) {

    var now = Date.now()

    if ( false && Game.spawns.Spawn1.room.find(FIND_HOSTILE_CREEPS, {
      filter: function(target) {
        return target.owner.username !== 'Source Keeper';
      }
    }).length ) {
      return Game.spawns.Spawn1.createCreep( [TOUGH, TOUGH, TOUGH, TOUGH, MOVE, ATTACK, MOVE, ATTACK], 'Guard' + now, {role: 'guard'} );
    }

    if ( !Object.keys( Game.creeps ).length ) {
      return Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'harvester' + now, {role: 'harvester'} );
    } else if ( spawnDeciderByRole( "miner" ) ) {
      return Game.spawns.Spawn1.createCreep( [WORK, WORK, MOVE, MOVE], 'miner' + now, {role: 'miner'} );
    } else if ( spawnDeciderByRole( "scavenger" ) ) {
      return Game.spawns.Spawn1.createCreep( [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], 'scavenger' + now, {role: 'scavenger'} );
    } else if ( spawnDeciderByRole( "guard" ) ) {
      return Game.spawns.Spawn1.createCreep( [TOUGH, TOUGH, TOUGH, TOUGH, MOVE, ATTACK, MOVE, ATTACK], 'guard' + now, {role: 'guard'} );
    } else if ( spawnDeciderByRole( "healer" ) ) {
      return Game.spawns.Spawn1.createCreep( [MOVE, HEAL], 'healer' + now, {role: 'healer'} );
    } else if ( spawnDeciderByRole( "archer" ) ) {
      return Game.spawns.Spawn1.createCreep( [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, RANGED_ATTACK], 'archer' + now, {role: 'archer'} );
    } else if ( spawnDeciderByRole( "conquistador" ) ) {
      return Game.spawns.Spawn1.createCreep( [MOVE, WORK, WORK, CARRY], 'conquistador' + now, {role: 'conquistador'} );
    } else if ( spawnDeciderByRole( "builder" ) && Game.rooms.sim.find(FIND_CONSTRUCTION_SITES).length ) {
      return Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'builder' + now, {role: 'builder'} );
    } else {
      return Game.spawns.Spawn1.createCreep( [MOVE, WORK, WORK, CARRY], 'conquistador' + now, {role: 'conquistador'} );
    }
  }
};

function countCreepsByRole( role ) {
  return Object.keys(Game.creeps).filter(function(creep) {
    return Game.creeps[creep].memory.role === role;
  });
}

function ratioCreepsByRole( role ) {
  var count = countCreepsByRole( role ).length || 0;
  return count / (Object.keys(Game.creeps).length || 1);
}

function spawnDeciderByRole( role ) {
  var RATIO = {
    guard: .35, // 7 @20
    scavenger: .25, // 5 @20
    archer: .15,  // 3 @20
    miner: .10, // 2 @20
    healer: .05, // 1 @20
    builder: .05, // 1 @20
    conquistador: .05  // 1 @20
  };

  return ratioCreepsByRole( role ) <= RATIO[role];
}

/*
 * Ratio distrbution over population 100
  g g g g g g g g g g
  g g g g g g g g g g
  g g g g g g g g g g
  g g g g g s s s s s
  s s s s s s s s s s
  s s s s s s s s s s
  a a a a a a a a a a
  a a a a a m m m m m
  m m m m m h h h h h
  b b b b b c c c c c
  */
