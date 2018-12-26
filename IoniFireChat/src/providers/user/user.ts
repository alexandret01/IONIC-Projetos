import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireObject, AngularFireList} from "angularfire2/database";
import { User } from '../../models/user.model';

@Injectable()
export class UserProvider {

  users: AngularFireList<any[]>;

  constructor(
    public db: AngularFireDatabase,
    public http: HttpClient
    ) {
      this.users = this.db.list(`/users`).valueChanges().subscribe(console.log);
  }

  create(user: User): Promise<void> {
    return this.db.list(`/users`).push(user);
 }

}
