// === File for the tools functionality  
let penTool, eraserTool;
//TODO: make this changeable with a colorwheel
let color = 'blue'
let path;

penTool = new Tool();
penTool.onMouseDown = function(event) { 
    path = new Path();
    path.strokeColor = color;
    path.add(event.point);
}
penTool.onMouseDrag = function(event) {
    path.add(event.point);
}
penTool.onMouseUp = function(event) {
    console.log(paper.project.layers);
}


eraserTool = new Tool();
eraserTool.onMouseDown = function(event) {
    path = new Path();
    path.strokeWidth = 15;
    path.strokeColor = 'black';
    // blend-mode of layers is 'source-over' so that erasing with 'destination-out' doesnt affect other layers
    path.blendMode = 'destination-out';
    path.add(event.point);
}
eraserTool.onMouseDrag = function(event) {
    path.add(event.point);
}
