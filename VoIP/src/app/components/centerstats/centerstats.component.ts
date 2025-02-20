import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface CenterStats {
  centerCode: string;
  status: string;
  totalCalls: number;
  successfulCalls: number;
  categories: string;
  subcategories: string;
  lastActive: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

@Component({
  selector: 'app-centerstats',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './centerstats.component.html',
  styleUrls: ['./centerstats.component.css']
})
export class CenterstatsComponent {
  isMobileMenuOpen = false;
  
  centerStats: CenterStats[] = [
    {
      centerCode: "1001",
      status: "Active",
      totalCalls: 150,
      successfulCalls: 140,
      categories: "Technical",
      subcategories: "Audio Issue",
      lastActive: "2025-02-19"
    },
    {
      centerCode: "1002",
      status: "Inactive",
      totalCalls: 75,
      successfulCalls: 60,
      categories: "General",
      subcategories: "Login Issue",
      lastActive: "2025-02-18"
    },
    {
      centerCode: "1003",
      status: "Active",
      totalCalls: 200,
      successfulCalls: 190,
      categories: "Technical",
      subcategories: "Network Issue",
      lastActive: "2025-02-19"
    },
    {
      centerCode: "1004",
      status: "Active",
      totalCalls: 120,
      successfulCalls: 110,
      categories: "General",
      subcategories: "Password Reset",
      lastActive: "2025-02-17"
    },
    {
      centerCode: "1005",
      status: "Inactive",
      totalCalls: 50,
      successfulCalls: 45,
      categories: "Billing",
      subcategories: "Payment Failed",
      lastActive: "2025-02-16"
    }
  ];

  get stats(): Stat[] {
    return [
      {
        label: 'Total Centers',
        value: this.centerStats.length.toString(),
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        bgColor: 'bg-purple-500',
        iconColor: 'text-purple-500'
      },
      {
        label: 'Active Centers',
        value: this.centerStats.filter(c => c.status === 'Active').length.toString(),
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        bgColor: 'bg-green-500',
        iconColor: 'text-green-500'
      },
      {
        label: 'Avg. Calls/Center',
        value: Math.round(this.centerStats.reduce((sum, c) => sum + c.totalCalls, 0) / this.centerStats.length).toString(),
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        bgColor: 'bg-blue-500',
        iconColor: 'text-blue-500'
      },
      {
        label: 'CCR Count',
        value: '15',  
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        bgColor: 'bg-indigo-500',
        iconColor: 'text-indigo-500'
      },
      {
        label: 'Active CCRs',
        value: '12',  
        icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
        bgColor: 'bg-violet-500',
        iconColor: 'text-violet-500'
      }
    ];
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
