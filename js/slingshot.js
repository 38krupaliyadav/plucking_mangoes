class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:10
        }
        this.bodyA= Body;
        this.pointB=pointB;
    }
    display(){
        this.sling = Constraint.create(options);
        World.add(world.this.sling);
        var pointB=this.pointB;
        var pointA = this.sling.bodyA.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        var pointB = this.pointB;
        strokeWeight(4);
    }
    attach(body){
        this.slingshot.bodyA=body;
    }
    fly(){
        this.slingshot.bodyA=null;
    }
}