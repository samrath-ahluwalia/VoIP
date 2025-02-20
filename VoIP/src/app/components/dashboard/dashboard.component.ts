import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexGrid,
  ApexTheme,
  ApexTooltip,
  ApexFill,
  ChartType
} from "ng-apexcharts";
import { NgApexchartsModule } from "ng-apexcharts";

interface Stat {
  label: string;
  value: string;
  trend?: number;
  icon?: string;
  bgColor?: string;
  iconColor?: string;
}

interface RawIssueData {
  category: string;
  subIssue: string;
  count: number;
}

interface SubIssue {
  issue: string;
  count: number;
  percentage: number;
}

interface CategoryAnalytics {
  category: string;
  totalCount: number;
  percentage: number;
  subIssues: SubIssue[];
}

interface ChartIssueCategory {
  name: string;
  percentage: number;
  color: string;
  count: number;
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

interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  fill: ApexFill;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, NgApexchartsModule]
})
export class DashboardComponent implements OnInit {
  isMobileMenuOpen = false;
  @ViewChild("callVolumeChart") callVolumeChart: any;
  @ViewChild("issueCategoryChart") issueCategoryChart: any;
  
  public callVolumeOptions!: ChartOptions;
  public issueCategoryOptions!: ChartOptions;

  issues = [
    { category: "Miscellaneous", subcategory: "Confirmation of exam start time", count: 2 },
    { category: "Invigilator", subcategory: "Female invigilators insufficient", count: 2 },
    { category: "Miscellaneous", subcategory: "Unclear conversation", count: 2 },
    { category: "Miscellaneous", subcategory: "General inquiry and updates", count: 2 },
    { category: "Frisking", subcategory: "Female frisking in open", count: 2 },
    { category: "Miscellaneous", subcategory: "Exam completion confirmation", count: 2 },
    { category: "Candidate", subcategory: "Candidate unwell", count: 2 },
    { category: "CCTV", subcategory: "Operator unresponsive", count: 2 },
    { category: "Biometric", subcategory: "Manpower absent", count: 2 }
  ];
  

  chartCategories: ChartIssueCategory[] = [
    {
      name: 'Technical Issues',
      percentage: 42,
      color: 'bg-indigo-500',
      count: 0
    },
    {
      name: 'Exam Related',
      percentage: 35,
      color: 'bg-blue-500',
      count: 0
    },
    {
      name: 'Administrative',
      percentage: 23,
      color: 'bg-green-500',
      count: 0
    }
  ];

