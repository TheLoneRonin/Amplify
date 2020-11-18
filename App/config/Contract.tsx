import Arweave from 'arweave';
import { interactRead, interactWrite } from 'smartweave';
import { post } from 'superagent';

export const FaucetApi = 'http://localhost:3003';
export const ContractAddress = 'TUY1f1xSc5tzCEKhKsVylMB8ly2nOGDSGgEl9rR-m78';

export const arweave = Arweave.init({
  host: 'arweave.net',// Hostname or IP address for a Arweave host
  port: 443,          // Port
  protocol: 'https',  // Network protocol http or https
  timeout: 20000,     // Network request timeouts in milliseconds
  logging: false,     // Enable network request logging
});

export async function ClaimTokens(address: string) {
  const payload = await post(`${FaucetApi}/faucet`).send({ address });
  return payload.body;
}

export async function GetBalance(address: string, wallet) {
  const state = await interactRead(arweave, wallet, ContractAddress, { function: 'account', target: address });
  const arBalance = await arweave.wallets.getBalance(address);
  const balance = state.balance;
  const stake = state.stake;
  const gateway = state.gateway ? state.gateway : 'N/A';

  return { balance, stake, gateway, arBalance: arweave.ar.winstonToAr(arBalance) };
}

export async function WithdrawTokens(wallet, target: string, qty: number) {
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

export async function ConfigureGateway(wallet, gateway: string) {
  return await interactWrite(
    arweave,
    wallet,
    ContractAddress,
    {
      function: 'gateway',
      gateway,
    },
  );
}

export async function StakeTokens(wallet, qty: number) {
  return await interactWrite(
    arweave,
    wallet,
    ContractAddress,
    {
      function: 'stake',
      qty,
    },
  );
}

export async function WithdrawStakedTokens(wallet, qty: number) {
  return await interactWrite(
    arweave,
    wallet,
    ContractAddress,
    {
      function: 'withdraw',
      qty,
    },
  );
}