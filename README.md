# ethhole
How the token flows

## Data

In `src/data` Layer 2 and side chain bridge contracts balances are list by date.

The format is

```
projectName: {
    tvl: // in eth
    bridges: [
        {
            address,
            quote_currency, // eth
            chain_id,
            items: [
                {
                    contract_ticker_symbol,
                    balance,
                    quote, // value
                }
            ]
        }
    ]
}
```

Can explorer data with JSON viewer, ex http://jsonviewer.stack.hu/

## Usage

Install `deno` from https://deno.land/#installation

```sh
deno run --allow-net --allow-write scripts/fetch_data.js --key [COVALENT_API_KEY]
```

Get covalent API key from https://www.covalenthq.com/platform/#/auth/register/

## Contribution

Can define new contracts in
https://github.com/gasolin/ethhole/blob/main/src/data/bridge_contracts.js

## License

MIT License