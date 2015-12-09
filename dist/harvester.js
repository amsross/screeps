
module.exports = function (creep) {

  if (creep.carry.energy < creep.carryCapacity) {
    var sources = creep.room.find(FIND_SOURCES);
    if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      var path = creep.pos.findPathTo(sources[0]);
      creep.moveByPath( path );
    }
  } else {
    if (creep.transferEnergy(Game.spawns.Spawn1) == ERR_NOT_IN_RANGE) {
      var path = creep.pos.findPathTo(Game.spawns.Spawn1);
      creep.moveByPath( path );
    }
  }
}
