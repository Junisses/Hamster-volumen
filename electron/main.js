const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const loudness = require('loudness');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), 
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // win.webContents.openDevTools(); 
  const startUrl = process.env.VITE_DEV_SERVER_URL || `file://${path.join(__dirname, '../dist/index.html')}`;
  win.loadURL(startUrl);
}

ipcMain.handle('get-volume', async () => await loudness.getVolume());
ipcMain.handle('set-volume', async (event, value) => await loudness.setVolume(value));

app.whenReady().then(() => {
  createWindow();
});
