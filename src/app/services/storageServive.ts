import { Subject, Observable } from 'rxjs';

class Service {
  private storageSub = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next(data);
  }

  removeItem(key) {
    localStorage.removeItem(key);
    this.storageSub.next('');
  }
}

export const StorageService = new Service(); 