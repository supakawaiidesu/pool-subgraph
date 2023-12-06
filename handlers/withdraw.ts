import { POOL_ABI } from "../Pool.ts";
import { EventHandlerFor } from "../deps.ts";
import { Withdraw } from "../entities/withdraw.ts";

export const onWithdraw: EventHandlerFor<typeof POOL_ABI, "Withdraw"> = async ({
  event,
}) => {
  const { user, currency, amount, clpAmount } = event.args;
  const block = Number(event.blockNumber);
  const id = `${event.transactionHash}:${block}:${event.transactionLogIndex}`;

  await Withdraw.insertOne({
    id,
    hash: event.transactionHash,
    block,
    user,
    currency,
    amount,
    clpAmount,
  });
};
