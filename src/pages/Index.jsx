import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListFilter, Search } from "lucide-react";
import RidesTable from "@/components/rides/RidesTable";
import PastRidesTable from "@//components/rides/PastRidesTable";
const Index = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  return (
    <main>
      <div className="mb-7 md:mb-9 flex space-y-2 lg:flex-row lg:space-y-0 lg:items-center flex-col items-start justify-between">
        <h2 className="page-title">
          {activeTab === "upcoming" ? "Upcoming Rides" : "Past Rides"}
        </h2>
        <div className="flex-center space-x-2 p-2">
          {/* Sort options */}
          <Select>
            <SelectTrigger className="w-[120px]  justify-center [&>svg]:hidden ">
              <SelectValue
                placeholder={
                  <div className="flex items-center justify-center text-[#858585] lg:text-xl">
                    <ListFilter className="mr-1.5" /> Sort
                  </div>
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-[#858585]">
                <SelectItem className="px-1" value="name_asc">
                  Name (A-Z)
                </SelectItem>
                <SelectItem className="px-1" value="name_desc">
                  Name (Z-A)
                </SelectItem>
                <SelectItem className="px-1" value="date_asc">
                  Newest
                </SelectItem>
                <SelectItem className="px-1" value="date_desc">
                  Oldest
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* search */}
          <div className="relative">
            <Search className="absolute top-0 bottom-0 w-[18px] h-[18px] my-auto text-slate-500 left-3" />
            <Input
              placeholder="Search"
              // value={globalFilter}
              // onChange={(event) => setGlobalFilter(event.target.value)}
              className="max-w-sm px-9"
            />
            <svg
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-slate-500 right-3"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.00153 3C6.7364 3 6.48212 3.10536 6.29464 3.29289C6.10716 3.48043 6.00184 3.73478 6.00184 4V5.17C5.41648 5.3766 4.90961 5.75974 4.55107 6.2666C4.19254 6.77346 4 7.37909 4 8C4 8.62091 4.19254 9.22654 4.55107 9.7334C4.90961 10.2403 5.41648 10.6234 6.00184 10.83V20C6.00184 20.2652 6.10716 20.5196 6.29464 20.7071C6.48212 20.8946 6.7364 21 7.00153 21C7.26667 21 7.52094 20.8946 7.70842 20.7071C7.8959 20.5196 8.00122 20.2652 8.00122 20V10.83C8.58658 10.6234 9.09346 10.2403 9.45199 9.7334C9.81052 9.22654 10.0031 8.62091 10.0031 8C10.0031 7.37909 9.81052 6.77346 9.45199 6.2666C9.09346 5.75974 8.58658 5.3766 8.00122 5.17V4C8.00122 3.73478 7.8959 3.48043 7.70842 3.29289C7.52094 3.10536 7.26667 3 7.00153 3ZM8.00122 8C8.00122 8.26522 7.8959 8.51957 7.70842 8.70711C7.52094 8.89464 7.26667 9 7.00153 9C6.7364 9 6.48212 8.89464 6.29464 8.70711C6.10716 8.51957 6.00184 8.26522 6.00184 8C6.00184 7.73478 6.10716 7.48043 6.29464 7.29289C6.48212 7.10536 6.7364 7 7.00153 7C7.26667 7 7.52094 7.10536 7.70842 7.29289C7.8959 7.48043 8.00122 7.73478 8.00122 8ZM16.9985 3C16.7333 3 16.4791 3.10536 16.2916 3.29289C16.1041 3.48043 15.9988 3.73478 15.9988 4V12.17C15.4134 12.3766 14.9065 12.7597 14.548 13.2666C14.1895 13.7735 13.9969 14.3791 13.9969 15C13.9969 15.6209 14.1895 16.2265 14.548 16.7334C14.9065 17.2403 15.4134 17.6234 15.9988 17.83V20C15.9988 20.2652 16.1041 20.5196 16.2916 20.7071C16.4791 20.8946 16.7333 21 16.9985 21C17.2636 21 17.5179 20.8946 17.7054 20.7071C17.8928 20.5196 17.9982 20.2652 17.9982 20V17.83C18.5835 17.6234 19.0904 17.2403 19.4489 16.7334C19.8075 16.2265 20 15.6209 20 15C20 14.3791 19.8075 13.7735 19.4489 13.2666C19.0904 12.7597 18.5835 12.3766 17.9982 12.17V4C17.9982 3.73478 17.8928 3.48043 17.7054 3.29289C17.5179 3.10536 17.2636 3 16.9985 3ZM17.9982 15C17.9982 15.2652 17.8928 15.5196 17.7054 15.7071C17.5179 15.8946 17.2636 16 16.9985 16C16.7333 16 16.4791 15.8946 16.2916 15.7071C16.1041 15.5196 15.9988 15.2652 15.9988 15C15.9988 14.7348 16.1041 14.4804 16.2916 14.2929C16.4791 14.1054 16.7333 14 16.9985 14C17.2636 14 17.5179 14.1054 17.7054 14.2929C17.8928 14.4804 17.9982 14.7348 17.9982 15Z"
                fill="#858585"
              />
            </svg>
          </div>
        </div>
      </div>
      <Tabs defaultValue="account">
        <TabsList className="border-b border-[#E8E9EB] space-x-5 mb-7 md:mb-9 text-lightTextGray">
          <div onClick={() => setActiveTab("upcoming")}>
            <TabsTrigger className="" value="account">
              Upcoming Rides{" "}
              <Badge
                className={cn(
                  activeTab === "past" ? "bg-secondary text-[#858585]" : "",
                  "ml-2 rounded-md text-[10px] px-1.5 py-0"
                )}
              >
                50
              </Badge>
            </TabsTrigger>
          </div>
          <div onClick={() => setActiveTab("past")}>
            <TabsTrigger className="" value="password">
              Past Rides{" "}
              <Badge
                className={cn(
                  activeTab === "upcoming" ? "bg-secondary text-[#858585]" : "",
                  "ml-2 rounded-md text-[10px] px-1.5 py-0"
                )}
              >
                50
              </Badge>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="account">
          <RidesTable />
        </TabsContent>
        <TabsContent value="password">
          <PastRidesTable />
        </TabsContent>
      </Tabs>

      {/* customer support */}
      <div className="grid grid-cols-12 gap-y-5  lg:gap-8 mt-8 lg:mt-11">
        {/* faq */}
        <div className="col-span-12 lg:col-span-8 ">
          <div className="flex space-y-2 sm:space-y-0 sm:items-center justify-between mb-5 flex-col items-start sm:flex-row whitespace-nowrap">
            <h2 className="page-title mb-0">Customer Support</h2>
            <Button className="rounded-full">Report An Issue</Button>
          </div>
          <div className="shadow-md bg-white p-4 rounded-md">
            <h6 className="text-primary font-semibold mb-5">FAQ</h6>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex max-md:!items-start items-center font-semibold">
                    <img
                      className="mr-1.5 max-md:mt-1"
                      src="/assets/images/arrow_fat.png"
                      alt="arrow_icon"
                    />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[#858585] max-w-[631px] pl-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex max-md:!items-start items-center font-semibold">
                    <img
                      className="mr-1.5 max-md:mt-1"
                      src="/assets/images/arrow_fat.png"
                      alt="arrow_icon"
                    />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[#858585] max-w-[631px] pl-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* notifications */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-[#f6f6f6] px-2 py-2 rounded-lg border">
            <h4 className="text-[22px] font-semibold leading-[175%] mb-2">
              Notifications
            </h4>
            <div className="bg-white px-5 py-2 rounded-md border">
              <h6 className="text-sm font-bold mb-2">Today</h6>
              <div className="space-y-2.5">
                {/* notification item */}
                <div className="hover:bg-[#f6f6f6] transition-all duration-300 p-3 rounded-md border border-[#f6f6f6] flex items-center space-x-4 cursor-pointer relative">
                  <img src="/assets/images/avatar.png" alt="avatar" />
                  <div>
                    <h6 className=" font-bold mb-1">John request a ride</h6>
                    <p className="text-xs text-[#858585]">
                      Lorem ipsum dolor sit amet, sit <br /> consectetur eli.
                    </p>
                  </div>
                  {/* close icon */}
                  <span className="h-[19px] w-[19px] flex-center !m-0 bg-red-200 rounded-full absolute -left-3.5 top-1/2 -translate-y-1/2">
                    <svg
                      width={9}
                      height={9}
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.23262 4.50113L8.49778 1.23585C8.54733 1.18798 8.58686 1.13073 8.61406 1.06742C8.64125 1.00412 8.65557 0.936031 8.65616 0.867135C8.65676 0.798239 8.64363 0.729913 8.61754 0.666145C8.59146 0.602377 8.55293 0.544444 8.50421 0.495725C8.45549 0.447007 8.39756 0.408478 8.33379 0.382389C8.27002 0.356299 8.20169 0.343171 8.1328 0.34377C8.0639 0.344368 7.99582 0.358682 7.93251 0.385876C7.86921 0.41307 7.81195 0.452599 7.76409 0.502157L4.4988 3.76731L1.23364 0.502157C1.13598 0.406638 1.00459 0.353488 0.867979 0.35424C0.731373 0.354992 0.600574 0.409587 0.503969 0.506175C0.407363 0.602764 0.352746 0.733553 0.35197 0.870159C0.351193 1.00677 0.40432 1.13817 0.499821 1.23585L3.76511 4.50113L0.499821 7.76642C0.450758 7.81441 0.411701 7.87165 0.384913 7.93483C0.358124 7.99802 0.344136 8.06589 0.343758 8.13452C0.34338 8.20314 0.35662 8.27116 0.382711 8.33464C0.408802 8.39811 0.447226 8.45578 0.495758 8.50431C0.544289 8.55283 0.601965 8.59124 0.665445 8.61732C0.728925 8.6434 0.796948 8.65663 0.865575 8.65624C0.934203 8.65585 1.00207 8.64185 1.06525 8.61505C1.12843 8.58825 1.18566 8.54918 1.23364 8.50011L4.4988 5.23496L7.76409 8.50011C7.8654 8.60142 7.99823 8.65214 8.13093 8.65214C8.26363 8.65214 8.3966 8.60142 8.49778 8.50011C8.59505 8.40281 8.6497 8.27085 8.6497 8.13327C8.6497 7.99568 8.59505 7.86373 8.49778 7.76642L5.23262 4.50113Z"
                        fill="#E84536"
                      />
                    </svg>
                  </span>
                  <span className="uppercase text-[9px] text-primary absolute right-3 top-2 font-semibold">
                    1h ago
                  </span>
                </div>
                {/* notification item */}
                <div className="hover:bg-[#f6f6f6] transition-all duration-300 p-3 rounded-md border border-[#f6f6f6] flex items-center space-x-4 cursor-pointer relative">
                  <img src="/assets/images/avatar.png" alt="avatar" />
                  <div>
                    <h6 className=" font-bold mb-1">John request a ride</h6>
                    <p className="text-xs text-[#858585]">
                      Lorem ipsum dolor sit amet, sit <br /> consectetur eli.
                    </p>
                  </div>
                  {/* close icon */}
                  <span className="h-[19px] w-[19px] flex-center !m-0 bg-red-200 rounded-full absolute -left-3.5 top-1/2 -translate-y-1/2">
                    <svg
                      width={9}
                      height={9}
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.23262 4.50113L8.49778 1.23585C8.54733 1.18798 8.58686 1.13073 8.61406 1.06742C8.64125 1.00412 8.65557 0.936031 8.65616 0.867135C8.65676 0.798239 8.64363 0.729913 8.61754 0.666145C8.59146 0.602377 8.55293 0.544444 8.50421 0.495725C8.45549 0.447007 8.39756 0.408478 8.33379 0.382389C8.27002 0.356299 8.20169 0.343171 8.1328 0.34377C8.0639 0.344368 7.99582 0.358682 7.93251 0.385876C7.86921 0.41307 7.81195 0.452599 7.76409 0.502157L4.4988 3.76731L1.23364 0.502157C1.13598 0.406638 1.00459 0.353488 0.867979 0.35424C0.731373 0.354992 0.600574 0.409587 0.503969 0.506175C0.407363 0.602764 0.352746 0.733553 0.35197 0.870159C0.351193 1.00677 0.40432 1.13817 0.499821 1.23585L3.76511 4.50113L0.499821 7.76642C0.450758 7.81441 0.411701 7.87165 0.384913 7.93483C0.358124 7.99802 0.344136 8.06589 0.343758 8.13452C0.34338 8.20314 0.35662 8.27116 0.382711 8.33464C0.408802 8.39811 0.447226 8.45578 0.495758 8.50431C0.544289 8.55283 0.601965 8.59124 0.665445 8.61732C0.728925 8.6434 0.796948 8.65663 0.865575 8.65624C0.934203 8.65585 1.00207 8.64185 1.06525 8.61505C1.12843 8.58825 1.18566 8.54918 1.23364 8.50011L4.4988 5.23496L7.76409 8.50011C7.8654 8.60142 7.99823 8.65214 8.13093 8.65214C8.26363 8.65214 8.3966 8.60142 8.49778 8.50011C8.59505 8.40281 8.6497 8.27085 8.6497 8.13327C8.6497 7.99568 8.59505 7.86373 8.49778 7.76642L5.23262 4.50113Z"
                        fill="#E84536"
                      />
                    </svg>
                  </span>
                  <span className="uppercase text-[9px] text-primary absolute right-3 top-2 font-semibold">
                    1h ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
