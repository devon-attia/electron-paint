const { app, shell, BrowserWindow, Menu, MenuItem } = require('electron');
const url = require('url');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts'),
    },
  });

  // Menus
  const template = [  
    {
       label: 'File',
       submenu: [
          {
            label: 'New File',
            click: () => win.webContents.send('new-file')
          }
       ]
    },
    {
      label: 'Edit',
      submenu: [
         {
           label: 'undo',
           accelerator: process.platform === 'darwin' ? 'Cmd+Z' : 'Ctrl+Z',
           click: () => win.webContents.send('undo')
         }
      ]
    },
    {
       label: 'Help',
       submenu: [
          {
             label: 'Learn More',
             click: () => shell.openExternal('https://github.com/devon-attia/electron-paint')
          }
       ]
    }
  ]
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  win.loadFile('index.html');
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});