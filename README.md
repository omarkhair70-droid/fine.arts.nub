# Studio Rescue — Fine Arts Student Toolkit

**An Arabic-first experimental web toolkit for art students facing deadlines, idea blocks, jury preparation, and artist-statement writing.**

[Live experiment](https://fine-arts-nub.vercel.app)

> **Positioning:** supporting / experimental work. This repository is intentionally not presented as a flagship product in the main portfolio.

## What it does

Studio Rescue turns common Fine Arts student problems into focused guided tools:

- **Emergency Plan** — execution steps, material alternatives, and a defense line for urgent submissions.
- **Idea Generator** — practical project directions based on the student's context.
- **Jury Preparation** — likely questions and structured answers for critique/review sessions.
- **Artist Statement** — short, formal, and editable ways to explain the work.
- **Start flow** — helps a student choose the most relevant tool when they are unsure where to begin.

The product is Arabic-first and RTL, with rule/template-driven outputs rather than presenting generated content as authoritative academic judgment.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Rule/template-driven generators

## Structure

- `app/tools/emergency` — deadline rescue
- `app/tools/ideas` — idea generation
- `app/tools/jury` — jury preparation
- `app/tools/statement` — artist statement
- `lib/data` / `lib/generators` / `lib/rules` — deterministic content foundations

## Status

**Live experiment / supporting proof.**
