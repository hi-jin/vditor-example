const { app, BrowserWindow } = require('electron');
const path = require('path');
let isDev = typeof import("electron-is-dev");

async function createWindow() {
    isDev = await import("electron-is-dev");

    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        trafficLightPosition: {
            x: 18,
            y: 14,
        },
        frame: true,
        titleBarStyle: 'hidden',
        title: "Vector MD",
        movable: true,
    });

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
