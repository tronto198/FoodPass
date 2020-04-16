import { Component, OnInit, AfterViewChecked, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.page.html',
  styleUrls: ['./menu-info.page.scss'],
})
export class MenuInfoPage implements OnInit, AfterContentInit {
  private routedata: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.routedata = Number(this.route.snapshot.paramMap.get("id"));
    // this.menuList = this.serverConnecter.getMenuData(this.routedata);

  }

  ngAfterContentInit(){
    if(isNaN(this.routedata)){
      this.router.navigateByUrl('/tabs/tab-home');
    }
  }

}
