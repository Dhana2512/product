import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUser} from './user-interface/user-interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http: HttpClient
  ) { }

   //create
   create(data): Promise<CreateUser> {
    return this.http.post<CreateUser>('http://localhost:3000/customers', data).toPromise();
  }

  //retrive
  retriveUserList(): Promise<[CreateUser]> {
    return this.http.get<[CreateUser]>('http://localhost:3000/customers').toPromise();
  }

  //delete
  delete(id): Promise<CreateUser>{
    return this.http.delete<CreateUser>(`http://localhost:3000/customers/${id}`).toPromise();
  } 

  //update
  update(data): Promise<CreateUser>{
    return this.http.put<CreateUser>(`http://localhost:3000/customers/${data.id}`,data).toPromise();
  }

  //retrive particular user
  getParticularUser(id): Promise<CreateUser>{
    return this.http.get<CreateUser>(`http://localhost:3000/customers/${id}`).toPromise();
  }
}
