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

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
