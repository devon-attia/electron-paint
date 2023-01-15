const api = window.electronAPI;

api.onNewFile((_event) => {
    init();
});

api.onUndo((_event) => {
    console.log("undoing last action!");
});

api.onNewLayer((_event) => {
    paper.project.addLayer(new Layer({blendMode: 'source-over'})).activate();
    console.log(paper.project.layers);
});