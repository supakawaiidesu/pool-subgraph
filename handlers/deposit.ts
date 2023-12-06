import { POOL_ABI } from "../Pool.ts";
import { EventHandlerFor } from "../deps.ts";
import { Deposit } from "../entities/deposit.ts";

export const onDeposit: EventHandlerFor<typeof POOL_ABI, "Deposit"> = async ({
  event,
}) => {
  const { user, currency, amount, clpAmount } = event.args;
  const block = Number(event.blockNumber);
  const id = `${event.transactionHash}:${block}:${event.transactionLogIndex}`;

  await Deposit.insertOne({
    id,
    hash: event.transactionHash,
    block,
    user,
    currency,
    amount,
    clpAmount,
  });
};
