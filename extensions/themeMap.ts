import type { ExtensionAPI, ExtensionContext } from "@earendil-works/pi-coding-agent";

/**
 * Minimal local shim for extensions copied from disler/pi-vs-claude-code.
 * The original repo maps many showcase themes; for this project we only need
 * the coms extension to boot reliably.
 */
export function applyExtensionDefaults(fileUrl: string, ctx: ExtensionContext): void {
  if (!ctx.hasUI) return;
  try {
    ctx.ui.setTitle("π - coms");
  } catch {
    // UI calls are best-effort.
  }
}

// Pi auto-loads every .ts file under .pi/extensions. Export a no-op factory so
// this helper can safely live next to coms.ts.
export default function (_pi: ExtensionAPI): void {}
