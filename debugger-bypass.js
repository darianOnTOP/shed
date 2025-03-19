function getError() {
    try {
        throw new Error();
    }
    catch (error) {
        return error.stack;
    }
}

let _eval = eval;
globalThis.__defineGetter__("eval", function () {
    if (getError().includes("Number.b")) {
        return () => {};  
    }
    return _eval;
})
