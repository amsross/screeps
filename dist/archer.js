
module.exports = function(creep) {
  var targets = creep.room.find(FIND_HOSTILE_CREEPS, {
    filter: function(target) {
      return target.owner.username !== 'Source Keeper';
    }
  });

  if (targets.length) {
    var target = creep.pos.findClosestByRange(targets);
    if (creep.rangedAttack(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  } else {
    creep.moveTo(22, 24);
  }
}
