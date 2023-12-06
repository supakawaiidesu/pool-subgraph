import { POOL_ABI } from "../Pool.ts";
import { eventHandlers } from "./handlers.ts";

export const createContractConfig = (sources: Record<string, bigint>) => ({
  name: "Pool",
  abi: POOL_ABI,
  sources: sources as any,
  eventHandlers,
});
