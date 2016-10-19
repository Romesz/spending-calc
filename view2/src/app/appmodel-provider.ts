export class AppmodelProvider {
  public isAuth:boolean;

  constructor() {
    //this.isAuth = false;
  }
  get auth () {
    return this.isAuth;
  }
  set auth(val) {
    this.auth = val;
  }
}
