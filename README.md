# PROJECT NAME
GenieAI

---

## Description of the Project
Nowadays, AI models can provide outstanding services to people, ranging from tax calculations, to specific Legal council or even health advice. 

We realized that some really amazing AI models were developed by talented devs & teams, which and are not easy to commercialize due to the private and confidential nature of the input data they require. Who would like to trust Chat GPT with their tax data, contractual details or even health documents ?
We realized that there is a need for a platform that would allow people to monetize their AI models, and to make them accessible to everyone in a private, secure and anonymous way.

This is why we created Genie AI, a platform which gives AI model creators the perfect environment to sell their models while providing their users with an execution environment having total anonymity and privacy.

The idea being to provide users with a team of rockstar AIs (Called Genies) at their service to grant all their wishes.

![team.png](screenshots%2Fteam.png)

### Techs Used
We leveraged mainly 5 technologies to build Genie AI:
 - iexec confidential computing
 - The Graph
 - Filecoin Web3 Storage
 - Push Protocol Notifications
 - The TalentLayer protocol

We created a marketplace platform on top of the TalentLayer protocol, on top of which we added another smart contract: "MagicLamp" which handles all the Genies interactions.
The creator will upload his model in an Enclave, and the input data required for it to work will be encrypted by iexec DataProtector: this will give the possibility to the model to process the data without ever revealing it to the creator. Therefore the inputs and outputs of the model will only be accessible to the user, and never leave the enclave.
Moreover, since all transactions are made through the TalentLayer protocol, the user remains anonymous and the creator can't know who is using his model.

We wanted this tech to be interactive and human-like to users, so the interaction with our Genies is done through the OpenAI Assistant API, which allows our users to have human-like conversations with our Genies:

![convers.png](screenshots%2Fconvers.png)

The user will chat with the assistant until it detects the need for specific features which can be provided by the AI. At this point, costom functions will be triggered, and the user will be prompted to provided sensible data and protect it through iexec DataProtector. The model will then be executed in an enclave, and the user will receive the output of the model, without ever revealing the input data to the creator.


We build this platform as a store; users can rate the Genies they use and eventually update their rating. This will allow the best Genies to be more visible and to be used by more people.


Creators are required to go through Worldcoin KYC to be able to sell their models, in order to ensure that they are real people and not bots.

We want to help them to monetize their work and to make it accessible to everyone.

The idea of GenieAi is to finally provide the right environment for AI models to be commercialized and used by everyone, from legal to health, in a private and secure way.

### Monetization
GeniAI allows creators to generate revenues from models which were not easily monetizable before. As providers of the platform, we will take a small fee on each utilisation. These fees are customizable.

---

## Team Contacts
(team contact to share the judging details) After submission if needed.

**Romain M**:
Discord:romain5882 /
TG: @Romain_TL

**Kirsten C**:
Discord: kirstenpomales / TG: @hellokirsten

**Martin L**:
Discord: akuma9640 /
TG: @akugone 

**Dercio**:
Discord: spanish_vanish /
TG: @Der_CEO


---

## Repository (project's code)
[GitHub Repository]([https://github.com/martorian/quo-roma](https://github.com/orgs/GenieAI-Labs/repositories))

---

## Video Demo
(3 min max)  
[YouTube Demo Video](https://youtu.be/E2WJGs8htD8)

---

## Contract addresses & website URLs


- **Vercel deployment:**  
[GenieAI](https://genieai-zeta.vercel.app/)

- **Contract addresses:**
Please check the contract [ReadMe](https://github.com/GenieAI-Labs/core/blob/main/contracts/README.md)

- **Subgraph:**  
[Hosted Service Subgraph](https://api.studio.thegraph.com/query/58767/genie-ai/version/latest)

---

# Partner integration

- **WorldCoin**  
[Github implementation link](https://github.com/GenieAI-Labs/core/tree/main/dapp/src/components/worldcoin)  
GenieAI integrates Worldcoin for developer logins. We used WorldCoin as a way to discourage ddos by bots and to increase the trust in our AI creators. We need a "gate" to allow creators to submit models. Actually we need several, but Worldcoin is our first and helps us attest of creator's unique humanity. This blockchain-based system simplifies identity verification, allowing developers to maintain their anonymity while participating in the GenieAI ecosystem.


- **The Graph**  
[Github implementation link](https://github.com/GenieAI-Labs/core/tree/main/subgraph)  
As we build our marketplace on top of the TalentLayer Protocol, GenieAI improved The TalentLayer existing Graph and we added our own data layer on top of it; indexinf both on chain and off-chain ipfs data. When a Genie is created or a user mints an NFT to join the DApp, The Graph efficiently catalogs this information, ensuring that all interactions within the ecosystem are traceable and accessible for enhanced functionality and user experience.


- **Push Protocol**  
[Github implementation link (frontend)](https://github.com/GenieAI-Labs/core/tree/main/dapp/src/components/push)  
[Github implementation link (subgraph)](https://github.com/GenieAI-Labs/core/blob/main/subgraph/src/mappings/EPNSNotification.ts)  
When a user submits a request to a Genie AI, computation can take some time, and it's important for our users to be notified when their request has been fulfilled.
Since their profile keeps their identity and contact details anonymous, we needed a way to notify them using their ETH address.
That is why we used Push notifications. We used graph events to trigger notifications to be sent to the user's ETH address once the decentralized computation has been fulfilled.

![img_1.png](screenshots%2Fimg_1.png)

All the users have to do is to subscribe to our Push channel, either directly or using our cool toast popup abd they will be notified when their Genie is done !

![img.png](screenshots%2Fimg.png)

- **WEB3_Strorage - IPFS**  
[Github implementation link](https://github.com/GenieAI-Labs/core/blob/e36858a6a80bc582416768ca41fe93684b578702/dapp/src/pages/api/filecoin)  
We leveraged Web3.Storage from Filecoin to securely store user data submitted to our GenieAI agent. Before dispatching to IPFS, we ensure all data is encrypted, providing an additional layer of privacy and security for our users.


- **UNICEF**  
GenieAI provides instant remote access to professional expertise. This offers access to AI-driven consultations for those who can't afford traditional doctor or accountant services for example. All it needs is a funded wallet to pay for these services, which can easily be the result of a UNICEF crowdfunding campaigns. Our mission aligns with UNICEF's commitment to empowering underprivileged communities with essential knowledge and support.

 



