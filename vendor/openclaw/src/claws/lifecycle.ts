import path from "path";

// Snippet from upstream lifecycle.ts — included as vendorized core piece.

export async function addWorkspaceFileInspection(params: {
  sourceRoot?: string;
  source?: unknown;
  workspace: string;
  sourcePath: string;
  targetPath: string;
  id: string;
  manifestPath: string;
}) {
  // This is a vendor shim. Original OpenClaw carries a larger implementation.
  // Here we perform a simple validation and return a placeholder action.
  const { workspace, sourcePath, targetPath, id } = params;
  if (!workspace) {
    throw new Error("Workspace not provided");
  }
  return {
    pending: null,
    action: {
      kind: "workspaceFile",
      id,
      action: "write",
      target: path.resolve(workspace, targetPath),
      source: sourcePath,
      blocked: false,
    },
  } as const;
}

export const CLAW_BOOTSTRAP_FILE_NAMES = ["SOUL.md", "IDENTITY.md", "BOOTSTRAP.md"] as const;

export async function inspectWorkspaceFileAction(opts: {
  sourceRoot?: string;
  source?: unknown;
  workspace: string;
  sourcePath: string;
  targetPath: string;
  id: string;
  manifestPath: string;
}) {
  return addWorkspaceFileInspection(opts);
}
