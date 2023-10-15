import { ArrowUpDown, Download, Search } from "lucide-react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Ride 1",
    pickup: "New York",
    destination: "Los Angeles",
    date: "2023-10-14T02:18:12.928Z",
    time: "8:00AM",
    assigned_driver: "John Doe",
    status: "completed",
  },
  {
    id: 2,
    title: "Ride 2",
    pickup: "Chicago",
    destination: "Houston",
    date: "2023-10-15T03:20:45.928Z",
    time: "9:30AM",
    assigned_driver: "Jane Smith",
    status: "scheduled",
  },
  {
    id: 3,
    title: "Ride 3",
    pickup: "Los Angeles",
    destination: "San Francisco",
    date: "2023-10-16T04:22:58.928Z",
    time: "10:15AM",
    assigned_driver: "Mike Johnson",
    status: "in_progress",
  },
  {
    id: 4,
    title: "Ride 4",
    pickup: "Miami",
    destination: "Orlando",
    date: "2023-10-17T05:24:10.928Z",
    time: "11:45AM",
    assigned_driver: "Sarah Davis",
    status: "completed",
  },
  {
    id: 5,
    title: "Ride 5",
    pickup: "Seattle",
    destination: "Portland",
    date: "2023-10-18T06:26:32.928Z",
    time: "12:30PM",
    assigned_driver: "Chris Wilson",
    status: "scheduled",
  },
  {
    id: 6,
    title: "Ride 6",
    pickup: "Boston",
    destination: "Washington D.C.",
    date: "2023-10-19T07:28:44.928Z",
    time: "1:15PM",
    assigned_driver: "Emily Anderson",
    status: "in_progress",
  },
  {
    id: 7,
    title: "Ride 7",
    pickup: "San Diego",
    destination: "Las Vegas",
    date: "2023-10-20T08:30:56.928Z",
    time: "2:45PM",
    assigned_driver: "David White",
    status: "completed",
  },
  {
    id: 8,
    title: "Ride 8",
    pickup: "Denver",
    destination: "Phoenix",
    date: "2023-10-21T09:33:18.928Z",
    time: "3:30PM",
    assigned_driver: "Olivia Brown",
    status: "scheduled",
  },
  {
    id: 9,
    title: "Ride 9",
    pickup: "Atlanta",
    destination: "Nashville",
    date: "2023-10-22T10:35:30.928Z",
    time: "4:15PM",
    assigned_driver: "James Taylor",
    status: "in_progress",
  },
  {
    id: 10,
    title: "Ride 10",
    pickup: "Dallas",
    destination: "Austin",
    date: "2023-10-23T11:37:42.928Z",
    time: "5:45PM",
    assigned_driver: "Sophia Lee",
    status: "completed",
  },
];

const badgeCls =
  "w-auto px-4 py-1.5 rounded flex items-center justify-center text-xs space-x-1.5 font-medium";

