function asincrona() {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a)
        } catch (e) {
            callback(e);
        }
    }, 1000);
}