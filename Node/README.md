## Amplify Node

The Amplify node can deploy either an Amplify Full Node or an Amplify Probe Node.

- A full node acts as an Arweave Gateway and is tethered to a staked token.

- A probe node acts as a scanning tool for the network. To identify malicious nodes.

### Command Line

```bash
$ amplify [options] [command]

Amplify | A CLI tool to deploy an Amplify Full Node or Probe Node

Options:
  --host [host]      the host to listen on (default: "0.0.0.0")
  --port [port]      the port to listen on (default: "3000")
  --wallet [wallet]  the path to your Arweave wallet (default: ".arweave.creds.json")
  -h, --help         display help for command

Commands:
  start              starts a full node
  probe              starts a probe node
  help [command]     display help for command

```

#### Configuration

##### `--port`

The port the express server should listen to requests on

##### `--wallet`

The JWK wallet file as a `JSON` file.

#### Starting the server

```bash
amplify start --port 80
```

### Development

#### `yarn build`

Compiles the Amplify server into a binary.

#### `yarn start`

Starts the Amplify server.