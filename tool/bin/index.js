#!/usr/bin/env node

import arg from 'arg'
import chalk from 'chalk';

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
    '--test': String,
  })
  const argsMessage = {
    '--start': 'starting the app',
    '--build': 'building the app',
    '--test': `${args['--test']}testing the app'`,
  }
  if (args['--start']) {
    console.log(chalk.bgCyanBright(argsMessage['--start']));
  } else if (args['--build']) {
    console.log(chalk.bgCyanBright(argsMessage['--build']));
  } else if (args['--test']) {
    console.log(chalk.bgCyanBright(argsMessage['--test']));
  }
} catch (error) {
  console.log(chalk.yellow(error.message));
  console.log()
  usage()
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start (Boolean)')}\tStarts the app
  ${chalk.greenBright('--build (Boolean)')}\tBuilds the app
  ${chalk.greenBright('--test  (String)')}\tTests the app`);
}