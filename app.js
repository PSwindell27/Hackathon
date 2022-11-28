let engine = Matter.Engine.create();

let render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1200,
        height: 1000
    }
});

let ground = Matter.Bodies.rectangle(800,600,610,60,{isStatic: true});


let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: {visible: false}
    }
});

render.mouse = mouse;
let stack = Matter.Composites.stack(600,200,20,20,0,0, function(x,y){
let sides = Math.round(Matter.Common.random(3,4));
// return Matter.Bodies.polygon(x,y,20,20);   
return Matter.Bodies.polygon(x,y,20,20, 3);
});
    


Matter.World.add(engine.world, [ stack, ground, mouseConstraint]);

Matter.Runner.run(engine);
Matter.Render.run(render);