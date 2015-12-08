
module.exports = function(creep) {
  var targets = creep.room.find(FIND_HOSTILE_CREEPS);
  targets = targets.filter(function(target) {
    return target.owner.username !== 'Source Keeper';
  });

  if (targets.length) {
    if (creep.attack(targets[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(targets[0]);
    }
  }
}
