import { KrakenTime } from "./kraken-time";

export interface KrakenResult<T> {
  error: string[];
  result: T;
}
