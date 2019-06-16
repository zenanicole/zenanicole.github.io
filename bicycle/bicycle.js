(function () {
    "use strict"
    var createBicyclePrototype = function () {
        return {
            speed: 0,
            applyBrake: function (val) { return this.speed = - val; },
            speedUp: function (val) { return this.speed = + val; }
        }
    };

    var createMountainBikePrototype = function (obj) {
        return {
            gear: 1,
            setGear: function (val) { this.gear = val },
            __proto__: Object.create(obj)
        }
    };

    var start = function () {
        var Bike = createBicyclePrototype();
        var Bike2 = createBicyclePrototype();
        Bike2.speedUp(45);
        var MountainBike = createMountainBikePrototype(Bike);
        console.log(MountainBike)
        console.log(Bike)

        var MountainBik2 = createMountainBikePrototype(Bike2);
        MountainBik2.setGear(5);
        console.log(MountainBik2);
        MountainBik2.__proto__.applyBrake(-15);
        console.log(MountainBik2);
    };
    start();
}());