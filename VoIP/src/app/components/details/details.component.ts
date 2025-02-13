import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CallDetail {
  timestamp: string;
  callerId: string;
  calleeId: string;
  category: string;
  subIssue: string;
  bridgeTime: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DetailsComponent {
  isMobileMenuOpen = false;

  callDetails: CallDetail[] = [
    {
      timestamp: "2025-02-13 09:15:23",
      callerId: "AGENT001",
      calleeId: "CENTER123",
      category: "Admit Card",
      subIssue: "Wrong subject mentioned in candidate's admit card",
      bridgeTime: "4m 32s"
    },
    {
      timestamp: "2025-02-13 09:45:12",
      callerId: "AGENT002",
      calleeId: "CENTER456",
      category: "Biometric",
      subIssue: "Biometric device not working",
      bridgeTime: "3m 15s"
    },
    {
      timestamp: "2025-02-13 10:00:45",
      callerId: "AGENT003",
      calleeId: "CENTER789",
      category: "CCTV",
      subIssue: "CCTV is not working on center",
      bridgeTime: "5m 20s"
    },
    {
      timestamp: "2025-02-13 10:30:18",
      callerId: "AGENT004",
      calleeId: "CENTER234",
      category: "Entry",
      subIssue: "Is there too much crowd in entry area?",
      bridgeTime: "2m 45s"
    },
    {
      timestamp: "2025-02-13 11:00:33",
      callerId: "AGENT005",
      calleeId: "CENTER567",
      category: "Face Mismatch",
      subIssue: "Face mismatch of candidate, what should be done?",
      bridgeTime: "6m 10s"
    },
    {
      timestamp: "2025-02-13 11:30:55",
      callerId: "AGENT006",
      calleeId: "CENTER890",
      category: "OMR Sheets",
      subIssue: "OMR sheets are less on center",
      bridgeTime: "3m 50s"
    },
    {
      timestamp: "2025-02-13 12:00:15",
      callerId: "AGENT007",
      calleeId: "CENTER345",
      category: "Question Paper",
      subIssue: "Question paper is misprinted",
      bridgeTime: "4m 25s"
    },
    {
      timestamp: "2025-02-13 12:30:40",
      callerId: "AGENT008",
      calleeId: "CENTER678",
      category: "VOIP",
      subIssue: "VOIP person is not available",
      bridgeTime: "2m 55s"
    }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
