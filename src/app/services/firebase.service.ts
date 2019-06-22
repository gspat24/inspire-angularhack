import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';     
    
@Injectable({
  providedIn: 'root'
})
 
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }     
    
  getReports(): Observable < any > {
    const reportsCollection = this.afs.collection('reports', ref => ref.orderBy('createdAt'));
    return reportsCollection.valueChanges();
  }

  async setReport(item): Promise<any>{
    const reportsCollection = this.afs.collection('reports');
    return await reportsCollection.add(item);
  }

  async setToken(token): Promise<any>{
    const tokensDoc: AngularFirestoreDocument<any> = this.afs.collection('tokens').doc('police');
    return await tokensDoc.set({token_id: token});
  }
}
