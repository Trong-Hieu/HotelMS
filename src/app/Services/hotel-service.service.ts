import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceCategory } from '../Model/service-category';
import { Service } from '../Model/service';
import { CustomerService } from '../Model/customerService';
import { Table } from '../Model/table';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  serviceCategoryUrl: string = "http://localhost:8080/servicecategories"
  serviceUrl: string = "http://localhost:8080/services"
  tableServiceUrl: string = "http://localhost:8080/tables"
  customerService: string = "http://localhost:8080/customerservices"

  constructor(
    private http: HttpClient
  ) { }

  getAllCategory(): Observable<ServiceCategory[]>{
    return this.http.get<ServiceCategory[]>(this.serviceCategoryUrl)
  }
  getAllService(): Observable<Service[]>{
    return this.http.get<Service[]>(this.serviceUrl)
  }
  getServiceById(id: string): Observable<Service>{
    return this.http.get<Service>(this.serviceUrl + "/" + id)
  }
  getServiceByCategory(category: string): Observable<Service[]>{
    return this.http.get<Service[]>(this.serviceUrl + "/category/" + category)
  }
  getCustomerService(): Observable<CustomerService[]>{
    return this.http.get<CustomerService[]>(this.customerService)
  }
  getCustomerServiceById(id: string): Observable<CustomerService>{
    return this.http.get<CustomerService>(this.customerService + "/" + id)
  }
  postCustomerService(cs: CustomerService): Observable<CustomerService>{
    return this.http.post<CustomerService>(this.customerService, cs)
  }
  updateCustomerService(id: string, cs: CustomerService): Observable<CustomerService>{
    return this.http.put<CustomerService>(this.customerService + "/" + id, cs)
  }
  postService(sv: Service): Observable<Service>{
    return this.http.post<Service>(this.serviceUrl, sv)
  }
  updateService(id: string, sv: Service): Observable<Service>{
    return this.http.put<Service>(this.serviceUrl + "/" + id, sv)
  }
  deleteService(id: string): Observable<any>{
    return this.http.delete<any>(this.serviceUrl + "/" + id,
    {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response', responseType: 'text' as 'json'
    })
  }

  getTables(): Observable<Table[]>{
    return this.http.get<Table[]>(this.tableServiceUrl)
  }

  getTableById(id: string): Observable<Table>{
    return this.http.get<Table>(this.tableServiceUrl + "/" + id)
  }

  updateServiceTabel(tabelId: string, csvId: string, table: Table): Observable<Table>{
    return this.http.put<Table>(this.serviceUrl + "/" + tabelId + "/" + csvId, table)
  }



}
