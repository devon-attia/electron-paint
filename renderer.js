const api = window.electronAPI;

api.onNewFile((_event) => {
    init();
});

api.onUndo((_event) => {
    console.log("undoing last action!");
});