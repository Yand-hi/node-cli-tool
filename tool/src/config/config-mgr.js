import chalk from "chalk";
import { readPackageUp } from 'read-pkg-up';

export async function getConfig() {
  const { packageJson: { tool } } = await readPackageUp();

  if (tool) {
    console.log('Found configuration', tool);
    return tool;
  } else {
    console.log(chalk.yellow('Could not find configuration, using default'));
    return { port: 1234 };
  }
}