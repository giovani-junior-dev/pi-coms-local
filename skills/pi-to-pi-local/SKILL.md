---
name: pi-to-pi-local
description: Use local bidirectional Pi-to-Pi communication with planner/coder peer agents through coms tools.
---

# Pi-to-Pi Local Communication

Use this skill when the user wants multiple Pi agents on the same machine to collaborate bidirectionally as peers.

## When to Use

- One Pi should plan while another Pi codes.
- A coder agent should ask a planner/reviewer agent before implementing.
- The user wants different models collaborating, such as default model + DeepSeek.
- Agents should communicate directly, not through a parent/child subagent hierarchy.

## Tools

- `coms_list`: list local peer agents in the current project pool.
- `coms_send`: send a prompt to a peer agent.
- `coms_get`: poll for a response without blocking.
- `coms_await`: wait for a response.

## Procedure

1. Confirm peers are visible with `coms_list`.
2. Use `coms_send` with a clear target name and focused prompt.
3. Use `coms_await` if the current decision depends on the answer.
4. When receiving an inbound coms prompt, answer normally in the assistant response.
5. Avoid ping-pong loops: do not use `coms_send` merely to reply to the same inbound message.
6. Keep roles clear: planner/reviewer agents advise; coder agents implement.
7. Keep one writer agent editing files at a time.

## Recommended Prompts

Planner:

```txt
You are the planner. Do not edit files. Plan, review strategy, UX, copy, SEO, risks, and priorities. When you need technical context, ask coder via coms. Return clear, prioritized, implementable instructions.
```

Coder:

```txt
You are the coder. You may edit files. Before large changes, consult planner via coms and wait for approval. Implement only the approved scope. Run validation and report changed files, commands run, validation result, risks, and next steps.
```

## Pitfalls

- `coms_await` is the correct tool name; not `coms_wait`.
- Peers only see each other when they use the same `--project` namespace.
- Two writers editing the same worktree can conflict. Prefer one coder at a time.
- If a peer is not visible, check that both Pi sessions are running and in the same project.

## Verification

- `coms_list` shows the expected peer.
- `coms_send` returns a `msg_id`.
- `coms_await` returns the peer's assistant response.
- The receiving Pi displays the inbound prompt and answers normally.
