
export class Message {
    Id: number;
    subject: string;
    messageText: string;
    sentOn: Date;
    fromUserId: number;
    toUserId: number;
    isRead: boolean;
}

export class InboxMessage {
    Id: number;
    messageText: string;
    subject: string;
    From: string;
    To: string;
    sentOn: Date;
    fromUserId: number;
    toUserId: number;
}