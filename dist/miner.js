
module.exports = function (creep) {

  creep.drop(RESOURCE_ENERGY);

  var targets = creep.room.find(FIND_SOURCES, {
    filter: function(target) {
      return target.energy > (target.energyCapacity / 2);
    }
  });
  if (creep.harvest(targets[1]) == ERR_NOT_IN_RANGE) {
    var path = creep.pos.findPathTo(targets[1]);
    creep.moveByPath( path );
  }
}
