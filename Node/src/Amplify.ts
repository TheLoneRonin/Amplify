import 'colors';
import Express from 'express';
import BodyParser from 'body-parser';
import { program as Command } from 'commander';

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

Command
  .description('Amplify | A CLI tool to deploy an Amplify Full Node or Probe Node')
  .option('--host [host]', 'the host to listen on', (process.env.HOST || '0.0.0.0'))
  .option('--port [port]', 'the port to listen on', (process.env.PORT || '3000'))
  .option('--wallet [wallet]', 'the path to your Arweave wallet', (process.env.WALLET || '.arweave.creds.json'));

Command
  .command('start')
  .description('starts a full node')
  .action(async () => {
    Server.listen(Command.port, () => {
      console.log(`Amplify Full Node is running on ${Command.host}:${Command.port}`.green.bold);
    });
  });

Command
  .command('probe')
  .description('starts a probe node')
  .action(async () => {
    Server.listen(Command.port, () => {
      console.log(`Amplify Probe Node is running on ${Command.host}:${Command.port}`.green.bold);
    });
  });

Command.parse(process.argv);