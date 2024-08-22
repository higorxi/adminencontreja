"use client"
import { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon as HeroHomeIcon,
  ShoppingCartIcon as HeroShoppingCartIcon,
  CubeIcon as HeroPackageIcon,
  UsersIcon as HeroUsersIcon,
  ChartBarIcon as HeroLineChartIcon,
  CogIcon as HeroSettingsIcon,
  XMarkIcon as HeroCloseIcon,
  Bars3Icon as HeroMenuIcon 
} from '@heroicons/react/24/outline';

export function NavBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(''); 

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <aside className={`fixed inset-y-0 left-0 z-10 flex h-full transition-all duration-300 ${collapsed ? 'w-18' : 'w-64'} flex-col border-r bg-background`}>
      <nav className={`flex flex-col gap-4 px-4 py-6 ${collapsed ? 'items-center' : 'items-start'}`}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`text-foreground mb-4 flex items-center ${collapsed ? 'justify-center' : 'justify-start'}`}
        >
          {collapsed ? (
            <HeroMenuIcon className="h-6 w-6" /> 
          ) : (
            <HeroCloseIcon className="h-6 w-6" /> 
          )}
        </button>
        <Link
          href="#"
          className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeItem === 'dashboard' ? 'bg-gray-300 text-black' : 'text-foreground hover:bg-gray-100 hover:text-black'}`}
          onClick={() => handleClick('dashboard')}
          prefetch={false}
        >
          <HeroHomeIcon className={`h-6 w-6`} />
          {!collapsed && <span className="ml-3">Dashboard</span>}
        </Link>
        <Link
          href="#"
          className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeItem === 'orders' ? 'bg-gray-300 text-black' : 'text-foreground hover:bg-gray-100 hover:text-black'}`}
          onClick={() => handleClick('orders')}
          prefetch={false}
        >
          <HeroShoppingCartIcon className={`h-6 w-6`} />
          {!collapsed && <span className="ml-3">Orders</span>}
        </Link>
        <Link
          href="#"
          className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeItem === 'products' ? 'bg-gray-300 text-black' : 'text-foreground hover:bg-gray-100 hover:text-black'}`}
          onClick={() => handleClick('products')}
          prefetch={false}
        >
          <HeroPackageIcon className={`h-6 w-6`} />
          {!collapsed && <span className="ml-3">Products</span>}
        </Link>
        <Link
          href="#"
          className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeItem === 'customers' ? 'bg-gray-300 text-black' : 'text-foreground hover:bg-gray-100 hover:text-black'}`}
          onClick={() => handleClick('customers')}
          prefetch={false}
        >
          <HeroUsersIcon className={`h-6 w-6`} />
          {!collapsed && <span className="ml-3">Customers</span>}
        </Link>
        <Link
          href="#"
          className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeItem === 'analytics' ? 'bg-gray-300 text-black' : 'text-foreground hover:bg-gray-100 hover:text-black'}`}
          onClick={() => handleClick('analytics')}
          prefetch={false}
        >
          <HeroLineChartIcon className={`h-6 w-6`} />
          {!collapsed && <span className="ml-3">Analytics</span>}
        </Link>
      </nav>
      <div className="mt-auto px-4 py-6">
        <Link
          href="#"
          className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeItem === 'settings' ? 'bg-gray-300 text-black' : 'text-foreground hover:bg-gray-100 hover:text-black'}`}
          onClick={() => handleClick('settings')}
          prefetch={false}
        >
          <HeroSettingsIcon className={`h-6 w-6`} />
          {!collapsed && <span className="ml-3">Settings</span>}
        </Link>
      </div>
    </aside>
  );
}
