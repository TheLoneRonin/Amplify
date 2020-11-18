import 'colors';
import Express from 'express';
import BodyParser from 'body-parser';
import { program as Command } from 'commander';
import { DispenseTokens } from './routes/Faucet.routes';

export const Server = Express();
export { Command };

Server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  return next();
});

Server.use(BodyParser.json());
Server.use(BodyParser.urlencoded({ extended: true }));

Server.post('/faucet', DispenseTokens);

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