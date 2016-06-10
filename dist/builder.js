
module.exports = function (creep) {

  if (creep.carry.energy == 0) {
    // get more energy
    if (Game.spawns.Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
      creep.moveTo(Game.spawns.Spawn1);
    }
  } else {
    // repair something
    var targets = creep.room.find(FIND_MY_STRUCTURES, {
      filter: function(target) {
        return target.hits < target.hitsMax;
      }
    });
    if (targets.length) {
      var target = creep.pos.findClosestByRange(targets);
      if (creep.repair(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
      }
    } else {
      // build something
      var targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
      if (targets) {
        var target = creep.pos.findClosestByRange(targets);
        if (creep.build(target) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target);
        }
      }
    }
  }
};
