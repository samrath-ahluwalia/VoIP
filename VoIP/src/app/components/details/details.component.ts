import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
  ApexFill
} from "ng-apexcharts";
import { NgApexchartsModule } from "ng-apexcharts";

interface Stat {
  label: string;
  value: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

interface CallDetail {
  timestamp: string;
  callerId: string;
  calleeId: string;
  category: string;
  subIssue: string;
  bridgeTime: string;
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
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgApexchartsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isMobileMenuOpen = false;
  @ViewChild("callVolumeChart") callVolumeChart: any;
  
  public callVolumeOptions!: ChartOptions;

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
    }
  ];

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
    { time: "13:15 - 13:30", count: 20 }
  ];

  stats: Stat[] = [
    {
      label: 'Total Calls',
      value: '1,234',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      bgColor: 'bg-purple-500',
      iconColor: 'text-purple-500'
    },
    {
      label: 'Active Calls',
      value: '42',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      bgColor: 'bg-green-500',
      iconColor: 'text-green-500'
    },
    {
      label: 'Avg. Duration',
      value: '5m 23s',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      bgColor: 'bg-blue-500',
      iconColor: 'text-blue-500'
    },
    {
      label: 'Success Rate',
      value: '95.2%',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      bgColor: 'bg-indigo-500',
      iconColor: 'text-indigo-500'
    }
  ];

  ngOnInit(): void {
    this.initializeCallVolumeChart();
    this.initializeCharts();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  private initializeCallVolumeChart(): void {
    this.callVolumeOptions = {
      series: [{
        name: "Call Volume",
        data: []
      }],
      chart: {
        height: 350,
        type: "area" as "area",
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
  }

  initializeCharts() {
    this.callVolumeOptions.series = [{
      name: "Call Volume",
      data: this.callData.map(item => item.count)
    }];
    
    this.callVolumeOptions.xaxis = {
      ...this.callVolumeOptions.xaxis,
      categories: this.callData.map(item => item.time)
    };
  }
}
