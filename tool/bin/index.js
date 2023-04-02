#!/usr/bin/env node

const arg = require('arg');

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
    '--test': String,
  })
  if (args['--start']) {
    console.log('starting the app');
  } else if (args['--build']) {
    console.log('building the app');
  } else if (args['--test']) {
    console.log('testing the app', args['--test']);
  }
} catch (error) {
  console.log(error.message);
  console.log()
  usage()
}

function usage() {
  console.log(`tool [CMD]
  --start(Boolean)\tStarts the app
  --build(Boolean)\tBuilds the app
  --test(String)\tTests the app`);
}