import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../../enums/routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerActions: { title: string, routerLink: string, active?: boolean }[] = [
    {
      title: 'Home',
      routerLink: AppRoutes.home,
    },
    {
      title: 'Protective footwear',
      routerLink: AppRoutes.protectiveFootwear,
    },
    {
      title: 'Professional footwear',
      routerLink: AppRoutes.professionalFootwear,
    },
    {
      title: 'Medical footwear',
      routerLink: AppRoutes.medicalFootwear,
    },
    {
      title: 'Accessories',
      routerLink: AppRoutes.accessories,
    },
    {
      title: 'About Us',
      routerLink: AppRoutes.aboutUs,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
