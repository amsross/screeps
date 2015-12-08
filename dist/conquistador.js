
module.exports = function(creep) {

  if (creep.room.controller) {

    if (creep.carry.energy == 0) {

      // get more energy
      if (Game.spawns.Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
        creep.moveTo(Game.spawns.Spawn1);
      }
    } else {

      // capture a controller
      if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        return creep.moveTo(creep.room.controller);
      }

      // upgrade the controller
      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        return creep.moveTo(creep.room.controller);
      }
    }
  }
};
