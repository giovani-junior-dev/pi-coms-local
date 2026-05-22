# Publishing this package to pi.dev/packages

Pi package discovery is based on normal package distribution plus Pi metadata.
This package already includes the important metadata:

```json
{
  "keywords": ["pi-package"],
  "pi": {
    "extensions": ["./extensions/coms.ts"],
    "skills": ["./skills"],
    "prompts": ["./prompts"]
  }
}
```

## Option A — Publish through npm

1. Choose a final package name.

Recommended if publishing under a personal scope:

```json
"name": "@giovani-junior-dev/pi-coms-local"
```

2. Login to npm:

```bash
npm login
```

3. Test the package tarball:

```bash
npm pack
```

4. Publish:

```bash
npm publish --access public
```

5. Test install from Pi:

```bash
pi install npm:@giovani-junior-dev/pi-coms-local
```

or temporary run:

```bash
pi -e npm:@giovani-junior-dev/pi-coms-local --name planner --project test
```

6. Gallery visibility:

The Pi package gallery displays packages tagged with `pi-package` and a valid `pi` manifest. After publishing publicly to npm, wait for the gallery/index to refresh. If it does not appear, verify:

- package is public;
- `keywords` contains `pi-package`;
- `package.json` contains a valid `pi` manifest;
- package tarball includes extension files;
- package README clearly explains usage.

## Option B — Publish through GitHub

1. Create a GitHub repository, for example:

```bash
git init
git add .
git commit -m "Initial pi-coms-local package"
git branch -M main
git remote add origin https://github.com/giovani-junior-dev/pi-coms-local.git
git push -u origin main
```

2. Test install from Git:

```bash
pi install git:github.com/giovani-junior-dev/pi-coms-local
```

or temporary run:

```bash
pi -e git:github.com/giovani-junior-dev/pi-coms-local --name planner --project test
```

3. Tag releases:

```bash
git tag v0.1.0
git push origin v0.1.0
```

Then users can pin:

```bash
pi install git:github.com/giovani-junior-dev/pi-coms-local@v0.1.0
```

## Optional gallery metadata

Pi packages can include preview metadata under the `pi` key:

```json
"pi": {
  "extensions": ["./
