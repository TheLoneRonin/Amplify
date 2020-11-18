import { interactWrite } from 'smartweave';
import { readFileSync } from 'fs';
import { Command } from '../Faucet';
import { arweave, ContractAddress } from '../Config';

export function GetWallet() {
  return JSON.parse(readFileSync(Command.wallet).toString());
}

export async function TransferTokens(target: string, qty: number) {
  const wallet = GetWallet();

  return await interactWrite(
    arweave,
    wallet,
    ContractAddress,
    {
      function: 'transfer',
      target,
      qty,
    },
  );
}