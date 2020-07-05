export interface ISelectOption {
    value:string;
    label:string;
}
export enum InoviceStatus {
    None = "None",
    Requested = "Requested",
    Sent = "Sent"
}

export enum PaymentStatus {
    NotPaid = "NotPaid",
    Paid = "Paid",
    HalfPaid = "HalfPaid"
}

export enum PaymentOptions {
    Full = "Full",
    Half = "Half"
}

export enum OrderItemType {
    None = "None",
    New = "New",
    User = "Used",
    Both = "Both",
    External = "External",
    ExternalPlus = "ExternalPlus"
}

export enum OrderStatus {
    Searching = "Searching",
    Proposed = "Proposed",
    NotFound = "NotFound",
    Confirmed = "Confirmed",
    Shipped = "Shipped",
    Received = "Received",
    Delivered = "Delivered",
    Canceled = "Canceled"
}

export enum PaymentType {
    Gateway = "Gateway",
    Cash = "Cash"
}

export enum CartStatus {
    Initiated = "Initiated",
    InProgress = "InProgress",
    Completed = "Completed",
    Canceled = "Canceled",
    NeedMoreDetails = "NeedMoreDetails"
}