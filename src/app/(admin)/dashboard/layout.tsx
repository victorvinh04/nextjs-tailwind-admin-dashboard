"use client";

import React from "react";
import { useSidebar } from '@/components/ui/sidebar';
import Backdrop from '@/layout/Backdrop';
import AppSidebar from '@/layout/AppSidebar';
import AppHeader from '@/layout/AppHeader';

const DashBoardlayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {    
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  
    // Dynamic class for main content margin based on sidebar state
    const mainContentMargin = isMobileOpen
      ? "ml-0"
      : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";
  
    return (
      <div className="min-h-screen xl:flex">
        {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="flex min-h-screen">
          <main className="flex-1">{children}</main>
        </div>
      </div>
      </div>
    );
}

export default DashBoardlayout