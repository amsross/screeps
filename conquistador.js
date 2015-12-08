
module.exports = function(creep) {
  if (creep.room.controller) {
    if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
      creep.moveTo(creep.room.controller);
    }
  }
};
