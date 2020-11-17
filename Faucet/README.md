## Amplify Faucet

This server dispenses staked tokens as well as the complimentary faucet tokens. Please note that only 1,000,000 AMP tokens (10,000 claims) will be issued before the faucet becomes out of date. State is tracked in memory with `leveldb`.

### Command Line

```bash
$ faucet --help

Amplify Faucet | The server that issues staking tokens and complimentary faucet tokens

Options:
  --port [port]      the port to listen on (default: "3000")
  --wallet [wallet]  the path to your Arweave wallet (default: ".arweave.creds.json")
  -h, --help         display help for command

Commands:
  start              start the server
  help [command]     display help for command
```

#### Configuration

##### `--port`

The port the express server should listen to requests on

##### `--wallet`

The JWK wallet file as a `JSON` file.

#### Starting the server

```bash
faucet start --port 80
```

### Development

#### `yarn build`

Compiles the Faucet server into a binary.

#### `yarn start`

Starts the Faucet server.