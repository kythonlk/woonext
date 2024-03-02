import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";

export default function AccountTable() {
  const orders = [
    {
      id: "#3210",
      customer: "Olivia Martin",
      channel: "Online Store",
      date: "February 20, 2022",
      total: "$42.25",
      status: "Shipped",
    },
    {
      id: "#3209",
      customer: "Ava Johnson",
      channel: "Shop",
      date: "January 5, 2022",
      total: "$74.99",
      status: "Paid",
    },
    {
      id: "#3204",
      customer: "Michael Johnson",
      channel: "Shop",
      date: "August 3, 2021",
      total: "$64.75",
      status: "Unfulfilled",
    },
    {
      id: "#3203",
      customer: "Lisa Anderson",
      channel: "Online Store",
      date: "July 15, 2021",
      total: "$34.50",
      status: "Shipped",
    },
    {
      id: "#3202",
      customer: "Samantha Green",
      channel: "Shop",
      date: "June 5, 2021",
      total: "$89.99",
      status: "Paid",
    },
    {
      id: "#3201",
      customer: "Adam Barlow",
      channel: "Online Store",
      date: "May 20, 2021",
      total: "$24.99",
      status: "Unfulfilled",
    },
    {
      id: "#3207",
      customer: "Sophia Anderson",
      channel: "Shop",
      date: "November 2, 2021",
      total: "$99.99",
      status: "Paid",
    },
    {
      id: "#3206",
      customer: "Daniel Smith",
      channel: "Online Store",
      date: "October 7, 2021",
      total: "$67.50",
      status: "Shipped",
    },
    {
      id: "#3205",
      customer: "Grace Jones",
      channel: "Marketplace",
      date: "September 15, 2021",
      total: "$55.00",
      status: "Processing",
    },
    {
      id: "#3208",
      customer: "Emma Wilson",
      channel: "Direct Sale",
      date: "December 20, 2021",
      total: "$120.75",
      status: "Completed",
    },
    {
      id: "#3211",
      customer: "James Brown",
      channel: "Online Store",
      date: "March 8, 2022",
      total: "$48.25",
      status: "Pending",
    },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order</TableHead>
          <TableHead className="min-w-[150px]">Customer</TableHead>
          <TableHead className="hidden md:table-cell">Channel</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell className="hidden md:table-cell">
              {order.channel}
            </TableCell>
            <TableCell className="hidden md:table-cell">{order.date}</TableCell>
            <TableCell className="text-right">{order.total}</TableCell>
            <TableCell className="hidden sm:table-cell">
              {order.status}
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View order</DropdownMenuItem>
                  <DropdownMenuItem>Customer details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
