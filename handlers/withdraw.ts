import { POOL_ABI } from "../Pool.ts";
import { EventHandlerFor } from "../deps.ts";
import { Withdraw } from "../entities/withdraw.ts";

export const onWithdraw: EventHandlerFor<typeof POOL_ABI, "Withdraw"> = async ({
  event,
}) => {
  const { user, currency, amount, clpAmount } = event.args;
  const block = Number(event.blockNumber);
  const _id = `${event.transactionHash}:${block}:${event.transactionLogIndex}`; // Use _id instead of id

  await Withdraw.create({
    _id, // Assign the generated _id here
    hash: event.transactionHash,
    block,
    user,
    currency,
    amount: amount.toString(), // Convert bigint to string
    clpAmount: clpAmount.toString(), // Convert bigint to string
  });
};
