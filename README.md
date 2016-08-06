PS4 3.55 Code Execution
==============
This repo contains a PoC for getting code execution on ps4's with firmware version 3.55 It uses the same webkit vulnerability as the henkaku project. So far there is basic ROP working and returning to normal execution is included. Next steps will be to map a jit page sucessfully and getting actual shellcode executed.

Usage
==============
You need to edit the dns.conf to point to the ip address of your machine, and modify your consoles dns settings to point to it as well. Then run  
`python fakedns.py -c dns.conf`  
then  
`python server.py`  
Debug output will come from this process.  

Navigate to the User's Guide page on the PS4 and information about the exploit and all loaded modules should be printed out. This is an example of what running it will look like:
https://gist.github.com/Fire30/2e0ea2d73d3a1f6f95d80aea77b75df8

There are a few notes:
* The exploit is not 100% reliable currently. It is more like 80% which is good enough for our purposes. So if it does not work on first try, try a few more times. Also doing to much allocating after the sort() is called can make it more unstable.
* The process will crash after the rop is done executing.

Acknowledgements
================
xyz - Much of the code is based off of his code used for the henkaku project  
Anonymous contributor - WebKit vulnerability PoC  
CTurt - I basically copied his JuSt-ROP idea
