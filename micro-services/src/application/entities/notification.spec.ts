import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
  it('shoud be able to create a notificatio', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
      createdAt: new Date()
    })
    expect(notification).toBeTruthy()
  })

})

