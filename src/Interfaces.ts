export interface Card{
    name:string,
    slug:string,
    description:string,
    payout_address:string,
    image_url:string,

}
export interface Cards{
    collections:Card[]
}