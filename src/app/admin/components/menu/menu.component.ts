import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],

})
export class MenuComponent implements OnInit {
  public menuProperties: Array<Menu> = [
    {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'fas fa-chart-pie',
        url: ''
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: 'fas fa-chart-bar',
        url: 'statistics'
      }
    ]
  },
    {
      id: '2',
      titre: 'Produits',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Produits',
          icon: 'fas fa-boxes',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Mouvements du stock',
          icon: 'fab fa-stack-overflow',
          url: 'mvtstk'
        }
      ]
    },
    {
      id: '3',
      titre: 'Commandes',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fas fa-users',
          url: 'clients'
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fas fa-shopping-basket',
          url: 'commandesclient'
        }
      ]
    },

    {
      id: '4',
      titre: 'Paramètres',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [

        {
          id: '41',
          titre: 'Utilisateurs',
          icon: 'fas fa-users-cog',
          url: 'utilisateurs'
        }
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined;
  constructor(private router: Router){}
  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (!menu.url) return;
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }


  }


