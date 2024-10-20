# NFT or ERC-721 Token using Hardhat

This project shows how to build a NFT or ERC-721 Token deployed on Sepolia ETH Testnet using Hardhat. It uses OpenZeppelin ERC-721 Standard.

Install the dependencies:

```shell
npm install
```

Create a .env file that contains these keys

```
SEPOLIA_TESTNET_RPC_URL= # YOUR_RPC_URL
TESTNET_PRIVATE_KEY= # YOUR PRIVATE KEY
```

Fill the key values with your own values


To deploy in sepolia testnet run the following command:
```shell
npx hardhat run scripts/deploy.js --network sepolia
```

You will see the deployed contract address in your terminal

Go to https://sepolia.etherscan.io/ and input your outputted Token address to see your deployed NFT contract on Sepolia!