  rawIssueData: RawIssueData[] = [
    { category: "Admit Card", subIssue: "Wrong subject mentioned in candidate's admit card", count: 25 },
    { category: "Admit Card", subIssue: "Candidate's admit card has center name but candidate's name is not mentioned on center list", count: 18 },
    { category: "Attendance", subIssue: "Biometric count is less than center count", count: 30 },
    { category: "Biometric", subIssue: "Biometric device not working", count: 40 },
    { category: "Biometric", subIssue: "Biometric devices are less", count: 22 },
    { category: "Biometric", subIssue: "Biometric manpower has not reported to the center", count: 35 },
    { category: "Biometric", subIssue: "Biometric manpower reported on center is less", count: 28 },
    { category: "Biometric", subIssue: "Biometric manpower is denying to do biometric of candidates", count: 15 },
    { category: "Biometric", subIssue: "Biometric manpower is not able to do biometric of candidates properly", count: 20 },
    { category: "Biometric", subIssue: "Biometric manpower is behaving rudely with candidates or staff", count: 10 },
    { category: "Biometric", subIssue: "Holograms are not provided to center", count: 12 },
    { category: "Biometric", subIssue: "Holograms provided to the center are less", count: 9 },
    { category: "Biometric", subIssue: "Don't know what to do with holograms", count: 8 },
    { category: "Candidate", subIssue: "Candidate has arrived late, should he/she be given entry", count: 14 },
    { category: "Candidate", subIssue: "Candidate is not feeling well, what should be done", count: 11 },
    { category: "CCTV", subIssue: "CCTV is not working on center", count: 27 },
    { category: "CCTV", subIssue: "CCTV person is not picking the call", count: 19 },
    { category: "CCTV", subIssue: "CCTV person has not reported to the center", count: 16 },
    { category: "CSR", subIssue: "Principal is not signing the CSR report", count: 13 },
    { category: "Entry", subIssue: "Is any candidate coming late?", count: 20 },
    { category: "Entry", subIssue: "Is entry denied by the team or center staff?", count: 18 },
    { category: "Entry", subIssue: "Is there too much crowd in entry area?", count: 25 },
    { category: "Face Mismatch", subIssue: "Face mismatch of candidate, what should be done?", count: 14 },
    { category: "Face Mismatch", subIssue: "Face mismatch, but fingerprint is matching, what should be done?", count: 10 },
    { category: "Frisking", subIssue: "Frisking manpower is not available on center", count: 15 },
    { category: "Frisking", subIssue: "Frisking manpower is denying to do frisking of candidates", count: 12 },
    { category: "Frisking", subIssue: "Female frisking is done in open", count: 8 },
    { category: "Frisking", subIssue: "Female manpower is unavailable for female frisking", count: 11 },
    { category: "Invigilator", subIssue: "Female invigilator is absent on center", count: 17 },
    { category: "Invigilator", subIssue: "Female invigilators are less on center", count: 13 },
    { category: "OMR Sheets", subIssue: "OMR sheets are less on center", count: 21 },
    { category: "OMR Sheets", subIssue: "OMR sheets are unavailable on center", count: 18 },
    { category: "OMR Sheets", subIssue: "OMR sheets are extra on center", count: 12 },
    { category: "OMR Sheets", subIssue: "OMR sheets are damaged", count: 14 },
    { category: "OMR Sheets", subIssue: "OMR sheets are misprinted", count: 10 },
    { category: "Packing Material", subIssue: "Packing material is not provided", count: 16 },
    { category: "Packing Material", subIssue: "Packing material is less", count: 14 },
    { category: "Packing Material", subIssue: "Packing material is damaged", count: 9 },
    { category: "Question Paper", subIssue: "Question paper is less", count: 22 },
    { category: "Question Paper", subIssue: "Question paper is misprinted", count: 18 },
    { category: "Question Paper", subIssue: "Question paper is damaged", count: 12 },
    { category: "Trunk", subIssue: "Trunk keys are not provided", count: 14 },
    { category: "Trunk", subIssue: "Where to open trunk?", count: 11 },
    { category: "VOIP", subIssue: "Caller called multiple times, no one picked earlier", count: 20 },
    { category: "VOIP", subIssue: "VOIP person is not available", count: 18 },
    { category: "VOIP", subIssue: "VOIP person is not picking the call", count: 15 }
  ];

  topCategories: CategoryAnalytics[] = [];

