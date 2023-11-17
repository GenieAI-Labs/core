import {
  NewGenie as NewGenieEvent,
  NewRating as NewRatingEvent,
  NewWish as NewWishEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  UpdateRating as UpdateRatingEvent,
  WishCancelled as WishCancelledEvent,
  WishCompleted as WishCompletedEvent
} from "../generated/Contract/Contract"
import {
  NewGenie,
  NewRating,
  NewWish,
  OwnershipTransferred,
  UpdateRating,
  WishCancelled,
  WishCompleted
} from "../generated/schema"

export function handleNewGenie(event: NewGenieEvent): void {
  let entity = new NewGenie(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.genieId = event.params.genieId
  entity.genieAddress = event.params.genieAddress
  entity.ownerAddress = event.params.ownerAddress
  entity.ownerTalentLayerId = event.params.ownerTalentLayerId
  entity.price = event.params.price
  entity.schemaCid = event.params.schemaCid
  entity.serviceCid = event.params.serviceCid
  entity.proposalCid = event.params.proposalCid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewRating(event: NewRatingEvent): void {
  let entity = new NewRating(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.genieId = event.params.genieId
  entity.userAddress = event.params.userAddress
  entity._rating = event.params._rating

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewWish(event: NewWishEvent): void {
  let entity = new NewWish(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.wishId = event.params.wishId
  entity.userId = event.params.userId
  entity.genieId = event.params.genieId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateRating(event: UpdateRatingEvent): void {
  let entity = new UpdateRating(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.genieId = event.params.genieId
  entity.userAddress = event.params.userAddress
  entity._rating = event.params._rating
  entity.diffRating = event.params.diffRating

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWishCancelled(event: WishCancelledEvent): void {
  let entity = new WishCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.wishId = event.params.wishId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWishCompleted(event: WishCompletedEvent): void {
  let entity = new WishCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.wishId = event.params.wishId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
