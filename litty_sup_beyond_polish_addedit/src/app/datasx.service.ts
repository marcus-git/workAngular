import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasxService {

  private baseUrl = 'http://localhost:8080/api/datasx';

  constructor(private http: HttpClient) { }

  getDatasx(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDatasx(datasx: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, datasx);
  }

  updateDatasx(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateDatasx2(datasx: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${datasx}`, datasx);
  }
  

  deleteDatasx(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDatasxList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
