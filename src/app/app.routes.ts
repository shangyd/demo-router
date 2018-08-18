import { RouterModule } from "@angular/router";

export const appRoutes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "jokes",
    loadChildren: "./jokes/jokes.module#JokesModule"
  },
  {
    path: "**", //通配符匹配
    loadChildren: "./home/home.module#HomeModule"
  }
];
