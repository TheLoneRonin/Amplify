import { readFileSync } from 'fs';
import { Command } from '../Faucet';

export function GetWallet() {
  return JSON.parse(readFileSync(Command.wallet).toString());
}