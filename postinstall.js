'use strict';

var gcl = require('google-closure-library-latest'),
    path = require('path');
 
// Install the latest Google Closure tools into the third_party directory 
var installDir = path.join(__dirname, 'third_party/closure-library');
gcl(installDir);