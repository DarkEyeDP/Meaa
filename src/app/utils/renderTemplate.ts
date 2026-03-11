interface TemplateVars {
  recipientName?: string;
  userName?: string;
  userState?: string;
  userPhone?: string;
  userEmail?: string;
}

export function renderTemplate(template: string, vars: TemplateVars): string {
  const contactParts = [vars.userPhone, vars.userEmail].filter(Boolean);
  const userContactInfo = contactParts.length > 0 ? "\n" + contactParts.join("\n") : "";

  return template
    .replace(/\{\{recipientName\}\}/g, vars.recipientName || "Senator/Representative")
    .replace(/\{\{userName\}\}/g, vars.userName || "[Your Name]")
    .replace(/\{\{userState\}\}/g, vars.userState || "[Your State]")
    .replace(/\{\{userContactInfo\}\}/g, userContactInfo);
}
