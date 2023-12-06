import { Manifest } from './deps.ts'
import { sources } from "./config/sources.ts";
import { Deposit } from "./entities/deposit.ts";
import { Withdraw } from "./entities/withdraw.ts";
import { createContractConfig } from "./config/contract.ts";

export default new Manifest("pool")
.addEntities([
  Deposit,
  Withdraw,
])
.addChain(
  "optimism",
  (chain) =>
    chain.setOptions({ rpcUrl: "https://neat-little-glade.optimism.quiknode.pro/97628ec6e5515b8baa7027c5fac56b7128dd07cf/" }).addContract(
      createContractConfig(sources.optimism),
    ),
)
.build();