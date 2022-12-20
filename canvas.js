paper.install(window);
window.onload = function() {
    let canvas = document.querySelector('canvas');
    paper.setup(canvas);
    
    let tool = new Tool();
    let path;

    tool.onMouseDown = function(event) {
        path = new Path();
        path.strokeColor = 'white';
        path.add(event.point);
    }

    tool.onMouseDrag = function(event) {
        path.add(event.point);
    }
}
