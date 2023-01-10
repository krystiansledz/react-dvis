import { StepDetail } from "../../components/wizard/types";
import { GeneratorWizardStep } from "./const";
import { GeneratorStepsPartial } from "./context";

export type GeneratorStepDetail = StepDetail<
  GeneratorWizardStep,
  GeneratorStepsPartial
>;
