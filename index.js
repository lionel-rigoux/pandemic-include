#!/usr/bin/env node
const fs = require ('fs');
const path = require ('path');
const mdinclude = require ('mdinclude');

// read from stdin
var content = fs.readFileSync (0, 'utf8');

content = mdinclude (
  content,
  {
    sourcePath: path.join(process.env.PANDOC_SOURCE_PATH || process.cwd(), 'source')
  }
);

// write to the pipe
process.stdout.write(content);
