export enum MessageStatus{
    Unread,
    Read,
    New
}
export class Message{
    messageText:string;
    sentOn:Date;
    fromUserId:number;
    toUserId:number;
    status:MessageStatus
}