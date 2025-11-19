"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AccountPage() {
  const pathname = usePathname();
  
  // Determine active tab based on pathname
  const getActiveTab = () => {
    if (pathname?.startsWith("/products/account")) return "account";
    if (pathname?.startsWith("/products/acquiring")) return "acquiring";
    if (pathname?.startsWith("/products/addons")) return "addons";
    return "acceptance";
  };
  const accountProducts = [
    {
      name: "Minimum Monthly Service Charge",
      propositions: "Live in 5 propositions",
      updated: "23.59 10 Sep 2024",
    },
    {
      name: "SaferPayments Programme Charge",
      propositions: "Live in 14 propositions",
      updated: "23.59 01 Sep 2024",
    },
    {
      name: "SaferPayments Monthly PCI DSS Non-Compliance Fee",
      propositions: "Live in 2 propositions",
      updated: "23.59 01 Sep 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-[#ededed] h-[52px] px-10 py-2.5">
        <div className="flex items-center justify-between h-full">
          <div className="flex gap-2 items-center">
            <p className="text-[#6c6767] text-sm">Products</p>
          </div>
        </div>
      </div>

      <div className="p-10">
        <h1 className="text-2xl font-bold text-black mb-6">Products</h1>

        <Tabs value={getActiveTab()} className="w-full">
          <TabsList className="gap-6 mb-0 h-auto p-0 border-b border-[#cdcccc] rounded-none bg-transparent">
            <TabsTrigger value="acceptance" asChild>
              <Link href="/products" className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-[#0b0101] data-[state=inactive]:text-[#6c6767] text-sm font-normal h-[30px] pb-2 px-0">
                Acceptance
              </Link>
            </TabsTrigger>
            <TabsTrigger value="account" asChild>
              <Link href="/products/account" className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-[#0b0101] data-[state=inactive]:text-[#6c6767] text-sm font-normal h-[30px] pb-2 px-0">
                Account
              </Link>
            </TabsTrigger>
            <TabsTrigger value="acquiring" asChild>
              <Link href="/products/acquiring" className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-[#0b0101] data-[state=inactive]:text-[#6c6767] text-sm font-normal h-[30px] pb-2 px-0">
                Acquiring
              </Link>
            </TabsTrigger>
            <TabsTrigger value="addons" asChild>
              <Link href="/products/addons" className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-[#0b0101] data-[state=inactive]:text-[#6c6767] text-sm font-normal h-[30px] pb-2 px-0">
                Addons
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="mt-8">
          <div className="bg-white border border-[#ededed] rounded-md p-5">
            {/* Search and Filters */}
            <div className="flex gap-4 items-center mb-5 pb-5 border-b border-[#ededed]">
              <div className="flex-1 max-w-[289px]">
                <div className="bg-white border border-[#cdcccc] rounded-md h-8 px-3 py-2.5 flex gap-1 items-center">
                  <svg className="w-4 h-4 text-[#6c6767]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 text-sm text-[#9c9999] bg-transparent border-none outline-none"
                  />
                </div>
              </div>
              
              <div className="ml-auto flex gap-3 items-center">
                <div className="border border-[#e4e4e7] rounded-md h-10 px-3 py-2 flex items-center justify-center gap-2">
                  <span className="text-sm text-[#18181b]">Filter</span>
                  <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className="border border-[#e4e4e7] rounded-md h-10 px-3 py-2 flex items-center justify-center gap-2">
                  <span className="text-sm text-[#18181b]">Sort by name (A-Z)</span>
                  <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Table Header */}
            <div className="flex gap-4 pb-2 mb-2 border-b border-[#ededed]">
              <div className="w-[140px] px-1 py-0.5">
                <p className="text-xs text-[#6c6767]">Name</p>
              </div>
              <div className="w-[140px] px-1 py-0.5 ml-[110px]">
                <p className="text-xs text-[#6c6767]">Propositions</p>
              </div>
              <div className="w-[140px] px-1 py-0.5 ml-[100px]">
                <p className="text-xs text-[#6c6767]">Updated</p>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {accountProducts.map((product, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="w-[300px]">
                    <p className="text-sm text-[#0b0101]">{product.name}</p>
                  </div>
                  <div className="w-[200px]">
                    <span className="bg-[#ecf5ee] text-[#409959] text-sm px-1 py-0.5 rounded">
                      {product.propositions}
                    </span>
                  </div>
                  <div className="w-[200px]">
                    <p className="text-sm text-[#0b0101]">{product.updated}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#ededed]">
              <p className="text-sm text-[#0b0101]">1 - 3 of 3 results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

