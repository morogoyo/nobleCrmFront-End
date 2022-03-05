import { Injectable } from "@angular/core";

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state?: string;
  name?: string;
  type: string;
  icon?: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    type: "title",
    name: "MAIN"
  },
  {
    state: "/",
    name: "HOME",
    type: "link",
    icon: "ion-ios-speedometer"
  },
  {
    state: "docs",
    name: "DOCS",
    type: "link",
    icon: "ion-ios-help"
  },
  {
    type: "divider"
  },

  {
    state: "view",
    name: "View-Clients",
    type: "link",
    icon: "ion-ios-help"
  },
  {
    state: "readleads",
    name: "view-leads",
    type: "link",
    icon: "ion-ios-help"
  },
  {
    state: "addleads",
    name: "Add-leads",
    type: "link",
    icon: "ion-ios-help"
  },
  {
    state: "add",
    name: "Add-Clients",
    type: "link",
    icon: "ion-ios-help"
  },
  {
    state: "test",
    name: "Test",
    type: "link",
    icon: "ion-ios-help"
  },
  {
    type: "divider"
  },
  {
    type: "title",
    name: "Fix routing set up"
  },
  {
    state: "",
    name: "CLIENT",
    type: "sub",
    icon: "ion-ios-people",
    children: [
      {
        state: "add",
        name: "Add-leads",
        type: "link",
        icon: "ion-ios-help"
      },
      {
        state: "view",
        name: "View",
        type: "link",
        icon: "ion-ios-help"
      },
      {
        state: "test",
        name: "Test",
        type: "link",
        icon: "ion-ios-help"
      }
    ]
  },
  {
    state: "",
    name: "Leads",
    type: "sub",
    icon: "ion-ios-people",
    children: [
      {
        state: "addleads",
        name: "Add-leads",
        type: "link",
        icon: "ion-ios-help"
      },
      {
        state: "readleads",
        name: "View",
        type: "link",
        icon: "ion-ios-help"
      },
      {
        state: "test",
        name: "Test",
        type: "link",
        icon: "ion-ios-help"
      }
    ]
  },
  {
    state: "account",
    name: "ACCOUNT",
    type: "sub",
    icon: "ion-ios-people",
    children: [
      {
        state: "signin",
        name: "SIGNIN"
      },
      {
        state: "signup",
        name: "SIGNUP"
      },
      {
        state: "forgot",
        name: "FORGOT"
      }
      ]
  },

      {
        state: "error",
        name: "ERROR",
        type: "sub",
        icon: "ion-ios-information",
        children: [
          {
            state: "404",
            name: "404"
          },
          {
            state: "500",
            name: "500"
          }
        ]
      }
]

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
