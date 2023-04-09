#!/usr/bin/env node
import arg from 'arg'
import chalk from 'chalk';
import { start } from "../src/commands/start.js";
import { getConfig } from "../src/config/config-mgr.js";

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
    '--test': String,
  })
  if (args['--start']) {
    const config = await getConfig();
    start(config)
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