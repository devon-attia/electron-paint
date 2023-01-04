paper.install(window);

function init() {
    let canvas = document.querySelector('canvas');

    paper.setup(canvas);
    
    // TODO: Set up a default active layer and make it a white background
    
    // const canvasBounds = new paper.Rectangle(0, 0, canvas.width, canvas.height);
    // canvasBounds.style = {fillColor: 'white'};
    // paper.project.Layer = new paper.Layer({bounds: canvasBounds});
    // paper.project.layers[0].activate();
    
}