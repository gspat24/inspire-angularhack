import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';     
    
@Injectable({
  providedIn: 'root'
})  
export class FirebaseService {

constructor(private afs: AngularFirestore) {
}
     
  getReports(): Observable<any>{
    const reportsCollection = this.afs.collection('reports');
    return reportsCollection.valueChanges();
  }
}
