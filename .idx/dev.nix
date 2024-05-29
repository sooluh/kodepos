{ pkgs, ... }: {
  channel = "stable-23.11";

  packages = [
    pkgs.nodejs_20
    pkgs.nodePackages.nodemon
  ];

  env = {
    ENABLE_RATE_LIMIT = true;
  };

  idx = {
    extensions = [
      "EditorConfig.EditorConfig"
      "ms-vscode.vscode-typescript-next"
      "oderwat.indent-rainbow"
      "wix.vscode-import-cost"
      "kamikillerto.vscode-colorize"
      "aaron-bond.better-comments"
    ];

    workspace = {
      onCreate = {
        npm-install = "npm install";
      };
    };
  };
}
