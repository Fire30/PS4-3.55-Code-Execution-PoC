function read64(addr) {
    var old_low = cbuf[0x14]
    var old_high = cbuf[0x15]
    cbuf[0x14] = addr.getLowBitsUnsigned()
    cbuf[0x15] = addr.getHighBitsUnsigned()
    var ret = new dcodeIO.Long(rop_buf[0], rop_buf[1], true)
    cbuf[0x14] = old_low
    cbuf[0x15] = old_high
    return ret;
}

function read32(addr) {
    return read64(addr).getLowBitsUnsigned()
}

function read16(addr) {
    return read32(addr) & 0xFFFF;
}

function read8(addr) {
    return read32(addr) & 0xFF;
}

function read_str(addr) {
    ret = ''
    var c = read8(addr)
    while (c != 0) {
        ret = ret.concat(String.fromCharCode(c))
        addr = addr.add(0x1)
        c = read8(addr)
    }
    return ret;
}

function read_data(addr, len) {
    var ret = new Uint32Array(len / 4);
    for (var i = 0; i < len / 4; i++) {
        ret[i] = read32(addr.add(i * 4))
    }
    return ret;
}


function write8(addr, val) {
    var old_low = cbuf[0x14]
    var old_high = cbuf[0x15]
    cbuf[0x14] = addr.getLowBitsUnsigned()
    cbuf[0x15] = addr.getHighBitsUnsigned()
    rop_buf[0] = (rop_buf & ~0xF) | (val & 0xFF)
    cbuf[0x14] = old_low
    cbuf[0x15] = old_high
}

function write16(addr, val) {
    write8(addr, val & 0xFF)
    write8(addr.add(0x1), (val >> 8) & 0xFF)
}

function write32(addr, val) {
    write16(addr, val & 0xFFFF);
    write16(addr.add(0x2), (val >> 0x10) & 0xFFFF)
}

function write64(addr, val) {
    write32(addr, val.getLowBitsUnsigned())
    write32(addr.add(0x4), val.getHighBitsUnsigned())
}

function write_str(addr, str) {
    for (var i = 0; i < str.length; i++) {
        write8(addr.add(i), str.charCodeAt(i))
    }
}

function write_data(addr, u32array) {
    for (var i = 0; i < u32array.length; i++) {
        write32(addr.add(i * 4), u32array[i])
    }
}
