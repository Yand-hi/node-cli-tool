#!/usr/bin/env node
import arg from 'arg'
import chalk from 'chalk';
import { readPackageUp } from 'read-pkg-up';

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
    const { packageJson: { tool } } = await readPackageUp();
    if (tool) {
      console.log('Found configuration', tool);
      // TODO: do something with configuration
    } else {
      console.log(chalk.yellow('Could not find configuration, using default'));
      // TODO: get default configuration
    }
    console.log(chalk.bgCyanBright(argsMessage['--start']));
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