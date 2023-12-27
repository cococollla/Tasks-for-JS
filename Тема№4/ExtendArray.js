Array.prototype.last = function () {
    return this[this.length - 1];
}

Array.prototype.first = function () {
    return this[0];
}

Array.prototype.random = function () {
    let index = Math.floor(Math.random() * this.length);
    return this[index];
}
