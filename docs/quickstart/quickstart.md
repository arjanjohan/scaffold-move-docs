---
sidebar_position: 2
---

# 🏃‍♂️ Quickstart

### Requirements

Before you begin, you need to install the following tools:

* [Node (>= v20)](https://nodejs.org/en/download/)
* Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
* [Git](https://git-scm.com/downloads)
* The CLI for the network(s) you deploy to:
  * Movement: [Movement CLI](https://docs.movementnetwork.xyz/devs/movementcli) 7.4.x. Movement only accepts Move bytecode v7, which newer Aptos CLIs can't produce.
  * Aptos: [Aptos CLI](https://aptos.dev/build/cli) 9.6 or newer (`aptos update aptos`). The Aptos framework needs a recent CLI to compile.

### Quickstart

To get started with Scaffold Move, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/arjanjohan/scaffold-move.git
cd scaffold-move
yarn install
```

2. Create an account:

```
yarn account
```

This command creates an account for the default network (`defaultNetwork` in `packages/move/move.config.ts`) and funds it from the faucet when the network has a faucet API. Use `--network` for another network, e.g. `yarn account --network aptos_testnet`. Valid networks are the keys of `defaultChains` in `packages/common/chains.ts`, or `custom` together with `--rest-url` (and optionally `--faucet-url`). See [Chains](../utils/chains.md).

Every network gets its own account, stored as a CLI profile named after the network in `packages/move/.movement/config.yaml` (Movement) or `packages/move/.aptos/config.yaml` (Aptos). Running `yarn account` again for a network keeps its existing account. Add `--new` to create a new one; the previous account is kept as a profile named `<network>_old_<timestamp>`.

3. Deploy the test modules:

```
yarn deploy
```

This command deploys the Move modules in `packages/move/sources` to the default network, or to `--network <network>`. The modules can be modified to suit your needs. `packages/move/scripts/deploy.ts` publishes them with the network's CLI, deploying the addresses set to `'_'` in `Move.toml` to the network's account. After this it runs `packages/move/scripts/load-modules.ts` to make the new modules available in the NextJS frontend.

`Move.toml` depends on Movement's framework. For Aptos networks the scripts compile against the Aptos framework with `--override-std`. `yarn compile` and `yarn test` also take `--network`.

4. On a second terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your Move modules using the `Debug Modules` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`. The app starts on the first network in its `targetNetworks` (Movement testnet, the same as `yarn deploy`) and follows the network of the connected wallet.

**What's next**:

* Edit your Move module `OnchainBio.move` in `packages/move/sources`
* Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
* Edit the Move unit tests in `packages/move/tests` and run them with `yarn test`.

### Local network

To develop against your own node instead of a testnet:

1. Start a local node with a faucet. It needs ports 8080 (node API) and 8081 (faucet) to be free.

```
yarn chain
```

Every `yarn chain` starts a new, empty chain, so run step 2 again after each start.

2. In a second terminal, create (or refund) your account and deploy:

```
yarn account --network local
yarn deploy --network local
```

3. Add the local network to the app: uncomment `defaultChains.local` in `targetNetworks` in `packages/nextjs/scaffold.config.ts`.
4. Connect a wallet that supports a local or custom network at `http://127.0.0.1:8080/v1`.
5. Fund your wallet account with "Faucet" in the wallet dropdown, or with `yarn faucet <address> --network local`.

### Faucet

`yarn faucet <address>` sends 1 token to an address, for example a browser wallet. Add `--network <network>` for a network other than the default. It works for networks that have a faucet API (`faucet_api` in [Chains](../utils/chains.md)), such as the local network and Movement testnet. Aptos testnet's faucet is web-only: https://aptos.dev/network/faucet

### Supported wallets

Scaffold Move supports and is tested with these wallets:

* [Nightly](https://nightly.app)
* [Razor](https://razorwallet.xyz)
* [Motion](https://motion.movementnetwork.xyz)
* [Petra](https://petra.app)

[Pontem](https://pontem.network/pontem-wallet) is not supported. Other wallets appear under "More Wallets" in the connect dialog, but are untested.
