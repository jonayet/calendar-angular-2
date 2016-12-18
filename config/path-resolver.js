var path = require('path');
var rootPath = path.resolve(__dirname, '..');

function fullPath(args) {
    var paths = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [rootPath].concat(paths));
}

exports.fullPath = fullPath;