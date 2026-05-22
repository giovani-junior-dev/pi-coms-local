# @script7sistema/pi-coms-local

Pi package for **local Pi-to-Pi bidirectional agent communication**.

It lets you run two or more independent Pi agents on the same machine and have them talk directly to each other as peers:

```txt
planner ⇄ coder
```

This package is based on the Pi-to-Pi communication work from [`disler/pi-vs-claude-code`](https://github.com/disler/pi-vs-claude-code#pi-to-pi-agent-to-agent-communication), adapted for current `@earendil-works/*` Pi package imports.

## What it installs

- Extension: `extensions/coms.ts`
- Tools exposed to the model:
  - `coms_list`
  - `coms_send`
  - `coms_get`
  - `coms_await`
- Prompt templates:
  - `planner.md`
  - `coder.md`
- Skill:
  - `pi-to-pi-local`

## Install locally

From the package folder:

```bash
pi install ./pi-coms-local-package
```

For a project-local install, run inside your target project:

```bash
pi install -l C:/Users/GEOVANE/Desktop/pi-coms-local-package
```

You can also test without installing:

```bash
pi -e C:/Users/GEOVANE/Desktop/pi-coms-local-package --name planner --project my-project
```

## Run two local agents

Open two terminals in the same project folder.

### Terminal 1 — planner

```bash
pi --name planner \
  --purpose "Plans work, reviews UX/copy/SEO/risks, and approves implementation" \
  --project my-project \
  --color "#36F9F6"
```

### Terminal 2 — coder

```bash
pi --name coder \
  --purpose "Implements approved plans, edits files, runs validation, and reports back" \
  --project my-project \
  --color "#FF7EDB"
```

### Terminal 2 — coder with DeepSeek

```bash
pi --model deepseek/deepseek-v4-pro \
  --name coder \
  --purpose "Implements approved plans using DeepSeek" \
  --project my-project \
  --color "#FF7EDB"
```

The important part is that both agents use the same `--project` value.

## Tool usage pattern

Ask one agent to use the tools explicitly:

```txt
Use coms_list to find planner. Then use coms_send to ask for approval of the implementation plan. Wait for the answer with coms_await before editing files.
```

Tools:

| Tool | Purpose |
| --- | --- |
| `coms_list` | List peers in the current project pool |
| `coms_send` | Send a prompt/message to a peer |
| `coms_get` | Poll message status without blocking |
| `coms_await` | Wait for a reply |

## Recommended roles

Planner prompt:

```txt
You are the planner. Do not edit files. Plan, review strategy, UX, copy, SEO, risks, and priorities. When you need technical context, ask coder via coms. Return clear, prioritized, implementable instructions.
```

Coder prompt:

```txt
You are the coder. You may edit files. Before large changes, consult planner via coms and wait for approval. Implement only the approved scope. Run validation and report changed files, commands run, validation result, risks, and next steps.
```

## Safety notes

- Keep one writer agent editing files at a time.
- Use `coms_await`, not `coms_wait`.
- Do not respond to an inbound message by sending a new `coms_send` back for the same message; answer normally to avoid ping-pong loops.
- Use the same `--project` value for all agents that should see each other.

## Publish / share

See [`PUBLISHING.md`](./PUBLISHING.md).

## Install from npm after publishing

```bash
pi install npm:@script7sistema/pi-coms-local
```

Temporary run:

```bash
pi -e npm:@script7sistema/pi-coms-local --name planner --project my-project
```

## Install from GitHub after publishing

```bash
pi install git:github.com/giovani-junior-dev/pi-coms-local
```

Temporary run:

```bash
pi -e git:github.com/giovani-junior-dev/pi-coms-local --name planner --project my-project
```
