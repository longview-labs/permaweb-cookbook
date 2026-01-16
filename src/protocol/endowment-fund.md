# The Endowment Fund

Arweave has a protocol-enforced endowment fund, which is a long-term storage mechanism holding $AR accrued from transaction fees.vYou can think of the endowment kind of like a “savings” account for extreme circumstances for the Arweave network.

Whenever data is uploaded to Arweave, a portion of the transaction fee goes directly to miners, while the remaining amount
goes into the endowment fund. You can find the current amount of $AR stored in the endowment on [ViewBlock](https://viewblock.io/arweave/stat/cumulativeEndowmentSize) and other Arweave block explorers.

These tokens are not immediately distributed, but rather held to be distributed to miners as an economic incentive if needed, based on declining block rewards and the current cost of data storage. This means there are technically some (temporary) deflationary aspects to $AR as the tokens are not in use, at least for some time.

:::tip Note
Since Arweave’s mainnet launch (June 8th, 2018), no funds from the endowment have been utilized to incentivize miners. This demonstrates the resiliency of the network mechanism design and incentive models for storing data. Not financial or investment advice.
:::

The endowment fund is enforced at a protocol level, so it isn't controlled by an entity such as a DAO.

As a developer, you do not need to interact with the endowment directly - however it is good to understand that transaction fees from you or your users are split between miners and the endowment fund.
