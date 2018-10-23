const electron = require('electron');
const open = require('open');
const {app, BrowserWindow, clipboard, Menu} = electron;

app.on('ready', () => {
	let win = new BrowserWindow({width: 1200, height: 800});

	win.loadURL('https://hangouts.google.com');
	win.webContents.on('new-window', (event, url) => {
	  event.preventDefault();
	  open(url);
	});
	var template = [{
		label: "Application",
		submenu: [
				{ label: "About Application", selector: "orderFrontStandardAboutPanel:" },
				{ type: "separator" },
				{ label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
		]}, {
		label: "Edit",
		submenu: [
				{ label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
				{ label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
				{ type: "separator" },
				{ label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
				{ label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
				{ label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
				{ label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
		]}
	];

	Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});