deps:
	npm install
.PHONY: deps

dev-server:
	./node_modules/.bin/ganache-cli -m 'opinion destroy betray ...'
.PHONY: dev-server

build:
	./node_modules/.bin/truffle compile
.PHONY: build

address:
	./node_modules/.bin/truffle networks
.PHONY: address

deploy-local: build
	./node_modules/.bin/truffle migrate --network local
.PHONY: deploy-local

deploy-testnet: build
	./node_modules/.bin/truffle migrate --network ropsten
.PHONY: deploy-testnet

deploy-mainnet: build
	./node_modules/.bin/truffle migrate --network mainnet
.PHONY: deploy-mainnet

deploy: deploy-local
.PHONY: deploy
