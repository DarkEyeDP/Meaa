import type { IssueSlug, IssueTemplate } from "../types/lawmakers";

export const messageTemplates: Record<IssueSlug, IssueTemplate> = {
  "military-pay": {
    label: "Military Pay",
    subject: "Support Fair Compensation for Enlisted Service Members",
    body: `Dear {{recipientName}},

I am writing as a constituent from {{userState}} to urge your support for legislation that ensures fair and competitive compensation for enlisted military service members.

Enlisted personnel make up more than 80% of our armed forces. They serve with distinction, often under difficult and dangerous conditions, yet many junior enlisted families struggle to make ends meet. Annual pay adjustments have not consistently kept pace with inflation or the real cost of living near military installations.

I ask you to support a robust National Defense Authorization Act pay raise for enlisted service members, protect enlisted personnel from automatic pay cuts in any budget negotiations, and oppose any proposals that would reduce military compensation without equivalent offsets for affected families.

Our enlisted service members and their families deserve compensation that reflects their sacrifice and commitment to this nation.

Respectfully,
{{userName}}
{{userState}}{{userContactInfo}}`,
    phoneScript: `Hello, my name is {{userName}} and I am a constituent calling from {{userState}}. I am asking {{recipientName}} to support strong enlisted military pay in the NDAA and to oppose any cuts to service member compensation. Thank you for your time.`,
  },

  "housing-bah": {
    label: "Housing & BAH",
    subject: "Strengthen Housing Support for Enlisted Military Families",
    body: `Dear {{recipientName}},

I am writing as a constituent from {{userState}} to ask for your support in improving housing affordability and Basic Allowance for Housing (BAH) effectiveness for enlisted service members and their families.

Many enlisted families live in high-cost areas near military installations where BAH does not adequately cover actual rental costs. This forces service members to pay significant out-of-pocket housing expenses on already-modest salaries. Meanwhile, on-base housing shortages and privatized housing quality concerns continue to affect readiness and family stability.

I respectfully ask that you support full funding for BAH that accurately reflects median rental rates in military housing areas, increase oversight of privatized military housing to ensure safe and habitable conditions for families, and fund additional on-base housing construction where shortfalls exist.

Housing stability is a readiness issue. Enlisted families deserve to live in safe, affordable housing without financial hardship.

Respectfully,
{{userName}}
{{userState}}{{userContactInfo}}`,
    phoneScript: `Hello, my name is {{userName}} from {{userState}}. I am calling to ask that {{recipientName}} support policies to improve Basic Allowance for Housing adequacy and address the military housing shortage affecting enlisted families. Thank you.`,
  },

  healthcare: {
    label: "Healthcare Access",
    subject: "Protect Healthcare Access for Enlisted Service Members and Families",
    body: `Dear {{recipientName}},

I am writing from {{userState}} to urge your support in protecting and strengthening healthcare access for active duty enlisted service members and their families through TRICARE.

Enlisted families rely on TRICARE as a critical earned benefit. Benefit erosions, increased cost-sharing, network gaps, and long wait times at Military Treatment Facilities create serious hardship for families who have earned these benefits through their service. Access to behavioral and mental health care remains a significant gap for many junior enlisted service members.

Please oppose proposals to increase TRICARE premiums or cost-sharing for active duty enlisted families, support funding for Military Treatment Facilities and expanded behavioral health services, and ensure military families in remote assignments have access to quality civilian network providers.

Healthcare is a fundamental part of the military's promise to those who serve. Protecting that promise is essential to retention, readiness, and military family well-being.

Respectfully,
{{userName}}
{{userState}}{{userContactInfo}}`,
    phoneScript: `Hello, my name is {{userName}} from {{userState}}. I am calling to ask {{recipientName}} to oppose TRICARE cost increases for active duty enlisted families and to support expanded access to behavioral health services for service members. Thank you.`,
  },

  "family-support": {
    label: "Family Support",
    subject: "Strengthen Support Programs for Military Families",
    body: `Dear {{recipientName}},

I am writing from {{userState}} to ask for your support in strengthening resources and programs for military families, particularly those of enlisted service members.

Military spouses face unique employment challenges due to frequent relocations. Childcare wait times on military installations often exceed one year, leaving families with no affordable options. Military family resource centers are often understaffed and underfunded. These challenges fall disproportionately on enlisted families who have fewer financial resources to absorb these gaps.

I respectfully ask that you support funding for expanded on-base childcare facilities and fee assistance programs, support legislation that improves professional license portability for military spouses across state lines, and protect Family Readiness Program funding in the NDAA.

Strong families are the foundation of a strong military. Investing in family support is an investment in readiness and long-term retention.

Respectfully,
{{userName}}
{{userState}}{{userContactInfo}}`,
    phoneScript: `Hello, my name is {{userName}} from {{userState}}. I am calling to ask {{recipientName}} to support expanded childcare access and military spouse employment protections in the upcoming NDAA. Thank you.`,
  },

  "transition-success": {
    label: "Transition & Veteran Success",
    subject: "Improve Transition Support for Enlisted Veterans",
    body: `Dear {{recipientName}},

I am writing from {{userState}} to ask for your support in improving transition assistance and long-term success pathways for enlisted veterans leaving military service.

The transition from military to civilian life remains one of the most challenging periods for enlisted veterans. Despite the Transition Assistance Program, many veterans report feeling underprepared for civilian employment, education, and benefits navigation. VA claims backlogs and delays in accessing earned benefits compound these challenges significantly.

I ask that you support funding to modernize and expand the Transition Assistance Program with more personalized, skills-based career pathways, oppose any reductions to GI Bill education benefits for veterans, and support legislation to reduce VA claims processing delays and improve access to mental health resources.

Enlisted veterans have given years of their lives in service to this nation. They deserve a transition system that sets them up for lasting success.

Respectfully,
{{userName}}
{{userState}}{{userContactInfo}}`,
    phoneScript: `Hello, my name is {{userName}} from {{userState}}. I am calling to ask {{recipientName}} to support improved transition assistance for enlisted veterans and to oppose any reductions to GI Bill education benefits. Thank you.`,
  },
};

export const issueOrder: IssueSlug[] = [
  "military-pay",
  "housing-bah",
  "healthcare",
  "family-support",
  "transition-success",
];
