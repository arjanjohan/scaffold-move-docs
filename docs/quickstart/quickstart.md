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

Visit your app on: `http://localhost:3000`. You can interact with your Move modules using the `Debug Modules` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

:::tip Local network
To develop against a local network, run `yarn chain` in a separate terminal, add `defaultChains.local` to `targetNetworks` in `scaffold.config.ts`, and use `--network local` with `yarn account` and `yarn deploy`.
:::

**What's next**:

* Edit your Move module `OnchainBio.move` in `packages/move/sources`
* Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
* Edit the Move unit tests in `packages/move/tests` and run them with `yarn test`.
