
module.exports = function(creep) {
  var targets = creep.room.find(FIND_MY_CREEPS, {
    filter: function(target) {
      return target.hits < target.hitsMax;
    }
  });

  if (targets.length) {
    var target = creep.pos.findClosestByRange(targets);
    if (creep.heal(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  } else {
    creep.moveTo(23, 24);
  }
}
