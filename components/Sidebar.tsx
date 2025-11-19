"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Workflows", href: "/workflows" },
  { name: "Interfaces", href: "/interfaces" },
  { name: "Propositions", href: "/propositions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Products", href: "/products" },
  { name: "Integrations", href: "/integrations" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-screen w-[220px] border-r border-grey-200 bg-beige-50">
      {/* Company Header */}
      <div className="border-b border-grey-200 px-3 py-2">
        <div className="flex h-8 items-center gap-2">
          <div className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-indigo-500/10">
            <span className="text-[8px] font-bold leading-[1.4] text-indigo-500">
              W
            </span>
          </div>
          <span className="text-sm font-bold text-black-500">Worldpay</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-[68px] flex flex-col gap-2 px-3">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex h-9 items-center rounded px-3 text-sm transition-colors",
                isActive
                  ? "bg-accent text-black-500"
                  : "text-black-500 hover:bg-accent"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Menu */}
      <div className="absolute bottom-[60px] left-0 w-full px-5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-[13px] w-[6px] rounded bg-black/25 opacity-70" />
            <div className="h-4 w-4 rounded-[2px] border-[1.5px] border-black opacity-70" />
            <div className="h-[14px] w-[1.5px] bg-black opacity-70" />
          </div>
          <span className="text-sm text-black-500">Collapse menu</span>
        </div>
      </div>

      {/* User Section */}
      <div className="absolute bottom-0 left-0 w-full border-t border-grey-200 p-2">
        <div className="flex h-9 items-center justify-between rounded px-3">
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-indigo-500/10">
              <span className="text-[8px] font-bold leading-[1.4] text-indigo-500">
                OS
              </span>
            </div>
            <span className="text-sm text-black-500">Olivia Stannah</span>
          </div>
          <ChevronDown className="h-4 w-4 text-black-500" />
        </div>
      </div>
    </div>
  );
}

