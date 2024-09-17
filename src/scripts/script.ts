#!/usr/bin/env node

import commandLineArgs from 'command-line-args';
import { generateZero } from '../lib/index.js';

const optionsDefinition = [
    {name: 'start', alias: 's', type: Number},
    {name: 'end', alias: 'e', type: Number},
]

const options = commandLineArgs(optionsDefinition);

console.log(generateZero(options.start, options.end))