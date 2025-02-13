import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

interface Stat {
  label: string;
  value: string;
  trend?: number;
  icon?: string;
  bgColor?: string;
  iconColor?: string;
}

interface IssueCategory {
  name: string;
  percentage: number;
  color: string;
}

interface VenueInsight {
  name: string;
  riskLevel: 'High Risk' | 'Medium Risk' | 'Low Risk';
  riskColor: string;
  totalIssues: number;
  topIssues: {
    name: string;
    percentage: number;
    color: string;
  }[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  // Stats Grid Data
  stats: Stat[] = [
    {
      label: 'Total Calls',
      value: '2,547',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
      label: 'Success Rate',
      value: '92.4%',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      label: 'Received Calls',
      value: '187',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      icon: 'M4 7h16M4 12h16m-7 5h7'
    },
    {
      label: 'Avg Duration',
      value: '4m 32s',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  // AI Analytics Data
  issueCategories: IssueCategory[] = [
    {
      name: 'Technical Issues',
      percentage: 42,
      color: 'bg-indigo-500'
    },
    {
      name: 'Exam Related',
      percentage: 28,
      color: 'bg-blue-500'
    },
    {
      name: 'Administrative',
      percentage: 18,
      color: 'bg-green-500'
    }
  ];

  // Venue Insights Data
  venues: VenueInsight[] = [
    {
      name: 'Center C',
      riskLevel: 'High Risk',
      riskColor: 'text-red-600 bg-red-50',
      totalIssues: 156,
      topIssues: [
        { name: 'System Downtime', percentage: 42, color: 'text-red-600' },
        { name: 'Network Connectivity', percentage: 35, color: 'text-orange-600' },
        { name: 'Software Glitches', percentage: 23, color: 'text-yellow-600' }
      ]
    },
    {
      name: 'Center B',
      riskLevel: 'Medium Risk',
      riskColor: 'text-orange-600 bg-orange-50',
      totalIssues: 98,
      topIssues: [
        { name: 'Hardware Failures', percentage: 38, color: 'text-red-600' },
        { name: 'Login Problems', percentage: 32, color: 'text-orange-600' },
        { name: 'Data Sync Issues', percentage: 30, color: 'text-yellow-600' }
      ]
    },
    {
      name: 'Center A',
      riskLevel: 'Low Risk',
      riskColor: 'text-yellow-600 bg-yellow-50',
      totalIssues: 67,
      topIssues: [
        { name: 'Browser Compatibility', percentage: 36, color: 'text-red-600' },
        { name: 'Audio Quality', percentage: 33, color: 'text-orange-600' },
        { name: 'User Interface', percentage: 31, color: 'text-yellow-600' }
      ]
    },
    {
      name: 'Center D',
      riskLevel: 'Low Risk',
      riskColor: 'text-green-600 bg-green-50',
      totalIssues: 45,
      topIssues: [
        { name: 'User Training', percentage: 40, color: 'text-red-600' },
        { name: 'Documentation', percentage: 35, color: 'text-orange-600' },
        { name: 'Feature Requests', percentage: 25, color: 'text-yellow-600' }
      ]
    }
  ];

  ngOnInit() {
    // Initialize any necessary data or configurations
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