export const columns = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "title",
    header: "Ride",
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-4">
          {/* ride image */}
          <img
            width={43}
            height={43}
            className="max-h-[43px] max-w-[43px] rounded-full"
            src="/assets/images/car.png"
            alt="car image"
          />
          <h4 className="font-semibold leading-[175%] text-[#1a1a1a] text-lg">
            {row.getValue("title")}
          </h4>
        </div>
      );
    },
  },
  {
    accessorKey: "pickup",
    header: "Pickup",
    cell: ({ row }) => <span>{row.getValue("pickup")}</span>,
  },
  {
    accessorKey: "destination",
    header: "Destination",
    cell: ({ row }) => <span>{row.getValue("destination")}</span>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2 text-lg">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-mt-1"
        >
          <path
            d="M7.32812 5.27344C6.95229 5.27344 6.64062 4.96177 6.64062 4.58594V1.83594C6.64062 1.4601 6.95229 1.14844 7.32812 1.14844C7.70396 1.14844 8.01562 1.4601 8.01562 1.83594V4.58594C8.01562 4.96177 7.70396 5.27344 7.32812 5.27344Z"
            fill="#8A9099"
          />
          <path
            d="M14.6719 5.27344C14.296 5.27344 13.9844 4.96177 13.9844 4.58594V1.83594C13.9844 1.4601 14.296 1.14844 14.6719 1.14844C15.0477 1.14844 15.3594 1.4601 15.3594 1.83594V4.58594C15.3594 4.96177 15.0477 5.27344 14.6719 5.27344Z"
            fill="#8A9099"
          />
          <path
            d="M7.79167 13.2931C7.6725 13.2931 7.55333 13.2656 7.44333 13.2198C7.32417 13.1739 7.2325 13.1098 7.14083 13.0273C6.97583 12.8531 6.875 12.6239 6.875 12.3764C6.875 12.2573 6.9025 12.1381 6.94834 12.0281C6.99417 11.9181 7.05833 11.8173 7.14083 11.7256C7.2325 11.6431 7.32417 11.5789 7.44333 11.5331C7.77333 11.3956 8.18583 11.4689 8.4425 11.7256C8.6075 11.8998 8.70833 12.1381 8.70833 12.3764C8.70833 12.4314 8.69917 12.4956 8.69 12.5598C8.68083 12.6148 8.6625 12.6698 8.635 12.7248C8.61666 12.7798 8.58917 12.8348 8.5525 12.8898C8.525 12.9356 8.47917 12.9814 8.4425 13.0273C8.26833 13.1923 8.03 13.2931 7.79167 13.2931Z"
            fill="#8A9099"
          />
          <path
            d="M10.9948 13.2933C10.8756 13.2933 10.7565 13.2658 10.6465 13.2199C10.5273 13.1741 10.4356 13.1099 10.344 13.0274C10.179 12.8533 10.0781 12.6241 10.0781 12.3766C10.0781 12.2574 10.1056 12.1383 10.1515 12.0283C10.1973 11.9183 10.2615 11.8174 10.344 11.7258C10.4356 11.6433 10.5273 11.5791 10.6465 11.5332C10.9765 11.3866 11.389 11.4691 11.6456 11.7258C11.8106 11.8999 11.9115 12.1383 11.9115 12.3766C11.9115 12.4316 11.9023 12.4958 11.8931 12.5599C11.884 12.6149 11.8656 12.6699 11.8381 12.7249C11.8198 12.7799 11.7923 12.8349 11.7556 12.8899C11.7281 12.9358 11.6823 12.9816 11.6456 13.0274C11.4715 13.1924 11.2331 13.2933 10.9948 13.2933Z"
            fill="#8A9099"
          />
          <path
            d="M14.2135 13.2933C14.0944 13.2933 13.9752 13.2658 13.8652 13.2199C13.746 13.1741 13.6544 13.1099 13.5627 13.0274C13.526 12.9816 13.4894 12.9358 13.4527 12.8899C13.416 12.8349 13.3885 12.7799 13.3702 12.7249C13.3427 12.6699 13.3244 12.6149 13.3152 12.5599C13.306 12.4958 13.2969 12.4316 13.2969 12.3766C13.2969 12.1383 13.3977 11.8999 13.5627 11.7258C13.6544 11.6433 13.746 11.5791 13.8652 11.5332C14.2044 11.3866 14.6077 11.4691 14.8644 11.7258C15.0294 11.8999 15.1302 12.1383 15.1302 12.3766C15.1302 12.4316 15.121 12.4958 15.1119 12.5599C15.1027 12.6149 15.0844 12.6699 15.0569 12.7249C15.0385 12.7799 15.011 12.8349 14.9744 12.8899C14.9469 12.9358 14.901 12.9816 14.8644 13.0274C14.6902 13.1924 14.4519 13.2933 14.2135 13.2933Z"
            fill="#8A9099"
          />
          <path
            d="M7.79167 16.5035C7.6725 16.5035 7.55333 16.476 7.44333 16.4302C7.33333 16.3844 7.2325 16.3202 7.14083 16.2377C6.97583 16.0635 6.875 15.8252 6.875 15.5868C6.875 15.4677 6.9025 15.3485 6.94834 15.2385C6.99417 15.1193 7.05833 15.0185 7.14083 14.936C7.48 14.5968 8.10333 14.5968 8.4425 14.936C8.6075 15.1102 8.70833 15.3485 8.70833 15.5868C8.70833 15.8252 8.6075 16.0635 8.4425 16.2377C8.26833 16.4027 8.03 16.5035 7.79167 16.5035Z"
            fill="#8A9099"
          />
          <path
            d="M10.9948 16.5035C10.7565 16.5035 10.5181 16.4027 10.344 16.2377C10.179 16.0635 10.0781 15.8252 10.0781 15.5868C10.0781 15.4677 10.1056 15.3485 10.1515 15.2385C10.1973 15.1193 10.2615 15.0185 10.344 14.936C10.6831 14.5968 11.3065 14.5968 11.6456 14.936C11.7281 15.0185 11.7923 15.1193 11.8381 15.2385C11.884 15.3485 11.9115 15.4677 11.9115 15.5868C11.9115 15.8252 11.8106 16.0635 11.6456 16.2377C11.4715 16.4027 11.2331 16.5035 10.9948 16.5035Z"
            fill="#8A9099"
          />
          <path
            d="M14.2135 16.4982C13.9752 16.4982 13.7369 16.3974 13.5627 16.2324C13.4802 16.1499 13.416 16.049 13.3702 15.9299C13.3244 15.8199 13.2969 15.7007 13.2969 15.5815C13.2969 15.4624 13.3244 15.3432 13.3702 15.2332C13.416 15.114 13.4802 15.0132 13.5627 14.9307C13.7735 14.7199 14.0944 14.619 14.3877 14.6832C14.4519 14.6924 14.5069 14.7107 14.5619 14.7382C14.6169 14.7565 14.6719 14.7841 14.7269 14.8207C14.7727 14.8482 14.8185 14.8941 14.8644 14.9307C15.0294 15.1049 15.1302 15.3432 15.1302 15.5815C15.1302 15.8199 15.0294 16.0582 14.8644 16.2324C14.6902 16.3974 14.4519 16.4982 14.2135 16.4982Z"
            fill="#8A9099"
          />
          <path
            d="M18.7865 9.02148H3.20312C2.82729 9.02148 2.51562 8.70982 2.51562 8.33398C2.51562 7.95815 2.82729 7.64648 3.20312 7.64648H18.7865C19.1623 7.64648 19.474 7.95815 19.474 8.33398C19.474 8.70982 19.1623 9.02148 18.7865 9.02148Z"
            fill="#8A9099"
          />
          <path
            d="M14.6667 20.8568H7.33333C3.9875 20.8568 2.0625 18.9318 2.0625 15.5859V7.79427C2.0625 4.44844 3.9875 2.52344 7.33333 2.52344H14.6667C18.0125 2.52344 19.9375 4.44844 19.9375 7.79427V15.5859C19.9375 18.9318 18.0125 20.8568 14.6667 20.8568ZM7.33333 3.89844C4.71167 3.89844 3.4375 5.1726 3.4375 7.79427V15.5859C3.4375 18.2076 4.71167 19.4818 7.33333 19.4818H14.6667C17.2883 19.4818 18.5625 18.2076 18.5625 15.5859V7.79427C18.5625 5.1726 17.2883 3.89844 14.6667 3.89844H7.33333Z"
            fill="#8A9099"
          />
        </svg>

        <span>{moment(row.getValue("date")).format("L")}</span>
      </div>
    ),
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0013 18.9596C5.05963 18.9596 1.04297 14.943 1.04297 10.0013C1.04297 5.05963 5.05963 1.04297 10.0013 1.04297C14.943 1.04297 18.9596 5.05963 18.9596 10.0013C18.9596 14.943 14.943 18.9596 10.0013 18.9596ZM10.0013 2.29297C5.7513 2.29297 2.29297 5.7513 2.29297 10.0013C2.29297 14.2513 5.7513 17.7096 10.0013 17.7096C14.2513 17.7096 17.7096 14.2513 17.7096 10.0013C17.7096 5.7513 14.2513 2.29297 10.0013 2.29297Z"
            fill="#8A9099"
          />
          <path
            d="M13.0909 13.2745C12.9826 13.2745 12.8742 13.2495 12.7742 13.1828L10.1909 11.6411C9.54922 11.2578 9.07422 10.4161 9.07422 9.67448V6.25781C9.07422 5.91615 9.35755 5.63281 9.69922 5.63281C10.0409 5.63281 10.3242 5.91615 10.3242 6.25781V9.67448C10.3242 9.97448 10.5742 10.4161 10.8326 10.5661L13.4159 12.1078C13.7159 12.2828 13.8076 12.6661 13.6326 12.9661C13.5076 13.1661 13.2992 13.2745 13.0909 13.2745Z"
            fill="#8A9099"
          />
        </svg>

        <span>{row.getValue("time")}</span>
      </div>
    ),
  },
  {
    accessorKey: "assigned_driver",
    header: "Assigned Driver",
    cell: ({ row }) => <span>{row.getValue("assigned_driver")}</span>,
  },
  {
    accessorKey: "status",
    header: "Type",
    cell: ({ row }) => {
      return (
        <button
          className={cn(
            row.getValue("status") === "scheduled"
              ? "bg- bg-primaryLight text-primary "
              : row.getValue("status") === "completed"
              ? "bg-[#34A853]/[12%] text-[#34A853]"
              : "bg-[#FACA3E]/[15%] text-[#FACA3E]",
            "capitalize",
            badgeCls
          )}
        >
          <span>
            {row.getValue("status") === "in_progress"
              ? "In Progress"
              : row.getValue("status")}
          </span>
        </button>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <svg
                width={28}
                height={7}
                viewBox="0 0 28 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.19334 6.38668C4.95698 6.38668 6.38668 4.95698 6.38668 3.19334C6.38668 1.42971 4.95698 0 3.19334 0C1.42971 0 0 1.42971 0 3.19334C0 4.95698 1.42971 6.38668 3.19334 6.38668Z"
                  fill="#858585"
                />
                <path
                  d="M13.1933 6.38668C14.957 6.38668 16.3867 4.95698 16.3867 3.19334C16.3867 1.42971 14.957 0 13.1933 0C11.4297 0 10 1.42971 10 3.19334C10 4.95698 11.4297 6.38668 13.1933 6.38668Z"
                  fill="#858585"
                />
                <path
                  d="M24.1933 6.38668C25.957 6.38668 27.3867 4.95698 27.3867 3.19334C27.3867 1.42971 25.957 0 24.1933 0C22.4297 0 21 1.42971 21 3.19334C21 4.95698 22.4297 6.38668 24.1933 6.38668Z"
                  fill="#858585"
                />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="z-10 border-none shadow-top space-y-0.5"
            align="end"
          >
            <svg
              className="absolute right-0 -top-[18px]"
              width={22}
              height={22}
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5858 1.41421C19.8457 0.154285 22 1.04662 22 2.82843V22H2.82843C1.04662 22 0.154284 19.8457 1.41421 18.5858L18.5858 1.41421Z"
                fill="white"
              />
            </svg>

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              <svg
                className="mr-2.5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="mr-2.5"
                  d="M14.4116 8.66645L14.058 8.31289L13.7045 8.66645L4.64449 17.7264L4.49805 17.8729V18.08V19V19.5H4.99805H5.91805H6.12515L6.2716 19.3536L15.3316 10.2936L15.6852 9.94L15.3316 9.58645L14.4116 8.66645ZM17.3116 3.64355C17.4044 3.55077 17.5357 3.5 17.658 3.5C17.797 3.5 17.9162 3.54522 18.0145 3.64355L20.3545 5.98355C20.5492 6.17829 20.5492 6.49171 20.3545 6.68645L18.878 8.16289L15.8352 5.12L17.3116 3.64355ZM3.49805 17.4571L14.058 6.89711L17.1009 9.94L6.54094 20.5H3.49805V17.4571Z"
                  fill="#667085"
                  stroke="#667085"
                />
              </svg>
              Edit
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              <svg
                className="mr-2.5"
                width={19}
                height={17}
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.8502 6.8H2.55022C2.08102 6.8 1.70022 6.4192 1.70022 5.95C1.70022 5.20795 1.70022 4.25 1.70022 4.25C1.70022 3.5734 1.96884 2.92485 2.44739 2.44715C2.92509 1.9686 3.57362 1.7 4.25022 1.7H5.95022V0.425C5.95022 0.31195 5.99526 0.204 6.07431 0.1241C6.15421 0.0450499 6.26217 0 6.37522 0C6.48827 0 6.59622 0.0450499 6.67612 0.1241C6.75517 0.204 6.80022 0.31195 6.80022 0.425V1.7H13.6002V0.425C13.6002 0.31195 13.6453 0.204 13.7243 0.1241C13.8042 0.0450499 13.9122 0 14.0252 0C14.1383 0 14.2462 0.0450499 14.3261 0.1241C14.4052 0.204 14.4502 0.31195 14.4502 0.425V1.7H16.1502C16.8268 1.7 17.4753 1.9686 17.953 2.44715C18.4316 2.92485 18.7002 3.5734 18.7002 4.25V14.45C18.7002 15.1266 18.4316 15.7752 17.953 16.2529C17.4753 16.7314 16.8268 17 16.1502 17C13.5569 17 4.97952 17 2.97267 17C2.86047 17 2.75336 16.9558 2.67431 16.8759C2.59441 16.7968 2.55022 16.6897 2.55022 16.5775V16.575C2.55022 16.4619 2.59526 16.354 2.67431 16.2741C2.75421 16.1951 2.86217 16.15 2.97522 16.15C5.27702 16.15 16.1502 16.15 16.1502 16.15C16.6007 16.15 17.0334 15.9706 17.3521 15.6519C17.6709 15.3331 17.8502 14.9005 17.8502 14.45V6.8ZM1.45114 13.6L2.42612 14.5741C2.59187 14.7399 2.59187 15.0093 2.42612 15.175C2.25952 15.3416 1.99091 15.3416 1.82431 15.175L0.124312 13.475C-0.0414375 13.3093 -0.0414375 13.0407 0.124312 12.8741L1.82431 11.1741C1.99091 11.0084 2.25952 11.0084 2.42612 11.1741C2.59187 11.3399 2.59187 11.6093 2.42612 11.775L1.45114 12.75H8.07522C8.30982 12.75 8.50022 12.9404 8.50022 13.175C8.50022 13.4096 8.30982 13.6 8.07522 13.6H1.45114ZM7.04929 9.35H0.425216C0.190616 9.35 0.000215816 9.5404 0.000215816 9.775C0.000215816 10.0096 0.190616 10.2 0.425216 10.2H7.04929L6.07431 11.1741C5.90856 11.3399 5.90856 11.6093 6.07431 11.775C6.24006 11.9416 6.50954 11.9416 6.67529 11.775L8.37529 10.075C8.54189 9.9093 8.54189 9.6407 8.37529 9.4741L6.67529 7.7741C6.50954 7.60835 6.24006 7.60835 6.07431 7.7741C5.90856 7.93985 5.90856 8.2093 6.07431 8.37505L7.04929 9.35ZM5.95022 2.55H4.25022C3.79972 2.55 3.36706 2.72935 3.04831 3.0481C2.72956 3.36685 2.55022 3.7995 2.55022 4.25V5.95H17.8502V4.25C17.8502 3.7995 17.6709 3.36685 17.3521 3.0481C17.0334 2.72935 16.6007 2.55 16.1502 2.55H14.4502V3.825C14.4502 3.93805 14.4052 4.046 14.3261 4.1259C14.2462 4.20495 14.1383 4.25 14.0252 4.25C13.9122 4.25 13.8042 4.20495 13.7243 4.1259C13.6453 4.046 13.6002 3.93805 13.6002 3.825V2.55H6.80022V3.825C6.80022 3.93805 6.75517 4.046 6.67612 4.1259C6.59622 4.20495 6.48827 4.25 6.37522 4.25C6.26217 4.25 6.15421 4.20495 6.07431 4.1259C5.99526 4.046 5.95022 3.93805 5.95022 3.825V2.55Z"
                  fill="#667085"
                />
              </svg>
              Rescheduled
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              <svg
                className="mr-2.5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#F04438"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.16992 14.8299L14.8299 9.16992"
                  stroke="#F04438"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.8299 14.8299L9.16992 9.16992"
                  stroke="#F04438"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Cancel
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function LeadsTable() {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    // implement global filter instead of column filter
    // onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      // columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-xl border bg-white text-sm overflow-hidden">
        <Table className="overflow-x-auto table-auto text-[#858585] whitespace-nowrap">
          <TableHeader className="[&_tr]:border-b-0   border-0 rounded-t-xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-[#1A1A1A] font-medium"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="lg:py-5">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {/* <p className="flex-1 text-sm text-[#858585]">
          Showing 5 of {table.getFilteredRowModel().rows.length} entries.
        </p> */}
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
    </div>
  );
}
