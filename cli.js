#!/usr/bin/env node
const meu = require('./index.js')
for(let i = 1;i < process.argv.length;i++){
  console.log(meu(process.argv[i]))
}