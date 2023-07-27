import { Intent, Workplace } from "types.d";

export const workplaceIntents: Record<Workplace, Intent> = {
  SES: "work.ses",
  EmailTree: "work.emailtree",
  Devoteam: "work.devoteam",
  Microsoft: "work.microsoft",
  Deloitte: "work.deloitte",
  EIB: "work.eib",
  PwC: "work.pwc",
};
