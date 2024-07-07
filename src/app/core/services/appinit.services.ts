import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AppInitService {
    private uuid: string | null = null;

    constructor(
        private http: HttpClient,
        private storage: StorageService,
    ) {
        //this.getUuid();
        //this.setUserInfo();
    }

    init(): void {
        //console.log('app init');
    }

    getUuid(): void {
        if (this.storage.get('uuid') == null || this.storage.get('uuid') === undefined) {
            this.appRegister()
        } else {
            this.uuid = this.storage.get('uuid')
        }
    }

    appRegister(): void {
        this.http.get(environment.apiUrl + 'register')
            .subscribe((response: any) => {
                if (response.status = 'success' && response.statusCode === 200) {
                    this.uuid = response.data?.token;
                    this.storage.set('uuid', this.uuid);
                } else {
                    //console.log(response?.message)
                }
            })
    }

    setUserInfo() {
        if (localStorage.getItem('token') !== null) {
            // this.store.dispatch(setUserState());
        }
    }

}