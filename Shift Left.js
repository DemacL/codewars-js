function shiftLeft(s, t) {
    let ct = t;
    while (!s.endsWith(ct) && ct.length > 0) {
        ct = ct.slice(1)
    }
    return s.length + t.length - ct.length * 2
}