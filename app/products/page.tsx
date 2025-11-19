"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Mock product data
const products = [
  {
    id: 1,
    name: "DX8000",
    type: "Terminal",
    status: "Live in 5 propositions",
  },
  {
    id: 2,
    name: "eCommerce Pay As You Go",
    type: "Ecommerce",
    status: "Live in 5 propositions",
  },
  {
    id: 3,
    name: "Desk/5000",
    type: "Terminal",
    status: "Live in 5 propositions",
  },
  {
    id: 4,
    name: "DX8000",
    type: "Terminal",
    status: "Live in 5 propositions",
  },
  {
    id: 5,
    name: "Desk/5000",
    type: "Terminal",
    status: "Live in 5 propositions",
  },
  {
    id: 6,
    name: "DX8000",
    type: "Terminal",
    status: "Live in 5 propositions",
  },
];

// Account products data
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

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="ml-[220px] flex-1">
        <div className="border-b p-4">
          <span>Products</span>
        </div>

        <div className="p-6">
          <h1 className="mb-6 text-2xl font-semibold">Products</h1>

          <Tabs defaultValue="acceptance">
            <TabsList>
              <TabsTrigger value="acceptance">Acceptance</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="acquiring">Acquiring</TabsTrigger>
              <TabsTrigger value="addons">Addons</TabsTrigger>
            </TabsList>

            <TabsContent value="acceptance">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select defaultValue="name-az">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sort by name (A-Z)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-az">Sort by name (A-Z)</SelectItem>
                    <SelectItem value="name-za">Sort by name (Z-A)</SelectItem>
                    <SelectItem value="date-newest">Date (Newest)</SelectItem>
                    <SelectItem value="date-oldest">Date (Oldest)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    type={product.type}
                    status={product.status}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search"
                        className="pl-10"
                      />
                    </div>

                    <div className="flex gap-3">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select defaultValue="name-az">
                        <SelectTrigger>
                          <SelectValue placeholder="Sort by name (A-Z)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="name-az">Sort by name (A-Z)</SelectItem>
                          <SelectItem value="name-za">Sort by name (Z-A)</SelectItem>
                          <SelectItem value="date-newest">Date (Newest)</SelectItem>
                          <SelectItem value="date-oldest">Date (Oldest)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-4 flex gap-4 border-b pb-2">
                    <div className="w-[300px]">
                      <p className="text-xs text-muted-foreground">Name</p>
                    </div>
                    <div className="w-[200px]">
                      <p className="text-xs text-muted-foreground">Propositions</p>
                    </div>
                    <div className="w-[200px]">
                      <p className="text-xs text-muted-foreground">Updated</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {accountProducts.map((product, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-[300px]">
                          <p className="text-sm">{product.name}</p>
                        </div>
                        <div className="w-[200px]">
                          <Badge variant="success">{product.propositions}</Badge>
                        </div>
                        <div className="w-[200px]">
                          <p className="text-sm">{product.updated}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t pt-4">
                    <p className="text-sm text-muted-foreground">1 - 3 of 3 results</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="acquiring">
              <p className="text-sm text-muted-foreground">Acquiring products will be displayed here.</p>
            </TabsContent>

            <TabsContent value="addons">
              <p className="text-sm text-muted-foreground">Addons products will be displayed here.</p>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
