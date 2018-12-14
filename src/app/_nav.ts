export class NavRole {
  static jsonNav: any
  static setRole(navItems) {
    this.jsonNav = navItems;
  }
  static getRole() {
    return this.jsonNav;
  }
}