  callData = [
    { time: "00:00 - 00:15", count: 2 },
    { time: "00:15 - 00:30", count: 1 },
    { time: "00:30 - 00:45", count: 1 },
    { time: "00:45 - 01:00", count: 1 },
    { time: "01:00 - 01:15", count: 2 },
    { time: "01:15 - 01:30", count: 3 },
    { time: "01:30 - 01:45", count: 2 },
    { time: "01:45 - 02:00", count: 1 },
    { time: "02:00 - 02:15", count: 1 },
    { time: "02:15 - 02:30", count: 1 },
    { time: "02:30 - 02:45", count: 0 },
    { time: "02:45 - 03:00", count: 1 },
    { time: "03:00 - 03:15", count: 1 },
    { time: "03:15 - 03:30", count: 0 },
    { time: "03:30 - 03:45", count: 0 },
    { time: "03:45 - 04:00", count: 1 },
    { time: "04:00 - 04:15", count: 0 },
    { time: "04:15 - 04:30", count: 0 },
    { time: "04:30 - 04:45", count: 1 },
    { time: "04:45 - 05:00", count: 0 },
    { time: "05:00 - 05:15", count: 1 },
    { time: "05:15 - 05:30", count: 1 },
    { time: "05:30 - 05:45", count: 1 },
    { time: "05:45 - 06:00", count: 1 },
    { time: "06:00 - 06:15", count: 2 },
    { time: "06:15 - 06:30", count: 2 },
    { time: "06:30 - 06:45", count: 1 },
    { time: "06:45 - 07:00", count: 2 },
    { time: "07:00 - 07:15", count: 3 },
    { time: "07:15 - 07:30", count: 4 },
    { time: "07:30 - 07:45", count: 2 },
    { time: "07:45 - 08:00", count: 3 },
    { time: "08:00 - 08:15", count: 5 },
    { time: "08:15 - 08:30", count: 6 },
    { time: "08:30 - 08:45", count: 4 },
    { time: "08:45 - 09:00", count: 5 },
    { time: "09:00 - 09:15", count: 8 },
    { time: "09:15 - 09:30", count: 9 },
    { time: "09:30 - 09:45", count: 10 },
    { time: "09:45 - 10:00", count: 8 },
    { time: "10:00 - 10:15", count: 12 },
    { time: "10:15 - 10:30", count: 13 },
    { time: "10:30 - 10:45", count: 14 },
    { time: "10:45 - 11:00", count: 11 },
    { time: "11:00 - 11:15", count: 16 },
    { time: "11:15 - 11:30", count: 17 },
    { time: "11:30 - 11:45", count: 18 },
    { time: "11:45 - 12:00", count: 14 },
    { time: "12:00 - 12:15", count: 20 },
    { time: "12:15 - 12:30", count: 22 },
    { time: "12:30 - 12:45", count: 19 },
    { time: "12:45 - 13:00", count: 19 },
    { time: "13:00 - 13:15", count: 18 },
    { time: "13:15 - 13:30", count: 20 },
  ];

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

  issueData: { [key: string]: number } = {
    "Admit card not received": 15,
    "Attendance discrepancy": 8,
    "Biometric mismatch": 12,
    "Candidate missing": 6,
    "CCTV malfunction": 10,
    "CSR non-compliance": 4,
    "Entry denial": 7,
    "Face mismatch detected": 9,
    "Frisking issue": 5,
    "Hologram missing": 3,
    "Invigilator absent": 6,
    "OMR sheets damaged": 11,
    "Packing material tampered": 4,
    "Question paper leak": 2,
    "Server room access issue": 5,
    "Trunk not sealed": 3,
    "VOIP communication failure": 7
  };

  constructor(private router: Router) {
    this.initializeChartOptions();
  }

  ngOnInit() {
    this.computeAnalytics();
    this.initializeCharts();
  }

  private initializeChartOptions(): void {
    // Call Volume Chart Options
    this.callVolumeOptions = {
      series: [{
        name: "Call Volume",
        data: []
      }],
      chart: {
        height: 350,
        type: "area" as ChartType,
        toolbar: {
          show: false
        },
        background: "transparent"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth" as "smooth",
        width: 2,
        colors: ["#8b5cf6"]
      },
      xaxis: {
        type: "category",
        categories: [],
        labels: {
          style: {
            colors: "#9ca3af",
            fontSize: "12px"
          },
          rotate: -45,
          trim: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        title: {
          text: "Number of Calls",
          style: {
            color: "#9ca3af",
            fontSize: "13px"
          }
        },
        labels: {
          style: {
            colors: "#9ca3af"
          }
        }
      },
      tooltip: {
        theme: "dark",
        x: {
          show: true
        },
        y: {
          title: {
            formatter: () => "Calls: "
          }
        }
      },
      grid: {
        borderColor: "#1f2937",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      theme: {
        mode: "dark" as "dark"
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: "#8b5cf6",
              opacity: 0.7
            },
            {
              offset: 100,
              color: "#8b5cf6",
              opacity: 0.3
            }
          ]
        }
      }
    };

