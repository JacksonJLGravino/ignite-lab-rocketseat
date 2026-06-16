import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { GetRecipientNotifications } from "./get-recipient-norifications"


describe('Get recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository)


    await notificationsRepository.create(
      makeNotification({recipientId: 'ricipient-1'})
    )

    await notificationsRepository.create(
      makeNotification({recipientId: 'ricipient-1'})
    )
    
    await notificationsRepository.create(
      makeNotification({recipientId: 'ricipient-2'})
    )

    const {notifications } = await getRecipientNotifications.execute({
      recipienttId: 'ricipient-1'
    })

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
       expect.objectContaining({recipientId: 'ricipient-1'}),
        expect.objectContaining({recipientId: 'ricipient-1'})
    ]))
  })
})