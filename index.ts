#!/usr/bin/env bun

import { Command } from "commander";
import { runWakeup } from "./tui/wakeup";

const program = new Command();

program
  .name("personalclaw")
  .description("PersonalClaw terminal coding assistant")
  .version("0.0.0.1");

program
  .command("wakeup", { isDefault: true })
  .description("Show the Banner and then select your mode")
  .action(async () => {
    await runWakeup();
  });

await program.parseAsync(process.argv);
