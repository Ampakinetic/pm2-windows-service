"use strict";

var service = require('os-service');
var fs = require('fs');

if (process.argv[2] == "--add") {
    service.add ("Node.JS Process Manager (PM2) Service", {programArgs: ["--run"]}, function(error){ 
       if (error)
          console.trace(error);
    });
} else if (process.argv[2] == "--remove") {
    service.remove ("Node.JS Process Manager (PM2) Service", function(error){ 
       if (error)
          console.trace(error);
    });
    
} else if (process.argv[2] == "--run") {
    var logStream = fs.createWriteStream (process.argv[1] + ".log");

    service.run (logStream, function () {
    	  var spawnkill = require('child_process').spawn,
				lskill    = spawnkill('cmd.exe', ['/c', 'pm2 kill']);
				lskill.stdout.on('data', function (data) {
					console.log('shutdown stdout: ' + data);
				});
				
				lskill.stderr.on('data', function (data) {
						console.log('shutdown stderr: ' + data);
				});
				
				lskill.on('exit', function (code) {
						console.log('shutdown, process exited with code ' + code);
						service.stop (0);
				});
    });

    var spawn = require('child_process').spawn,
		ls    = spawn('cmd.exe', ['/c', 'pm2 resurrect']);
		
		ls.stdout.on('data', function (data) {
			console.log('stdout: ' + data);
		});
		
		ls.stderr.on('data', function (data) {
				console.log('stderr: ' + data);
		});
		
		ls.on('exit', function (code) {
			console.log('child process exited with code ' + code);
		});
} else {
    // Show usage...
}
