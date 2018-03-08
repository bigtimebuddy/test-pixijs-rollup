import * as PIXI from 'pixi.js';

console.log(PIXI.VERSION);

const app = new PIXI.Application({
    width: 400,
    height: 400
});

document.body.appendChild(app.view);

app.stage.addChild(new PIXI.Graphics()
    .beginFill(0x99cc00)
    .drawStar(200, 200, 5, 50)
);