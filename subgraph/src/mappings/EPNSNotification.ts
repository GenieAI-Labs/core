import { BigInt, log } from '@graphprotocol/graph-ts'
import { EpnsNotificationCounter, EpnsPushNotification } from '../../generated/schema'

const SUB_GRAPH_ID = 'genie-ai/'

export function sendEPNSNotification(recipient: string, notification: string): void {
  log.info('New id of EpnsNotificationCounter is: {}', [SUB_GRAPH_ID])

  let epnsNotificationCounter = EpnsNotificationCounter.load(SUB_GRAPH_ID)
  if (epnsNotificationCounter == null) {
    epnsNotificationCounter = new EpnsNotificationCounter(SUB_GRAPH_ID)
    epnsNotificationCounter.totalCount = BigInt.fromI32(0)
  }
  epnsNotificationCounter.totalCount = epnsNotificationCounter.totalCount.plus(BigInt.fromI32(1))

  let count = epnsNotificationCounter.totalCount.toHexString()
  let notificationId = `${SUB_GRAPH_ID}+${count}`
  log.info('New id of EpnsPushNotification is: {}', [notificationId])

  let epnsPushNotification = EpnsPushNotification.load(notificationId)
  if (epnsPushNotification == null) {
    epnsPushNotification = new EpnsPushNotification(notificationId)
  }

  epnsPushNotification.recipient = recipient
  epnsPushNotification.notification = notification
  epnsPushNotification.notificationNumber = epnsNotificationCounter.totalCount

  epnsPushNotification.save()
  epnsNotificationCounter.save()
}
