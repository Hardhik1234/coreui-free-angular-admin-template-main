import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards/cards.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base',
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
      },
      // {
      //   path: 'accordion',
      //   component: AccordionsComponent,
      //   data: {
      //     title: 'Accordion',
      //   },
      // },
      // {
      //   path: 'breadcrumbs',
      //   component: BreadcrumbsComponent,
      //   data: {
      //     title: 'Breadcrumbs',
      //   },
      // },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards',
        },
      },
      // {
      //   path: 'carousel',
      //   component: CarouselsComponent,
      //   data: {
      //     title: 'Carousel',
      //   },
      // },
      // {
      //   path: 'collapse',
      //   component: CollapsesComponent,
      //   data: {
      //     title: 'Collapse',
      //   },
      // },
      // {
      //   path: 'list-group',
      //   component: ListGroupsComponent,
      //   data: {
      //     title: 'List Group',
      //   },
      // },
      // {
      //   path: 'navs',
      //   component: NavsComponent,
      //   data: {
      //     title: 'Navs & Tabs',
      //   },
      // },
      // {
      //   path: 'pagination',
      //   component: PaginationsComponent,
      //   data: {
      //     title: 'Pagination',
      //   },
      // },
      // {
      //   path: 'popovers',
      //   component: PopoversComponent,
      //   data: {
      //     title: 'Popovers',
      //   },
      // },
      // {
      //   path: 'progress',
      //   component: ProgressComponent,
      //   data: {
      //     title: 'Progress',
      //   },
      // },
      // {
      //   path: 'spinners',
      //   component: SpinnersComponent,
      //   data: {
      //     title: 'Spinners',
      //   },
      // },
      // {
      //   path: 'tables',
      //   component: TablesComponent,
      //   data: {
      //     title: 'Tables',
      //   },
      // },
      // {
      //   path: 'tabs',
      //   component: TabsComponent,
      //   data: {
      //     title: 'Tabs',
      //   },
      // },
      // {
      //   path: 'tooltips',
      //   component: TooltipsComponent,
      //   data: {
      //     title: 'Tooltips',
      //   },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

