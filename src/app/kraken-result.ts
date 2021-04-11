import { KrakenTime } from "./kraken-time";

export interface KrakenResult {
  error: string[];
  result: KrakenTime;
}