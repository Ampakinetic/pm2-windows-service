# pm2-windows-service
Utility to make [PM2](https://github.com/Unitech/PM2) automatically resurrect on Windows startup. The utility achieves this by adding a service to windows.

## Installation and usage
> npm install pm2-windows-service -g
``` bash
> pm2-service --add
```


PM2 will now automatically revive the saved processes on startup. To save the current list of processes execute:
``` bash
> pm2 save
```
