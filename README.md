PS4 3.55 Code Execution
==============
This repo contains a PoC for getting code execution on ps4's with firmware version 3.55(Now with support for 3.15 and 3.50).  It uses the same webkit vulnerability as the henkaku project. So far there is basic ROP working and returning to normal execution is included. I have also included some helper methods to make researching a tad easier. Currently the documentation is pretty poor but I will  be updating it over time.

Usage
==============
You need to edit the dns.conf to point to the ip address of your machine, and modify your consoles dns settings to point to it as well. Then run  
`python fakedns.py -c dns.conf`  
then  
`python server.py`  
Debug output will come from this process.  

Navigate to the User's Guide page on the PS4 and information about the exploit and all loaded modules should be printed out. This is an example of what running it will look like:
https://gist.github.com/Fire30/2e0ea2d73d3a1f6f95d80aea77b75df8

If you want to try the socket test to work. Change the IP address at the bottom of ps4sploit.html to your computers and run a command such as `netcat -l 0.0.0.0 8989 -v`. You should see something like:
```
Listening on [0.0.0.0] (family 0, port 8989)
Connection from [192.168.1.72] port 8989 [tcp/sunwebadmins] accepted (family 2, sport 59389)
Hello From a PS4!
```

There are a few notes:
* The exploit is not 100% reliable currently. It is more like 80% which is good enough for our purposes. So if it does not work on first try, try a few more times. Also doing to much allocating after the sort() is called can make it more unstable.
* The process will crash after the rop is done executing.
* This is really only useful for researchers. There are many many more steps needed before this will be useful to normal users.

Acknowledgements
================
xyz - Much of the code is based off of his code used for the henkaku project  
Anonymous contributor - WebKit vulnerability PoC  
CTurt - I basically copied his JuSt-ROP idea  
xerpi - Used his idea for the socket code  
rck\`d - Finding bugs such as not allocating any space for a stack on function calls
Maxton - 3.50 support and various cleanup
Thunder07 - 3.15 support


Contributing
================
The code currently is a bit of a mess, so if you have any improvements feel free to send a pull request or make an issue. Also I am perfectly fine if you want to fork and create your own project.
