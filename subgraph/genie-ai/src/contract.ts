import {
  AdminChanged as AdminChangedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ArbitrationFeeTimeoutUpdated as ArbitrationFeeTimeoutUpdatedEvent,
  ArbitratorUpdated as ArbitratorUpdatedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  CidUpdated as CidUpdatedEvent,
  Initialized as InitializedEvent,
  MinArbitrationFeeTimeoutUpdated as MinArbitrationFeeTimeoutUpdatedEvent,
  Mint as MintEvent,
  MintFeeUpdated as MintFeeUpdatedEvent,
  MintStatusUpdated as MintStatusUpdatedEvent,
  OriginServiceFeeRateUpdated as OriginServiceFeeRateUpdatedEvent,
  OriginValidatedProposalFeeRateUpdated as OriginValidatedProposalFeeRateUpdatedEvent,
  ProposalPostingFeeUpdated as ProposalPostingFeeUpdatedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  ServicePostingFeeUpdated as ServicePostingFeeUpdatedEvent,
  SignerUpdated as SignerUpdatedEvent,
  Transfer as TransferEvent,
  Upgraded as UpgradedEvent,
  UserWhitelisted as UserWhitelistedEvent
} from "../generated/Contract/Contract"
import {
  AdminChanged,
  Approval,
  ApprovalForAll,
  ArbitrationFeeTimeoutUpdated,
  ArbitratorUpdated,
  BeaconUpgraded,
  CidUpdated,
  Initialized,
  MinArbitrationFeeTimeoutUpdated,
  Mint,
  MintFeeUpdated,
  MintStatusUpdated,
  OriginServiceFeeRateUpdated,
  OriginValidatedProposalFeeRateUpdated,
  ProposalPostingFeeUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  ServicePostingFeeUpdated,
  SignerUpdated,
  Transfer,
  Upgraded,
  UserWhitelisted
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleArbitrationFeeTimeoutUpdated(
  event: ArbitrationFeeTimeoutUpdatedEvent
): void {
  let entity = new ArbitrationFeeTimeoutUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformId = event.params.platformId
  entity.arbitrationFeeTimeout = event.params.arbitrationFeeTimeout

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleArbitratorUpdated(event: ArbitratorUpdatedEvent): void {
  let entity = new ArbitratorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformId = event.params.platformId
  entity.arbitrator = event.params.arbitrator
  entity.extraData = event.params.extraData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.beacon = event.params.beacon

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCidUpdated(event: CidUpdatedEvent): void {
  let entity = new CidUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformId = event.params.platformId
  entity.newCid = event.params.newCid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinArbitrationFeeTimeoutUpdated(
  event: MinArbitrationFeeTimeoutUpdatedEvent
): void {
  let entity = new MinArbitrationFeeTimeoutUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minArbitrationFeeTimeout = event.params.minArbitrationFeeTimeout

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformOwnerAddress = event.params.platformOwnerAddress
  entity.platformId = event.params.platformId
  entity.platformName = event.params.platformName
  entity.fee = event.params.fee
  entity.arbitrationFeeTimeout = event.params.arbitrationFeeTimeout

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintFeeUpdated(event: MintFeeUpdatedEvent): void {
  let entity = new MintFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mintFee = event.params.mintFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintStatusUpdated(event: MintStatusUpdatedEvent): void {
  let entity = new MintStatusUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mintStatus = event.params.mintStatus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOriginServiceFeeRateUpdated(
  event: OriginServiceFeeRateUpdatedEvent
): void {
  let entity = new OriginServiceFeeRateUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformId = event.params.platformId
  entity.originServiceFeeRate = event.params.originServiceFeeRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOriginValidatedProposalFeeRateUpdated(
  event: OriginValidatedProposalFeeRateUpdatedEvent
): void {
  let entity = new OriginValidatedProposalFeeRateUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformId = event.params.platformId
  entity.originValidatedProposalFeeRate =
    event.params.originValidatedProposalFeeRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalPostingFeeUpdated(
  event: ProposalPostingFeeUpdatedEvent
): void {
  let entity = new ProposalPostingFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformId = event.params.platformId
  entity.proposalPostingFee = event.params.proposalPostingFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleServicePostingFeeUpdated(
  event: ServicePostingFeeUpdatedEvent
): void {
  let entity = new ServicePostingFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformId = event.params.platformId
  entity.servicePostingFee = event.params.servicePostingFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignerUpdated(event: SignerUpdatedEvent): void {
  let entity = new SignerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformId = event.params.platformId
  entity.signer = event.params.signer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserWhitelisted(event: UserWhitelistedEvent): void {
  let entity = new UserWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
