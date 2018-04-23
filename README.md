# Simple tool to deploy smart contract

## Quick started

```
https://github.com/economicnetwork/eth-toolkit && cd eth-toolkit && make deps && make dev-server
# After this runs successfully, open another terminal and deploy a test Contract
CONTRACT_NAME=Contract make deploy
```

```
# Run once
make deps

# Start local server
make dev-server

# Deploy smart contract to local development
CONTRACT_NAME=Contract make deploy

# Deploying to mainnet and testnet is WIP
```

### Utilities

```
# Get deployed smart contract addresses
make address
```
