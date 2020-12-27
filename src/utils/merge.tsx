import { StateObj } from "../pages/index";

const merge = (oldObj: StateObj, newObj: Record<string, unknown>): StateObj => {
  return { ...oldObj, ...newObj };
};

export default merge;
