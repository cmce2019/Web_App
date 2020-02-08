import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {

   }

  getData(){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
