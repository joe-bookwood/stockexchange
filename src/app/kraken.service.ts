import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {KrakenResult} from "./kraken-result";
import {KrakenTime} from "./kraken-time";
import {catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class KrakenService {
    private krakenUrl = 'https://api.kraken.com/0/public/Time';
    
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {
    }

    getKrakenTime(): Observable<KrakenResult<KrakenTime>> {
        return this.http.get<KrakenResult<KrakenTime>>(this.krakenUrl);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        }
    }

    private log(message: string) {
        console.log(`Log ${message}`);
    }
}
