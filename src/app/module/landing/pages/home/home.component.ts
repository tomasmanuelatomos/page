import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 


  cardLines : {
    count : string;
    description : string
  }[] = [
    {
      count: "40.079.500+",
      description: "COMPANIES FOUND"
    },
    {
      count: "48.024.500+",
      description: "E-MAILS FOUND"
    },
    {
      count: "24",
      description: "LEAD SOURCES"
    },
    {
      count: "8.500.250+",
      description: "EMPLOYEES FOUND"
    },
    {
      count: "4.630.360+",
      description: "EMPLOYEES FOUND"
    }
  ];


  listCloud : {
    designation : string;
    description : string
  }[] = [
    {
      designation: "Always fresh",
      description: "No outdated databases. All leads are collected at the time of research."
    },
    {
      designation: "Worldwide coverage",
      description: "Find leads from anywhere in the world because we support all countries."
    },
    {
      designation: "Cloud-based",
      description: "No software or proxy to install. Manage your camps from anywhere."
    },
    {
      designation: "More Leads",
      description: "We found much more than you might imagine."
    },
    {
      designation: "More sources",
      description: "We research all major business listing sources to provide you with maximum leads."
    },
    {
      designation: "More data",
      description: "We collect more data about companies than any other platform on the market."
    },
  ];




  listDroodown : {
    designation : string;
    description : string
  }[] = [
    {
      designation: "Lead Segmentation",
      description: "Discover valuable leads efficiently with our advanced niche search tool. Refine your search with customizable filters, ensuring each lead meets your specific criteria. Supercharge your lead generation strategy with us today!"
    },
    {
      designation: "Lead Qualification",
      description: "Discover valuable leads efficiently with our advanced niche search tool. Refine your search with customizable filters, ensuring each lead meets your specific criteria. Supercharge your lead generation strategy with us today!"
    },
    {
      designation: "Leads Download",
      description: "Discover valuable leads efficiently with our advanced niche search tool. Refine your search with customizable filters, ensuring each lead meets your specific criteria. Supercharge your lead generation strategy with us today!"
    },
    {
      designation: "Integration with CRM",
      description: "Discover valuable leads efficiently with our advanced niche search tool. Refine your search with customizable filters, ensuring each lead meets your specific criteria. Supercharge your lead generation strategy with us today!"
    },
    {
      designation: "E-books Tab",
      description: "Discover valuable leads efficiently with our advanced niche search tool. Refine your search with customizable filters, ensuring each lead meets your specific criteria. Supercharge your lead generation strategy with us today!"
    }
  ]
}
