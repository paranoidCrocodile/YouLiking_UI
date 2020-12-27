import { StateObj } from "../pages/index";

const merge = (oldObj: StateObj, newObj: Record<string, unknown>): StateObj =>
  Object.assign(oldObj, newObj);

export default merge;
