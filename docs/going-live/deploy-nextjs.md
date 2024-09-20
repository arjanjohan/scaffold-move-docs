---
sidebar_position: 5 
slug: /deploy/nextjs
---

# Deploy Your NextJS Frontend

:::tip Suggestion
The best way to publish your NextJS frontend is by connecting your GitHub repo to Vercel on the Vercel website. That way, it will get redeployed everytime you push changes to main.
:::

If you want to manually deploy from the CLI, run this command and follow the steps on the screen:

```
yarn vercel
```

This will generate a .yarn directory in your project where the configuration of your deployment is stored.

After each deployment, you will be shown a new preview/test URL. On the Vercel website, you can promote the new deployment to production. To redeploy to the production URL directly, you can run:

```
yarn vercel --prod
```

Vercel runs type and lint checks before building your app, and deployment will fail if there are any type or lint errors. 

To ignore these checks while deploying from the CLI, use:

```
yarn vercel:yolo
```

If your connected the Github repo on the Vercel website, you can ignore type and lint checks by setting `NEXT_PUBLIC_IGNORE_BUILD_ERROR` to `true` in an [environment variable](https://vercel.com/docs/concepts/projects/environment-variables).
