# Contributing

Contributions are welcome.

## Local test

From this package directory:

```bash
npm run pack:check
pi -e . --name planner --project package-test -p "Respond only: OK"
```

For an end-to-end communication test, open two terminals and run two Pi agents with the same `--project` value, then ask one to use `coms_list`, `coms_send`, and `coms_await`.

## Release checklist

1. Update `CHANGELOG.md`.
2. Bump `package.json` version.
3. Run `npm run pack:check`.
4. Push to GitHub.
5. Publish to npm with `npm publish --access public`.
