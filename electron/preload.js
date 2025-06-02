const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getVolume: () => ipcRenderer.invoke('get-volume'),
  setVolume: (value) => ipcRenderer.invoke('set-volume', value)
});
