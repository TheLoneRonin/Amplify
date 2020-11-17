import 'colors';
import Express from 'express';
import BodyParser from 'body-parser';
import { program as Command } from 'commander';
import { UPLOAD } from './Config';

export const Server = Express();
export { Command };

Server.use(BodyParser.json());
Server.use(BodyParser.urlencoded({ extended: true }));

Command
  .description('Amplify Faucet | The server that issues staking tokens and complimentary faucet tokens')
  .option('--port [port]', 'the port to listen on', (process.env.PORT || '3000'))
  .option('--wallet [wallet]', 'the path to your Arweave wallet', (process.env.WALLET || '.arweave.creds.json'));

Command
  .command('start')
  .description('start the server')
  .action(async () => {
    Server.listen(Command.port, () => {
      console.log(`Amplify Faucet is running on PORT ${Command.port}`.green.bold);
    });
  });

Command.parse(process.argv);