import type { ParseClient, Client } from 'seyfert';

declare module 'seyfert' {
  interface UsingClient extends ParseClient<Client<true>> {}
}