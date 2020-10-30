import { readFileSync } from 'fs';
import { Command } from '../Gateway';

export function GetWallet() {
  return JSON.parse(readFileSync(Command.wallet).toString());
}