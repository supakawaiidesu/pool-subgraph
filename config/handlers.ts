import { onDeposit } from "../handlers/deposit.ts";
import { onWithdraw } from "../handlers/withdraw.ts";

export const eventHandlers = {
  Deposit: onDeposit,
  Withdraw: onWithdraw,
};
