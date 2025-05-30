import { Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { NewsViewComponent } from './modules/news/news-view/news-view.component';

export const routes: Routes = [
  {
    path: "",
    title: "mainblog",
    pathMatch: "full",
    component: HomepageComponent
  },
  {
    path: "news",
    title: "mainblog - Novidades",
    component: NewsViewComponent
  },
  // {
  //   path: "login",
  //   title: "SAC - Login",
  //   canActivate: [redirectLogin],
  //   component: SigninComponent
  // },
  // {
  //   path: "",
  //   title: "SAC",
  //   canActivate: [authGuard],
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: "dashboard",
  //       title: "Dashboard",
  //       component: DashboardViewComponent
  //     },
  //     {
  //       path: "customers",
  //       title: "Clientes",
  //       component: CustomersViewComponent
  //     },
  //     {
  //       path: "customers/:id",
  //       title: "Clientes",
  //       component: CustomersDetailComponent
  //     },
  //     {
  //       path: "service-order",
  //       title: "Ordem de Serviço",
  //       component: DashboardViewComponent
  //     },
  //   ]
  // }
];

