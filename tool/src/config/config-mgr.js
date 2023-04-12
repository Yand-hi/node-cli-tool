import Ajv from 'ajv';
import chalk from "chalk";
import { readFile } from 'fs/promises'
import { cosmiconfigSync } from "cosmiconfig";
import betterAjvErrors from 'better-ajv-errors';

const ajv = new Ajv();
const configLoader = cosmiconfigSync('tool');

const schema = JSON.parse(
  await readFile(
    new URL('./schema.json', import.meta.url)
  )
)

export function getConfig() {
  const result = configLoader.search(process.cwd());
  if (!result) {
    console.log(chalk.yellow('Could not find configuration, using default'));
    return { port: 1234 };
  } else {
    const validate = ajv.compile(schema);
    const valid = validate(result.config);
    if (!valid) {
      const output = betterAjvErrors(schema, result.config, validate.errors);
      console.log(output);
      process.exit(1);
    }
    else {
      console.log('Found configuration', result.config);
      return result.config;
    }
  }
}