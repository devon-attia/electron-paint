const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  onNewFile: (callback) => ipcRenderer.on('new-file', callback),
  onUndo: (callback) => ipcRenderer.on('undo', callback),
  onNewLayer: (callback) => ipcRenderer.on('new-layer', callback)
})