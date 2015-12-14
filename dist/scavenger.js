
module.exports = function (creep) {

  if (creep.carry.energy < creep.carryCapacity) {
    var targets = creep.room.find(FIND_DROPPED_RESOURCES);
    if ( targets.length ) {
      var target = creep.pos.findClosestByRange(targets);
      if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
        var path = creep.pos.findPathTo(target);
        creep.moveByPath( path );
      }
    }
  } else {
    if (creep.transferEnergy(Game.spawns.Spawn1) == ERR_NOT_IN_RANGE) {
      var path = creep.pos.findPathTo(Game.spawns.Spawn1);
      creep.moveByPath( path );
    }
  }
}
