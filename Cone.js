define([
    'OpusWorldWind/OpusWorldWind',
    'WebWorldWind/WorldWind',
    'OpusWorldWind/RigidWedgeMesh'
], function(OpusWorldWind, WorldWind, RigidWedgeMesh) {
    var Cone = function(center, halfWidth, halfLength, halfHeight) {
        RigidWedgeMesh.call(this, center, 360, halfWidth, halfLength, halfHeight, 0);
        this._center = center;
    };
    Cone.prototype = Object.create(RigidWedgeMesh.prototype);

    OpusWorldWind.Cone = Cone;
    return Cone;
});
