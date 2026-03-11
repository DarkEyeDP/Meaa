interface TemplateVars {
  recipientName?: string;
  userName?: string;
  userState?: string;
}

export function renderTemplate(template: string, vars: TemplateVars): string {
  return template
    .replace(/\{\{recipientName\}\}/g, vars.recipientName || "Senator/Representative")
    .replace(/\{\{userName\}\}/g, vars.userName || "[Your Name]")
    .replace(/\{\{userState\}\}/g, vars.userState || "[Your State]");
}
