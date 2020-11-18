const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1320,
        height: 860,
        webPreferences: {
            nodeIntegration: true,
        },
        icon: './public/images/amplify.png',
    });
    
    win.setMenuBarVisibility(false);
    win.loadFile('out/index.html');
    win.webContents.openDevTools();
}

app
.whenReady()
.then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('active', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});