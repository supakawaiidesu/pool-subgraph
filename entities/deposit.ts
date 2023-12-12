import { createEntity } from "../deps.ts";

export interface Deposit {
  _id: string; // Unique identifier, can be a combination of transaction hash and log index
  user: string;
  currency: string;
  amount: string;
  clpAmount: string;
  blockNumber: number;
  transactionHash: string;
}

export const Deposit = createEntity<Deposit>("Deposit", {
  _id: "string",
  user: "string",
  currency: "string",
  amount: {
    type: "string",
    index: true,
  },
  clpAmount: "string",
  blockNumber: {
    type: "number",
    index: true,
  },
  transactionHash: "string",
});
