import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/Contract/Contract"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createArbitrationFeeTimeoutUpdatedEvent(
  platformId: BigInt,
  arbitrationFeeTimeout: BigInt
): ArbitrationFeeTimeoutUpdated {
  let arbitrationFeeTimeoutUpdatedEvent = changetype<
    ArbitrationFeeTimeoutUpdated
  >(newMockEvent())

  arbitrationFeeTimeoutUpdatedEvent.parameters = new Array()

  arbitrationFeeTimeoutUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformId",
      ethereum.Value.fromUnsignedBigInt(platformId)
    )
  )
  arbitrationFeeTimeoutUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "arbitrationFeeTimeout",
      ethereum.Value.fromUnsignedBigInt(arbitrationFeeTimeout)
    )
  )

  return arbitrationFeeTimeoutUpdatedEvent
}

export function createArbitratorUpdatedEvent(
  platformId: BigInt,
  arbitrator: Address,
  extraData: Bytes
): ArbitratorUpdated {
  let arbitratorUpdatedEvent = changetype<ArbitratorUpdated>(newMockEvent())

  arbitratorUpdatedEvent.parameters = new Array()

  arbitratorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformId",
      ethereum.Value.fromUnsignedBigInt(platformId)
    )
  )
  arbitratorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "arbitrator",
      ethereum.Value.fromAddress(arbitrator)
    )
  )
  arbitratorUpdatedEvent.parameters.push(
    new ethereum.EventParam("extraData", ethereum.Value.fromBytes(extraData))
  )

  return arbitratorUpdatedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createCidUpdatedEvent(
  platformId: BigInt,
  newCid: string
): CidUpdated {
  let cidUpdatedEvent = changetype<CidUpdated>(newMockEvent())

  cidUpdatedEvent.parameters = new Array()

  cidUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformId",
      ethereum.Value.fromUnsignedBigInt(platformId)
    )
  )
  cidUpdatedEvent.parameters.push(
    new ethereum.EventParam("newCid", ethereum.Value.fromString(newCid))
  )

  return cidUpdatedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createMinArbitrationFeeTimeoutUpdatedEvent(
  minArbitrationFeeTimeout: BigInt
): MinArbitrationFeeTimeoutUpdated {
  let minArbitrationFeeTimeoutUpdatedEvent = changetype<
    MinArbitrationFeeTimeoutUpdated
  >(newMockEvent())

  minArbitrationFeeTimeoutUpdatedEvent.parameters = new Array()

  minArbitrationFeeTimeoutUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "minArbitrationFeeTimeout",
      ethereum.Value.fromUnsignedBigInt(minArbitrationFeeTimeout)
    )
  )

  return minArbitrationFeeTimeoutUpdatedEvent
}

export function createMintEvent(
  platformOwnerAddress: Address,
  platformId: BigInt,
  platformName: string,
  fee: BigInt,
  arbitrationFeeTimeout: BigInt
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam(
      "platformOwnerAddress",
      ethereum.Value.fromAddress(platformOwnerAddress)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "platformId",
      ethereum.Value.fromUnsignedBigInt(platformId)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "platformName",
      ethereum.Value.fromString(platformName)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "arbitrationFeeTimeout",
      ethereum.Value.fromUnsignedBigInt(arbitrationFeeTimeout)
    )
  )

  return mintEvent
}

export function createMintFeeUpdatedEvent(mintFee: BigInt): MintFeeUpdated {
  let mintFeeUpdatedEvent = changetype<MintFeeUpdated>(newMockEvent())

  mintFeeUpdatedEvent.parameters = new Array()

  mintFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "mintFee",
      ethereum.Value.fromUnsignedBigInt(mintFee)
    )
  )

  return mintFeeUpdatedEvent
}

export function createMintStatusUpdatedEvent(
  mintStatus: i32
): MintStatusUpdated {
  let mintStatusUpdatedEvent = changetype<MintStatusUpdated>(newMockEvent())

  mintStatusUpdatedEvent.parameters = new Array()

  mintStatusUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "mintStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(mintStatus))
    )
  )

  return mintStatusUpdatedEvent
}

export function createOriginServiceFeeRateUpdatedEvent(
  platformId: BigInt,
  originServiceFeeRate: i32
): OriginServiceFeeRateUpdated {
  let originServiceFeeRateUpdatedEvent = changetype<
    OriginServiceFeeRateUpdated
  >(newMockEvent())

  originServiceFeeRateUpdatedEvent.parameters = new Array()

  originServiceFeeRateUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformId",
      ethereum.Value.fromUnsignedBigInt(platformId)
    )
  )
  originServiceFeeRateUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "originServiceFeeRate",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(originServiceFeeRate))
    )
  )

  return originServiceFeeRateUpdatedEvent
}

export function createOriginValidatedProposalFeeRateUpdatedEvent(
  platformId: BigInt,
  originValidatedProposalFeeRate: i32
): OriginValidatedProposalFeeRateUpdated {
  let originValidatedProposalFeeRateUpdatedEvent = changetype<
    OriginValidatedProposalFeeRateUpdated
  >(newMockEvent())

  originValidatedProposalFeeRateUpdatedEvent.parameters = new Array()

  originValidatedProposalFeeRateUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformId",
      ethereum.Value.fromUnsignedBigInt(platformId)
    )
  )
  originValidatedProposalFeeRateUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "originValidatedProposalFeeRate",
      ethereum.Value.fromUnsignedBigInt(
        BigInt.fromI32(originValidatedProposalFeeRate)
      )
    )
  )

  return originValidatedProposalFeeRateUpdatedEvent
}

export function createProposalPostingFeeUpdatedEvent(
  platformId: BigInt,
  proposalPostingFee: BigInt
): ProposalPostingFeeUpdated {
  let proposalPostingFeeUpdatedEvent = changetype<ProposalPostingFeeUpdated>(
    newMockEvent()
  )

  proposalPostingFeeUpdatedEvent.parameters = new Array()

  proposalPostingFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformId",
      ethereum.Value.fromUnsignedBigInt(platformId)
    )
  )
  proposalPostingFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalPostingFee",
      ethereum.Value.fromUnsignedBigInt(proposalPostingFee)
    )
  )

  return proposalPostingFeeUpdatedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createServicePostingFeeUpdatedEvent(
  platformId: BigInt,
  servicePostingFee: BigInt
): ServicePostingFeeUpdated {
  let servicePostingFeeUpdatedEvent = changetype<ServicePostingFeeUpdated>(
    newMockEvent()
  )

  servicePostingFeeUpdatedEvent.parameters = new Array()

  servicePostingFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformId",
      ethereum.Value.fromUnsignedBigInt(platformId)
    )
  )
  servicePostingFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "servicePostingFee",
      ethereum.Value.fromUnsignedBigInt(servicePostingFee)
    )
  )

  return servicePostingFeeUpdatedEvent
}

export function createSignerUpdatedEvent(
  platformId: BigInt,
  signer: Address
): SignerUpdated {
  let signerUpdatedEvent = changetype<SignerUpdated>(newMockEvent())

  signerUpdatedEvent.parameters = new Array()

  signerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformId",
      ethereum.Value.fromUnsignedBigInt(platformId)
    )
  )
  signerUpdatedEvent.parameters.push(
    new ethereum.EventParam("signer", ethereum.Value.fromAddress(signer))
  )

  return signerUpdatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

export function createUserWhitelistedEvent(user: Address): UserWhitelisted {
  let userWhitelistedEvent = changetype<UserWhitelisted>(newMockEvent())

  userWhitelistedEvent.parameters = new Array()

  userWhitelistedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return userWhitelistedEvent
}
