# safe-env-cli

Pull encrypted, password-protected environment variables from a [safe-env](https://safe-envs.vercel.app) link straight into your `.env` file — no account, no install required.

## Usage

```bash
npx safe-env-cli <link>
```

You'll be prompted for the password. Once verified, the decrypted content is written to a `.env` file in your current directory — appended if one already exists, created fresh if it doesn't.

```bash
$ npx safe-env-cli https://safe-envs.vercel.app/view/aBc123XyZ9
✔ Enter the password for this link: ********
Success — appended to existing .env file.
```

No global install needed — `npx` downloads and runs it once, then forgets about it.

## What it does

1. Prompts for the password tied to the link (hidden input, like a normal password field)
2. Sends the password to the same API the safe-env web app uses to verify and decrypt the content
3. Writes the result to `.env` in whatever directory you ran the command from
4. The link is single-use — once viewed, it's deleted from the server, whether it was opened via this CLI or a browser

## Security model

- Content is encrypted client-side before it's ever sent to the server — the server stores only encrypted bytes and a hashed password, never anything readable
- Links auto-expire after a set time (2–5 minutes) even if never opened
- Links are deleted immediately after a successful view, so they can't be reused or shared twice
- The CLI reads the target server directly from the link you paste (via its domain), so it works against any deployment — local dev, staging, or production — without configuration

## Requirements

- Node.js 18 or later (uses the built-in `fetch` API)

## Install globally (optional)

If you'd rather not type `npx` every time:

```bash
npm install -g safe-env-cli
safe-env-cli <link>
```

## Related

- Web app: [safe-envs.vercel.app](https://safe-envs.vercel.app)
- Create a link there, share it, and pull it down with this CLI wherever you need the env vars.

## License

MIT