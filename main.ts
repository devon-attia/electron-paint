const { app, shell, BrowserWindow, Menu, MenuItem } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

//    
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts'),
    },
  });

  // production and develpment configuring
  const devTemplate = [  
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
      label: 'Layer',
      submenu: [
         {
           label: 'New Layer',
           click: () => win.webContents.send('new-layer')
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
    },
    {
      label: 'Dev Tools',
      role: 'toggleDevTools',
      accelerator: process.platform === 'darwin' ? 'Cmd+Opt+I' : 'Ctrl+Shift+I'
   }
  ]
  const productionTemplate = [  
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
      label: 'Layer',
      submenu: [
         {
           label: 'New Layer',
           click: () => win.webContents.send('new-layer')
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

  let menu;
  if(isDev) {
    menu = Menu.buildFromTemplate(devTemplate);
    win.webContents.openDevTools();
  } else {
    menu = Menu.buildFromTemplate(productionTemplate);
  }
  Menu.setApplicationMenu(menu);

  win.loadFile('index.html');
};

if (require('electron-squirrel-startup')) app.quit();

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