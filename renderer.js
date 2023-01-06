const api = window.electronAPI;

api.onNewFile((_event) => {
    init();
});

api.onUndo((_event) => {
    console.log("undoing last action!");
});

api.onNewLayer((_event) => {
    // add the new layer and set it to active
    paper.project.addLayer(new Layer());
    paper.project.layers[paper.project.layers.length-1].activate();
    console.log(paper.project.layers);
});