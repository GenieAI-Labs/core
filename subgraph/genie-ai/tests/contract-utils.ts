import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  NewGenie,
  NewRating,
  NewWish,
  OwnershipTransferred,
  UpdateRating,
  WishCancelled,
  WishCompleted
} from "../generated/Contract/Contract"

export function createNewGenieEvent(
  genieId: BigInt,
  genieAddress: Address,
  ownerAddress: Address,
  ownerTalentLayerId: BigInt,
  price: BigInt,
  schemaCid: string,
  serviceCid: string,
  proposalCid: string
): NewGenie {
  let newGenieEvent = changetype<NewGenie>(newMockEvent())

  newGenieEvent.parameters = new Array()

  newGenieEvent.parameters.push(
    new ethereum.EventParam(
      "genieId",
      ethereum.Value.fromUnsignedBigInt(genieId)
    )
  )
  newGenieEvent.parameters.push(
    new ethereum.EventParam(
      "genieAddress",
      ethereum.Value.fromAddress(genieAddress)
    )
  )
  newGenieEvent.parameters.push(
    new ethereum.EventParam(
      "ownerAddress",
      ethereum.Value.fromAddress(ownerAddress)
    )
  )
  newGenieEvent.parameters.push(
    new ethereum.EventParam(
      "ownerTalentLayerId",
      ethereum.Value.fromUnsignedBigInt(ownerTalentLayerId)
    )
  )
  newGenieEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  newGenieEvent.parameters.push(
    new ethereum.EventParam("schemaCid", ethereum.Value.fromString(schemaCid))
  )
  newGenieEvent.parameters.push(
    new ethereum.EventParam("serviceCid", ethereum.Value.fromString(serviceCid))
  )
  newGenieEvent.parameters.push(
    new ethereum.EventParam(
      "proposalCid",
      ethereum.Value.fromString(proposalCid)
    )
  )

  return newGenieEvent
}

export function createNewRatingEvent(
  genieId: BigInt,
  userAddress: Address,
  _rating: i32
): NewRating {
  let newRatingEvent = changetype<NewRating>(newMockEvent())

  newRatingEvent.parameters = new Array()

  newRatingEvent.parameters.push(
    new ethereum.EventParam(
      "genieId",
      ethereum.Value.fromUnsignedBigInt(genieId)
    )
  )
  newRatingEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  newRatingEvent.parameters.push(
    new ethereum.EventParam(
      "_rating",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_rating))
    )
  )

  return newRatingEvent
}

export function createNewWishEvent(
  wishId: BigInt,
  userId: BigInt,
  genieId: BigInt
): NewWish {
  let newWishEvent = changetype<NewWish>(newMockEvent())

  newWishEvent.parameters = new Array()

  newWishEvent.parameters.push(
    new ethereum.EventParam("wishId", ethereum.Value.fromUnsignedBigInt(wishId))
  )
  newWishEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromUnsignedBigInt(userId))
  )
  newWishEvent.parameters.push(
    new ethereum.EventParam(
      "genieId",
      ethereum.Value.fromUnsignedBigInt(genieId)
    )
  )

  return newWishEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createUpdateRatingEvent(
  genieId: BigInt,
  userAddress: Address,
  _rating: i32,
  diffRating: i32
): UpdateRating {
  let updateRatingEvent = changetype<UpdateRating>(newMockEvent())

  updateRatingEvent.parameters = new Array()

  updateRatingEvent.parameters.push(
    new ethereum.EventParam(
      "genieId",
      ethereum.Value.fromUnsignedBigInt(genieId)
    )
  )
  updateRatingEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  updateRatingEvent.parameters.push(
    new ethereum.EventParam(
      "_rating",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_rating))
    )
  )
  updateRatingEvent.parameters.push(
    new ethereum.EventParam("diffRating", ethereum.Value.fromI32(diffRating))
  )

  return updateRatingEvent
}

export function createWishCancelledEvent(wishId: BigInt): WishCancelled {
  let wishCancelledEvent = changetype<WishCancelled>(newMockEvent())

  wishCancelledEvent.parameters = new Array()

  wishCancelledEvent.parameters.push(
    new ethereum.EventParam("wishId", ethereum.Value.fromUnsignedBigInt(wishId))
  )

  return wishCancelledEvent
}

export function createWishCompletedEvent(wishId: BigInt): WishCompleted {
  let wishCompletedEvent = changetype<WishCompleted>(newMockEvent())

  wishCompletedEvent.parameters = new Array()

  wishCompletedEvent.parameters.push(
    new ethereum.EventParam("wishId", ethereum.Value.fromUnsignedBigInt(wishId))
  )

  return wishCompletedEvent
}
