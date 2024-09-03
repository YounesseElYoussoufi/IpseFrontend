import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StorageService } from "../../../auth/services/storage/storage.service";
import { catchError, Observable, throwError } from "rxjs";

const BASE_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + StorageService.getToken());
  }

  getUsers(page: number, size: number, searchTerm: string): Observable<any> {
    return this.http.get(`${BASE_URL}api/admin/users/users?page=${page}&size=${size}&searchTerm=${searchTerm}`, {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        return throwError(error);
      })
    );
  }




  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${BASE_URL}api/admin/users/delete-user/${userId}`, {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError((error) => {
        // Check if the error response has a specific structure
        const errorMsg = error.error ? error.error : 'Erreur lors de la suppression de l\'utilisateur';
        console.error('Error deleting user:', errorMsg);
        return throwError(errorMsg); // Propagate the error message for further handling
      })
    );
  }
  toggleUserEnabled(userId: number): Observable<any> {
    return this.http.patch<any>(`${BASE_URL}api/admin/users/toggle-user/${userId}`, {}, {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError((error) => {
        console.error('Erreur lors du changement de statut de l\'utilisateur:', error);
        return throwError(error);
      })
    );
  }
  updateUser(userId: number, updateRequest: any): Observable<any> {
    return this.http.put(`${BASE_URL}api/admin/users/update-user/${userId}`, updateRequest, {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError((error) => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
        return throwError(error);
      })
    );
  }

  getEmployeRet(page: number, size: number, searchTerm: string): Observable<any> {
    return this.http.get(`${BASE_URL}upload/employe-retraite?page=${page}&size=${size}&searchTerm=${searchTerm}`, {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError((error) => {
        console.error('Error loading employe retraite:', error);
        return throwError(error);
      })
    );
  }

  getDettesByNrcar(nrcar: string): Observable<any> {
    const url = `/upload/employe-retraite/dettes?nrcar=${nrcar}`;
    return this.http.get<any>(url);
  }

  getPaiementsByNrcar(nrcar: string): Observable<any> {
    const url = `/api/employe-retraite/paiements?nrcar=${nrcar}`;
    return this.http.get<any>(url);
  }

}
