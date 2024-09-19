# Deploy Your NextJS Frontend

{% hint style="success" %}
We recommend connecting your GitHub repo to Vercel (through the Vercel UI) so it gets automatically deployed when pushing to main.
{% endhint %}

If you want to deploy directly from the CLI, run this and follow the steps to deploy to Vercel:

```
yarn vercel
```

Once you log in, the default options should work. After each deployment, it will give you a public URL.

If you want to redeploy to the same production URL you can run:

```
yarn vercel --prod
```

If you omit the `--prod` flag it will deploy it to a preview/test URL.

By default, Vercel runs type and lint checks before building your app. The deployment will fail if there are any type or lint errors.

To ignore these checks while deploying from the CLI, use:

```
yarn vercel:yolo
```

If your repo is connected to Vercel, you can set `NEXT_PUBLIC_IGNORE_BUILD_ERROR` to `true` in an [environment variable](https://vercel.com/docs/concepts/projects/environment-variables).

**Make sure to check the values of your Scaffold Configuration before deploying your NextJS App.**
