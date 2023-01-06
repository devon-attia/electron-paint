paper.install(window);
let canvas = document.querySelector('canvas');

function init() {
    paper.setup(canvas);
    
    // set a default background on new files
    background = new Path.Rectangle(0, 0, canvas.width, canvas.height);
    background.style = {fillColor: 'white'};
    paper.project.layers[0].addChild(background);   
}