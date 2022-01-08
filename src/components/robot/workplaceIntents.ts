import { Intent, Workplace } from "types.d";

export const workplaceIntents: Record<Workplace, Intent> = {
  EmailTree: "work.emailtree",
  Devoteam: "work.devoteam",
  Microsoft: "work.microsoft",
  Deloitte: "work.deloitte",
  EIB: "work.eib",
  PwC: "work.pwc",
};
