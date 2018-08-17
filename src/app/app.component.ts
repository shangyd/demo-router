import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router,NavigationStart, NavigationEnd, ActivatedRoute } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // 使用this.title和this.router
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
      )
      .pipe(filter(route => route.outlet === "primary"))
      .pipe(mergeMap(route => route.data))
      .subscribe(event => {
        this.title.setTitle(event["title"]);
        console.log(event); //暴露router event
        console.log("NavigationStart:",event instanceof NavigationStart);
        console.log("NavigationEnd:",event instanceof NavigationEnd);
        // if (event instanceof NavigationEnd) {
        //  console.log(event instanceof NavigationEnd);
        // }
      });
  }
}
