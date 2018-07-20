let log = document.getElementById('log');

const msgSrc = `{GENDER, select,
    male {He}
    female {She}
    other {They}
  } found {RES, plural,
    =0 {no results}
    one {1 result}
    other {# results}
  }.`;

// NOTE: 
// If get here: Uncaught ReferenceError: require is not defined
// then install browserify, create a bundle with browserify scripts/main.js -o scripts/bundle.js
// and use <script src="/scripts/bundle.js"></script> in html file.
// Browserify has to be called after each change of the JS source file.
const MessageFormat = require('messageformat');
const mf = new MessageFormat('en');
const msg = mf.compile(msgSrc);

let localizedMessage = '';

localizedMessage = msg({ GENDER: 'male', RES: 1 }) ;   // 'He found 1 result.'
log.innerText += '\n' + localizedMessage;

localizedMessage = msg({ GENDER: 'female', RES: 1 }) ; // 'She found 1 result.'
log.innerText += '\n' + localizedMessage;

localizedMessage = msg({ GENDER: 'male', RES: 0 });    // 'He found no results.'
log.innerText += '\n' + localizedMessage;

localizedMessage = msg({ RES: 2 });                    // 'They found 2 results.'
log.innerText += '\n' + localizedMessage;
