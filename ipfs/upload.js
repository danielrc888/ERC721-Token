async function run() {
    const { create } = await import('ipfs-http-client');
    const ipfs = await create();
    
    // we added three attributes, add as many as you want!
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "Ethereum Coin NFT",
            attributes: [
            {
                "trait_type": "I",
                "value": "10" 
            },
            {
                "trait_type": "Build",
                "value": "100"
            },
            {
                "trait_type": "On",
                "value": "500"
            },
            {
                "trait_type": "Web3",
                "value": "1000"
            }
            ],
            // update the IPFS CID to be your image CID
            image: "https://ipfs.io/ipfs/QmTiULDyqvzju81iXcxdxru5QxbQbATYH9Wf73hTvkKCsw",
            description: "Ethereum coin"
        })
    };

    const result = await ipfs.add(metadata);
    console.log(result);

    process.exit(0);
}

run();