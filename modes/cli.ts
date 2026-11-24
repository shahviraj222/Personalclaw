import chalk from "chalk";
import { select, isCancel } from "@clack/prompts";
import { runAgentMode } from "./agent/orchestrator";
import { runAskMode } from "./ask/orchestrator";
import { runPlanMode } from "./plan/orchestrator";

export async function runCliMode() {
  while (true) {
    const mode = await select({
      message: "Choose CLI sub-mode",
      options: [
        { value: "agent", label: "Agent Mode" },
        { value: "plan", label: "Plan Mode" },
        { value: "ask", label: "Ask Mode" },
        { value: "back", label: "Exit PersonalClaw" },
      ],
    });

    if (isCancel(mode) || mode === "back") return;

    try {
      if (mode === "agent") await runAgentMode();
      if (mode === "ask") await runAskMode();
      if (mode === "plan") await runPlanMode();
    } catch (error) {
      console.error(
        chalk.red(error instanceof Error ? error.message : String(error)),
      );
    }
  }
}
