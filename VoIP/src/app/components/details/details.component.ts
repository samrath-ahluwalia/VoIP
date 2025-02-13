import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CallDetail {
  id: number;
  date: string;
  caller: string;
  duration: string;
  status: string;
  category: string;
  priority: string;
}

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  isMobileMenuOpen = false;

  callDetails: CallDetail[] = [
    {
      id: 1,
      date: '2025-02-13',
      caller: 'John Smith',
      duration: '5m 30s',
      status: 'Completed',
      category: 'Technical',
      priority: 'High'
    },
    {
      id: 2,
      date: '2025-02-13',
      caller: 'Emma Johnson',
      duration: '3m 45s',
      status: 'Failed',
      category: 'Network',
      priority: 'Medium'
    },
    {
      id: 3,
      date: '2025-02-13',
      caller: 'Michael Brown',
      duration: '8m 15s',
      status: 'Completed',
      category: 'Software',
      priority: 'Low'
    },
    {
      id: 4,
      date: '2025-02-13',
      caller: 'Sarah Wilson',
      duration: '4m 20s',
      status: 'In Progress',
      category: 'Hardware',
      priority: 'High'
    },
    {
      id: 5,
      date: '2025-02-13',
      caller: 'David Lee',
      duration: '6m 55s',
      status: 'Completed',
      category: 'Technical',
      priority: 'Medium'
    }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
