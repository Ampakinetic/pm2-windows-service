# pm2-windows-service
Utility to make [PM2](https://github.com/Unitech/PM2) automatically resurrect on Windows startup. The utility achieves this by adding a native service to windows using the excellent https://github.com/stephenwvickers/node-os-service library.

To install, download from Github, then run:

``` bash
npm install
```

This will need a native Windows C build enviroment setup to compile the os-service module.  

Then run the following to install the service:

``` bash
node index.js --add
```

This will create a Windows called *Node.JS Process Manager (PM2) Service* - go to your Services list in Control Panel -> Administrative Tools -> Services.  

You will need to adjust the user that the service runs under, otherwise it won't be able to find PM2 which is in your user's roaming profile folders.  Go to the service properties, and then the "Log On" tab.  Set the user to your account, and restart the service.  

You should find that PM2 comes back up with a reboot and can still be controlled from the command line as before.

To save the current list of processes that PM2 executes:
``` bash
> pm2 save
```
