import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import AppSidebar from "@/layout/AppSidebar"

import MonthlyTarget from "@/components/ui/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ui/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ui/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ui/ecommerce/RecentOrders";
import DemographicCard from "@/components/ui/ecommerce/DemographicCard";

export default function DashBoardPage() {
  
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 space-y-6 xl:col-span-7">    
            <MonthlySalesChart />
          </div>
    
          <div className="col-span-12 xl:col-span-5">
            <MonthlyTarget />
          </div>
    
          <div className="col-span-12">
            <StatisticsChart />
          </div>
    
          <div className="col-span-12 xl:col-span-5">
            <DemographicCard />
          </div>
    
          <div className="col-span-12 xl:col-span-7">
            <RecentOrders />
          </div>
        </div>        
  )
}
