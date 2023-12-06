import { createEntity } from "../deps.ts";

export interface Deposit {
  _id: string; // Unique identifier, can be a combination of transaction hash and log index
  user: string;
  currency: string;
  amount: number;
  clpAmount: number;
  blockNumber: number;
  transactionHash: string;
}

export const Deposit = createEntity<Deposit>("Deposit", {
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
