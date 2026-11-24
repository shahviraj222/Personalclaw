#!/usr/bin/env bun

import { Command } from "commander";
import { runWakeup } from "./tui/wakeup";

const program = new Command()

program.name("Personalclaw")
.description("This is opencalw gateway to make the projects")
.version("0.0.0.1")


program.command("wakeup")
.description("Show the Banner and then select your mode")
.action(async()=>{
    runWakeup()
})

program.parseAsync(program.argv)