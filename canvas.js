paper.install(window);
window.onload = function() {
    let canvas = document.querySelector('canvas');
    paper.setup(canvas);
    
    let penTool = new Tool();
    let path;

    penTool.onMouseDown = function(event) {
        path = new Path();
        path.strokeColor = 'white';
        path.add(event.point);
    }

    penTool.onMouseDrag = function(event) {
        path.add(event.point);
    }  
}