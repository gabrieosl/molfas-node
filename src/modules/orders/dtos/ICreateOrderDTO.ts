export default interface ICreateOrderDTO {
  items: Array<{ id: string; quantity: number }>;
}
