import BaseHTTPServer
import json
import SocketServer

#!/usr/bin/env python
import SimpleHTTPServer

HOST_NAME = '0.0.0.0'
PORT_NUMBER = 80

dump_index = 0


class PS4Server(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_GET(self):
        if '/scripts/' in self.path:
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            path = self.path[1:]
            self.wfile.write(open(path).read())
        else:
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(open('ps4sploit.html').read())

    def do_POST(self):
        if '/debug/log' in self.path:
            data_string = self.rfile.read(int(self.headers['Content-Length']))
            self.send_response(200)
            self.end_headers()
            print data_string
        if '/debug/bin' in self.path:
            global dump_index
            filename = self.path.split("/")[-1]
            if filename is "undefined":
                filename = 'dump_%s.bin' % dump_index
                dump_index += 1
            data_string = self.rfile.read(int(self.headers['Content-Length']))
            self.send_response(200)
            self.end_headers()
            f = open('dumps/'+filename, mode='wb')
            f.write(data_string)
            f.close()
            print 'Saved dump to %s' % filename

    def log_message(self, format, *args):
        pass


if __name__ == '__main__':
    dump_index = 0
    server_class = BaseHTTPServer.HTTPServer
    httpd = server_class((HOST_NAME, PORT_NUMBER), PS4Server)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
