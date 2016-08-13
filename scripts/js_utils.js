_dview = null;

function u2d(low, hi) {
    if (!_dview) _dview = new DataView(new ArrayBuffer(16));
    _dview.setUint32(0, hi);
    _dview.setUint32(4, low);
    return _dview.getFloat64(0);
}

function d2u(d) {
    if (!_dview) _dview = new DataView(new ArrayBuffer(16));
    _dview.setFloat64(0, d);
    return {
        low: _dview.getUint32(4),
        hi: _dview.getUint32(0)
    };
}

function debug_log(msg) {
    $.ajax({
        url: '/debug/log/',
        type: 'POST',
        contentType: 'text/html',
        data: msg,
        processData: false,
        async: false
    });
}

function debug_bin(bin, name) {
    $.ajax({
        url: '/debug/bin/' + name,
        type: 'POST',
        contentType: 'application/octet-stream',
        data: bin,
        processData: false,
        async: false
    });
}
