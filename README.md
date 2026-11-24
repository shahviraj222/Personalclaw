# PersonalClaw

PersonalClaw is a Bun terminal assistant for working on a local codebase. It uses OpenRouter for model access and opens in the current working directory.

## Run locally

Install Bun, then run these commands in the project directory. If you already have a local `.env`, keep it and check the settings below.

```sh
bun install --frozen-lockfile
cp -n .env.example .env
```

Set `OPENROUTER_API_KEY` to your OpenRouter key and `DEFAULT_MODEL` to the OpenRouter model ID you want to use. Choose a model that supports tool calling and structured output for Plan mode. Bun loads the local environment file automatically.

```sh
bun run start
```

The original `bun index.ts wakeup` command also opens the menu.

## CLI modes

| Mode  | Workflow                                                                                                                           |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Agent | Describe a task. Review staged file changes and shell commands, then approve all, review individually, or cancel.                  |
| Plan  | Describe a goal, review the generated steps, select which to execute, and confirm. Review any staged changes before applying them. |
| Ask   | Ask a question about the workspace. You can save the answer as a Markdown file after reviewing the proposed creation.              |

## Optional web access

Leave `FIRECRAWL_API_KEY` empty to keep web tools disabled. PersonalClaw displays a startup notice and omits web search, crawling, and direct URL fetching from the tools sent to the model. Setting the key enables those tools in Ask and Plan. Agent and Plan can separately propose shell commands, which require your approval.

## Development

```sh
bun test
bun run typecheck
bun run format:check
bun run format
```

The VS Code workspace settings enable Prettier on save for TypeScript and TSX files with the Prettier extension installed.

PersonalClaw adapts the CLI workflows from [chaicodeclaw-build](https://github.com/Aestheticsuraj234/chaicodeclaw-build).
