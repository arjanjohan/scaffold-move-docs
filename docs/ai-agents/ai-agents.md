---
sidebar_position: 7.5
---

# 🤖 AI Coding Agents

Scaffold Move ships with setup for coding agents (Claude Code, Cursor, Codex, OpenCode and others):

* `AGENTS.md` describes the repo's conventions and gotchas: one CLI per network, upgrade rules, generated files and the frontend hooks. `CLAUDE.md` points to it.
* The [Context7](https://context7.com) MCP server gives agents current library docs (`.mcp.json`, `.cursor/mcp.json`, `opencode.json`).
* Skills in `.agents/skills`, linked from `.claude/skills` and `.cursor/skills`, all checked on both Movement and Aptos:
  * `add-module`: a new module end to end, from Move code and tests to deployment and a page.
  * `move-security`: common security pitfalls in Move modules.
  * `fungible-asset` and `digital-asset`: tokens and NFTs, each starting from a tested example module.
  * `indexer`: lists and history through the GraphQL indexer, and how the two networks' indexers differ.
* `scaffold-move-reviewer`, a code-review agent in `.agents/agents`, linked from `.claude/agents` and `.cursor/agents`.
