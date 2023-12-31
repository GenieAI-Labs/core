import {
  NewGenie as NewGenieEvent,
  NewRating as NewRatingEvent,
  NewWish as NewWishEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  UpdateRating as UpdateRatingEvent,
  WishCancelled as WishCancelledEvent,
  WishCompleted as WishCompletedEvent,
  GenieMetadataUpdated as GenieMetadataUpdatedEvent
} from "../../generated/MagicLamp/MagicLamp"
import {getOrCreateGenie, getOrCreateRating, getOrCreateUser, getOrCreateWish} from "../getters";
import {ONE} from "../constants";
import {BigInt} from "@graphprotocol/graph-ts";
import {sendEPNSNotification} from "./EPNSNotification";
import {buildNotification} from "./utils";

export function handleNewGenie(event: NewGenieEvent): void {
  let genie = getOrCreateGenie(event.params.genieId.toString())
  genie.address = event.params.genieAddress
  genie.ownerAddress = event.params.ownerAddress
  genie.ownerTalentLayerId = event.params.ownerTalentLayerId
  genie.price = event.params.price
  genie.schemaCid = event.params.schemaCid
  genie.serviceCid = event.params.serviceCid
  genie.proposalCid = event.params.proposalCid

  genie.save()
}
export function handleGenieMetadataUpdated(event: GenieMetadataUpdatedEvent): void {
  let genie = getOrCreateGenie(event.params.genieId.toString())
  genie.cid = event.params.cid

  genie.save()
}

export function handleNewWish(event: NewWishEvent): void {
  let wish = getOrCreateWish(event.params.wishId.toString())
  wish.userId = event.params.userId
  wish.genieId = event.params.genieId
  wish.serviceId = event.params.serviceId
  wish.proposalId = event.params.proposalId
  wish.transactionId = event.params.transactionId

  wish.save()
}


export function handleWishCompleted(event: WishCompletedEvent): void {
  let wish = getOrCreateWish(event.params.wishId.toString())
  wish.status = 'Confirmed'

  let recipient = getOrCreateUser(wish.userId);

  const notification = buildNotification("Wish completed !", `Genie ${wish.genieId} completed your wish ${wish.id}`)
  sendEPNSNotification(recipient.address, notification)

  wish.save()
}

export function handleWishCancelled(event: WishCancelledEvent): void {
  let wish = getOrCreateWish(event.params.wishId.toString())
  wish.status = 'Cancelled'

  wish.save()
}

export function handleNewRating(event: NewRatingEvent): void {
  let rating = getOrCreateRating(event.params.genieId.toString(), event.params.userAddress.toHex());
  rating.genieId = event.params.genieId
  rating.userAddress = event.params.userAddress
  rating.rating = BigInt.fromI32(event.params._rating)

  rating.save()

  let genie = getOrCreateGenie(event.params.genieId.toString())
  genie.numberOfRatings = genie.numberOfRatings.plus(ONE);
  genie.totalRate = genie.totalRate.plus(BigInt.fromI32(event.params._rating));
  genie.averageRate = genie.totalRate.div(genie.numberOfRatings);

  genie.save()
}
export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
}

export function handleUpdateRating(event: UpdateRatingEvent): void {
  let rating = getOrCreateRating(event.params.genieId.toString(), event.params.userAddress.toHex());
  rating.rating = BigInt.fromI32(event.params._rating)

  rating.save()

  let genie = getOrCreateGenie(event.params.genieId.toString())
  genie.totalRate = genie.totalRate.plus(BigInt.fromI32(event.params.diffRating));
  genie.averageRate = genie.totalRate.div(genie.numberOfRatings);

  genie.save()
}
