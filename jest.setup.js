const { TextDecoder, TextEncoder } = require("util");
global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

// Or, if you installed the 'text-encoding' package:
// const { TextDecoder, TextEncoder } = require('text-encoding');
// global.TextDecoder = TextDecoder;
// global.TextEncoder = TextEncoder;
