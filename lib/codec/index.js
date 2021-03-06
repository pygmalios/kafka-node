'use strict';

var zlib = require('zlib'),
    snappyCodec = require('./snappy');

var gzipCodec = {
    encode: zlib.gzip,
    decode: zlib.gunzip,
    decodeSync: zlib.gunzipSync
};

var codecs = [
    null,
    gzipCodec,
    snappyCodec
];

function getCodec(attributes) {
    return codecs[attributes & 3] || null;
}

module.exports = getCodec;
