const api = window.electronAPI;

api.onNewFile((_event) => {
    console.log("creating new file!");
});

api.onUndo((_event) => {
    console.log("undoing last action!");
});