    // Issue Category Chart Options
    this.issueCategoryOptions = {
      series: [{
        name: "Issues",
        data: []
      }],
      chart: {
        height: 350,
        type: "bar" as ChartType,
        toolbar: {
          show: false
        },
        background: "transparent"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth" as "smooth",
        width: 2,
        colors: ["#6366f1"]
      },
      xaxis: {
        type: "category",
        categories: [],
        labels: {
          style: {
            colors: "#9ca3af",
            fontSize: "12px"
          },
          rotate: -45,
          trim: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        title: {
          text: "Number of Issues",
          style: {
            color: "#9ca3af",
            fontSize: "13px"
          }
        },
        labels: {
          style: {
            colors: "#9ca3af"
          }
        }
      },
      tooltip: {
        theme: "dark",
        x: {
          show: true
        },
        y: {
          title: {
            formatter: () => "Issues: "
          }
        }
      },
      grid: {
        borderColor: "#1f2937",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      theme: {
        mode: "dark" as "dark"
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          opacityFrom: 1,
          opacityTo: 0.7,
          colorStops: [
            {
              offset: 0,
              color: "#6366f1",
              opacity: 1
            },
            {
              offset: 100,
              color: "#6366f1",
              opacity: 0.7
            }
          ]
        }
      }
    };
  }

  initializeCharts() {
    // Initialize Call Volume Chart
    this.callVolumeOptions.series = [{
      name: "Call Volume",
      data: this.callData.map(item => item.count)
    }];
    
    this.callVolumeOptions.xaxis = {
      ...this.callVolumeOptions.xaxis,
      categories: this.callData.map(item => item.time)
    };

    // Initialize Issue Category Chart
    const issueData = Object.entries(this.issueData);
    this.issueCategoryOptions.series = [{
      name: "Issues",
      data: issueData.map(([_, count]) => count)
    }];
    
    this.issueCategoryOptions.xaxis = {
      ...this.issueCategoryOptions.xaxis,
      categories: issueData.map(([name, _]) => name)
    };
  }

  private computeAnalytics(): void {
    // Calculate total count across all categories
    const totalCount = this.rawIssueData.reduce((sum, issue) => sum + issue.count, 0);

    // Group issues by category and calculate totals
    const categoryGroups = this.rawIssueData.reduce((groups, issue) => {
      const category = groups.get(issue.category) || {
        category: issue.category,
        totalCount: 0,
        subIssues: [] as SubIssue[]
      };

      category.totalCount += issue.count;
      category.subIssues.push({
        issue: issue.subIssue,
        count: issue.count,
        percentage: 0
      });

      groups.set(issue.category, category);
      return groups;
    }, new Map<string, { category: string; totalCount: number; subIssues: SubIssue[] }>());

    // Convert to array and calculate percentages
    const analytics = Array.from(categoryGroups.values())
      .map(category => {
        // Calculate category percentage of total
        const percentage = (category.totalCount / totalCount) * 100;

        // Calculate sub-issue percentages within category
        const subIssues = category.subIssues
          .map((subIssue: SubIssue) => ({
            ...subIssue,
            percentage: (subIssue.count / category.totalCount) * 100
          }))
          .sort((a: SubIssue, b: SubIssue) => b.count - a.count) // Sort by count descending
          .slice(0, 3); // Take top 3 sub-issues

        return {
          category: category.category,
          totalCount: category.totalCount,
          percentage: percentage,
          subIssues
        };
      })
      .sort((a, b) => b.totalCount - a.totalCount) // Sort by total count descending
      .slice(0, 3); // Take top 3 categories

    this.topCategories = analytics;
  }

  getTopCategoryColor(index: number): string {
    const colors = ['text-purple-400', 'text-indigo-400', 'text-blue-400'];
    return colors[index] || colors[0];
  }

  getProgressBarColor(index: number, subIndex: number): string {
    const baseColors = ['bg-purple-600', 'bg-indigo-600', 'bg-blue-600'];
    const baseColor = baseColors[index] || baseColors[0];
    
    // Add opacity for sub-issues
    const opacities = ['', '/80', '/60'];
    return baseColor + opacities[subIndex];
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
