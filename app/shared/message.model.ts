
export class Message{
    messageText:string;
    sentOn:Date;
    fromUserId:number;
    toUserId:number;
    isRead:boolean;
}

export class InboxMessage{
    Id:number;
    messageText:string;
    From:string;
    To:string;
    sentOn:Date;
}