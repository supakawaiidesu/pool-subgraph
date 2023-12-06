import { createEntity } from "../deps.ts";

export interface Withdraw {
  _id: string; // Unique identifier, can be a combination of transaction hash and log index
  user: string;
  currency: string;
  amount: number;
  clpAmount: number;
  blockNumber: number;
  transactionHash: string;
}

export const Withdraw = createEntity<Withdraw>("Withdraw", {
  _id: "string",
  user: "string",
  currency: "string",
  amount: {
    type: "number",
    index: true,
  },
  clpAmount: "number",
  blockNumber: {
    type: "number",
    index: true,
  },
  transactionHash: "string",
});
