# Offline AI Writing Model | ObjectWire Team Setup

Local AI for VS Code using Ollama + Continue. Zero API costs, zero data leakage, works offline.

---

## What This Is

A fully local AI writing assistant that runs on your hardware. No OpenAI. No Anthropic. No subscription.  
Every prompt stays on your machine (or your local network). The model learns nothing from your content.

---

## Part 1 | Single Machine Setup (Your Laptop or Desktop)

### Step 1 — Install Ollama

1. Go to [https://ollama.com](https://ollama.com) and download for Windows
2. Run the installer — it installs Ollama as a background service on port `11434`
3. Open PowerShell and verify: `ollama --version`

### Step 2 — Pull a Writing Model

Run ONE of these in PowerShell. Start with `mistral` (fastest, best for writing):

```powershell
# Recommended for writing (7B, ~4GB download)
ollama pull mistral

# Better reasoning, slower (8B, ~5GB download)
ollama pull llama3.1:8b

# Fastest, smallest, good for quick edits (3.8B, ~2GB download)
ollama pull phi3:mini
```

To test it works:
```powershell
ollama run mistral "Write a two-sentence news lede about the 2026 World Cup."
```

### Step 3 — Install the Continue VS Code Extension

1. In VS Code: open Extensions (`Ctrl+Shift+X`)
2. Search `Continue.continue` — install it
3. A chat icon appears in the left sidebar

### Step 4 — Configure Continue with the ObjectWire System Prompt

1. Open the Continue config file:
   - Press `Ctrl+Shift+P` → type `Continue: Open config.json`
   - Or navigate to: `C:\Users\[YourName]\.continue\config.json`

2. Replace the contents with this:

```json
{
  "models": [
    {
      "title": "Mistral (Local)",
      "provider": "ollama",
      "model": "mistral",
      "systemMessage": "You are a news journalist writing for ObjectWire, a verified news platform. Follow these rules strictly:\n\n- Write in a direct, factual, newspaper style. Short sentences.\n- Never use em dashes (—) or en dashes (–). Use commas or rewrite.\n- Never use phrases like: 'certainly', 'it's worth noting', 'in conclusion', 'as an AI', 'I'd be happy to', 'great question'.\n- No hedging language. State facts directly.\n- H2 headings use | as separator, never : followed by a clause.\n- Use | in headings as separators, never —.\n- No generic subheadings like 'Background', 'Overview', or 'Introduction'.\n- All links must be blue and underlined. External links get target=_blank.\n- Meta descriptions: 130-155 characters, primary keyword in first 60 characters.\n- Write for real search intent. Every claim must be traceable to a source.\n- Use proper nouns in tags, not generic terms."
    }
  ],
  "tabAutocompleteModel": {
    "title": "Mistral (Autocomplete)",
    "provider": "ollama",
    "model": "mistral"
  },
  "customCommands": [
    {
      "name": "news-lede",
      "prompt": "Write a strong news lede (first paragraph) for this article. No em dashes. Direct, factual, newspaper style. Include the most important fact in the first sentence.",
      "description": "Write a news lede"
    },
    {
      "name": "fix-ostandard",
      "prompt": "Review this text for OStandard violations: remove all em dashes (—), remove en dashes (–), fix any generic headings like 'Overview' or 'Background', ensure all headings use | not : as separators, remove AI-sounding phrases. Return the corrected version only.",
      "description": "Fix OStandard violations"
    },
    {
      "name": "meta-desc",
      "prompt": "Write a metadata description for this article. Requirements: 130-155 characters exactly, primary keyword in first 60 characters, no generic phrases like 'learn more' or 'find out'. Return the description text only, no quotes.",
      "description": "Write a meta description"
    },
    {
      "name": "h2-headings",
      "prompt": "Suggest 5 H2 headings for this article. Rules: keyword-rich and specific, use | as separator (not :), no generic headings like 'Background' or 'Overview', each heading should reflect a real section of the article.",
      "description": "Generate H2 headings"
    }
  ]
}
```

3. Save the file. Continue reloads automatically.

### Step 5 — Using It in VS Code

| Action | How |
|---|---|
| Open chat | Click Continue icon in left sidebar, or `Ctrl+L` |
| Inline edit | Select text, press `Ctrl+I`, type instruction |
| Run a custom command | In chat, type `/news-lede`, `/fix-ostandard`, `/meta-desc`, `/h2-headings` |
| Autocomplete | Just start typing — Continue suggests completions inline |

---

## Part 2 | Shared Team Model (Multiple Machines on Same Network)

You can run Ollama on ONE powerful machine and have everyone else connect to it over your local network or VPN. No one else needs to download the model.

### Option A — Local Office Network (Same WiFi/Ethernet)

**On the host machine (your main desktop or a dedicated server):**

1. Install Ollama normally (Step 1 above)
2. Pull the model (Step 2 above)
3. Configure Ollama to listen on all network interfaces:

   Open PowerShell as Administrator and run:
   ```powershell
   # Set Ollama to accept connections from other machines
   [System.Environment]::SetEnvironmentVariable("OLLAMA_HOST", "0.0.0.0:11434", "Machine")
   
   # Restart Ollama service
   Stop-Service -Name "Ollama" -ErrorAction SilentlyContinue
   Start-Service -Name "Ollama" -ErrorAction SilentlyContinue
   ```

4. Find your host machine's local IP:
   ```powershell
   ipconfig | Select-String "IPv4"
   # Example result: 192.168.1.50
   ```

5. Make sure Windows Firewall allows port 11434:
   ```powershell
   New-NetFirewallRule -DisplayName "Ollama AI" -Direction Inbound -Protocol TCP -LocalPort 11434 -Action Allow
   ```

**On each employee machine (laptop, other desktop):**

1. Install VS Code and the Continue extension (they do NOT need Ollama installed)
2. Create/edit `C:\Users\[TheirName]\.continue\config.json`:

```json
{
  "models": [
    {
      "title": "ObjectWire AI (Shared)",
      "provider": "ollama",
      "model": "mistral",
      "apiBase": "http://192.168.1.50:11434",
      "systemMessage": "You are a news journalist writing for ObjectWire..."
    }
  ]
}
```

Replace `192.168.1.50` with your host machine's actual local IP.

That is it. Everyone now uses the same model running on your machine.

---

### Option B — Remote Access / Work From Home (Tailscale VPN)

If employees work from different locations or from home, use Tailscale. It creates a private encrypted network between all your machines — as if they were on the same office network.

**Setup (10 minutes total):**

1. Go to [https://tailscale.com](https://tailscale.com) — free for up to 3 users, $6/user/month after
2. Install Tailscale on the host machine (your desktop) and sign in
3. Install Tailscale on each employee machine and sign in with the same account (or invite them to your network)
4. Tailscale gives the host machine a stable IP like `100.64.x.x`
5. Employees use that Tailscale IP in their `config.json` `apiBase` field — same as Option A

This works from anywhere in the world. The connection is end-to-end encrypted.

---

### Option C — Dedicated Local AI Server (Best for 5+ People)

If you have a spare desktop or want dedicated hardware, run it headless as an always-on AI server.

**Recommended hardware (minimum):**
- 16GB RAM
- NVIDIA GPU with 8GB+ VRAM (RTX 3070 or better) — runs models 5-10x faster
- Without GPU: still works on CPU, just slower (10-30 seconds per response)

**Setup:**
- Install Windows or Ubuntu on the machine
- Install Ollama and pull the model
- Configure `OLLAMA_HOST=0.0.0.0:11434` as above
- Combine with Tailscale for remote access

---

## Part 3 | Keeping Everyone on the Same Model Version

When you want to update the model or switch to a better one:

1. On the host machine: `ollama pull llama3.1:8b` (or whatever new model)
2. Update the `"model"` field in `config.json` on each employee machine
3. If you use a shared config approach (see below), push the config file and everyone updates at once

### Shared Config via This Repo

You can store the team config in this repository so everyone always has the same prompts and settings:

1. Create `config/continue-config.json` in this repo with the shared config
2. Employees copy it to their `~/.continue/config.json` when onboarding
3. When you update prompts (e.g. new OStandard rules), they pull the repo and re-copy

---

## Model Comparison | Which to Use

| Model | Size | Speed | Best For |
|---|---|---|---|
| `phi3:mini` | 2.2GB | Very fast | Quick edits, autocomplete |
| `mistral` | 4.1GB | Fast | News writing, headlines, meta descriptions |
| `llama3.1:8b` | 4.7GB | Medium | Longer articles, research, reasoning |
| `llama3.1:70b` | 40GB | Slow | Best quality, needs 64GB RAM or strong GPU |
| `deepseek-r1:8b` | 4.7GB | Medium | Strong at structured writing and following rules |

**Recommendation for ObjectWire:** Start with `mistral`. It follows system prompt rules well and is fast enough for real-time use.

---

## Security Notes

- The Ollama API has no authentication by default. On a local network this is fine. Do not expose port 11434 to the public internet.
- Tailscale handles authentication at the network level — only approved devices can connect.
- No article content, headlines, or Supabase data ever leaves your network.

---

## Quick Reference Commands

```powershell
# Start Ollama (runs automatically on Windows after install)
ollama serve

# List downloaded models
ollama list

# Pull a new model
ollama pull mistral

# Remove a model
ollama rm mistral

# Check what is running
ollama ps

# Test a model directly
ollama run mistral "Rewrite this headline without em dashes: Sales Rise — Record Quarter"
```
