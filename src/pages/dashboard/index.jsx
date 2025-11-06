import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, List, Check, X, User, Clock } from "lucide-react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Calendar as UICalendar,
  CalendarDayButton,
} from "@/components/ui/calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useState } from "react";

const email = "nkca122@gmail.com";

export default function Dashboard() {
  const [view, setView] = useState("calendar");

  const [range, setRange] = useState([
    {
      date: new Date(),
      time: "9:00 AM",
      heading: "Sprint Planning Meeting",
      description:
        "Discuss upcoming sprint goals, assign tasks, and finalize timelines for the next release cycle.",
      owner: "nkca122@gmail.com",
    },
    {
      date: new Date("2025-11-10"),
      time: "2:00 PM",
      heading: "Frontend Review Session",
      description:
        "Walk through recent UI changes, collect feedback from the design team, and plan next updates.",
      owner: "akca122@gmail.com",
    },
    {
      date: new Date("2025-11-15"),
      time: "11:00 AM",
      heading: "Database Optimization Workshop",
      description:
        "Optimize slow SQL queries, analyze performance metrics, and review indexing strategies.",
      owner: "rkca122@gmail.com",
    },
    {
      date: new Date("2025-11-18"),
      time: "5:00 PM",
      heading: "AI Feature Brainstorm",
      description:
        "Collaborative brainstorming on upcoming AI-assisted tools and use cases for product scalability.",
      owner: "nkca122@gmail.com",
    },
    {
      date: new Date("2025-11-23"),
      time: "10:00 AM",
      heading: "Client Demo & Feedback Session",
      description:
        "Showcase the latest build to the client team, gather feedback, and plan next iteration improvements.",
      owner: "akca122@gmail.com",
    },
  ]);

  const [requests, setRequests] = useState([
    {
      _id: "0",
      from: "akca122@gmail.com",
      description: "Requesting to swap due to schedule overlap with team sync.",
      accept: {
        date: new Date("2025-11-10"),
        time: "2:00 PM",
        heading: "Frontend Review Session",
      },
      swap: {
        date: new Date("2025-11-15"),
        time: "11:00 AM",
        heading: "Database Optimization Workshop",
      },
    },
    {
      _id: "1",
      from: "rkca122@gmail.com",
      description: "Would prefer a morning slot instead of late evening.",
      accept: {
        date: new Date("2025-11-18"),
        time: "5:00 PM",
        heading: "AI Feature Brainstorm",
      },
      swap: {
        date: new Date("2025-11-23"),
        time: "10:00 AM",
        heading: "Client Demo & Feedback Session",
      },
    },
  ]);

  // Helper to check if two dates are same (ignoring time)
  const isSameDay = (d1, d2) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  return (
    <>
      {/* <header className="bg-primary py-4 px-4 rounded-b-2xl">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-imperial text-5xl font-bold">Slot Swapper</h1>
          <div className="flex justify-center items-center">
            <p className="text-sm font-semibold">
              By{" "}
              <a href="https://nkca122.vercel.app" className="text-blue-500">
                nkca122
              </a>
            </p>
            <img src="/assets/bust.svg" alt="" width={30} />
          </div>
        </div>
      </header> */}
      <header className="bg-primary text-primary-foreground py-3 px-6 md:px-12 rounded-b-2xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          {/* Left Section - Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-imperial text-4xl md:text-5xl font-bold tracking-tight">
              Slot Swapper
            </h1>
            <p className="text-sm md:text-base text-primary-foreground/80 font-light leading-tight">
              Manage, view, and swap your team schedules with ease.
            </p>
          </div>

          {/* Right Section - Author / Profile */}
          <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-full px-4 py-2">
            <div className="flex flex-col text-right leading-tight">
              <p className="text-sm font-semibold">{email}</p>
              <a
                href="https://nkca122.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-200 hover:text-blue-100 underline"
              >
                by nkca122
              </a>
            </div>
            <img
              src="/assets/bust.svg"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-primary-foreground/30 bg-primary-foreground/10"
            />
          </div>
        </div>
      </header>

      <section className="px-8 lg:px-32 py-20 flex justify-center items-start gap-4">
        {/* Sidebar */}
        <div className="flex-1/4 flex flex-col justify-start items-center py-8 bg-card rounded-2xl shadow-xs px-4 shadow-primary">
          <p className="text-muted-foreground text-xs underline">{email}</p>
          <Separator className="mb-4" />
          <Button
            variant="primary"
            className={`${
              view === "calendar" ? "bg-primary" : ""
            } flex justify-start items-center gap-4 px-4 w-full transition-all`}
            onClick={() => setView("calendar")}
          >
            <Calendar /> Team Calendar
          </Button>
          <Button
            variant="primary"
            className={`${
              view === "list" ? "bg-primary" : ""
            } flex justify-start items-center gap-4 px-4 w-full transition-all`}
            onClick={() => setView("list")}
          >
            <List /> Tasks List
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1/2 py-8 bg-card rounded-2xl shadow-xs flex flex-col justify-start items-center shadow-primary">
          <Tabs
            defaultValue="calendar"
            value={view}
            className="w-full px-4 max-h-[80vh] overflow-scroll"
          >
            <TabsContent value="calendar" className="w-full">
              <div className="flex flex-col justify-start items-start">
                <h1 className="font-geo text-3xl font-bold">My Calendar</h1>
                <p className="mb-4 text-muted-foreground leading-none text-xs">
                  Upcoming events
                </p>
                <div className="flex justify-center items-center w-full">
                  <UICalendar
                    mode="multiple"
                    selected={range.map((r) => r.date)}
                    numberOfMonths={1}
                    onSelect={() => {}} // disables new selection
                    className="rounded-lg border shadow-sm [--cell-size:--spacing(11)] md:[--cell-size:--spacing(13)]"
                    components={{
                      DayButton: ({ children, modifiers, day, ...props }) => {
                        const matched = range.find((r) =>
                          isSameDay(r.date, day.date)
                        );

                        const DayButtonContent = (
                          <div className="flex flex-col justify-center items-center bg-card">
                            {matched && (
                              <span className="text-xs text-foreground font-normal">
                                {matched.owner.slice(0, 4)}...
                              </span>
                            )}
                            <CalendarDayButton
                              day={day}
                              modifiers={modifiers}
                              {...props}
                              className={`flex flex-col justify-center gap-0 items-center font-bold p-2`}
                            >
                              {children}
                              {matched && (
                                <span className="text-xs text-foreground font-normal">
                                  {matched.time}
                                </span>
                              )}
                            </CalendarDayButton>
                          </div>
                        );

                        // Only wrap in Tooltip if matched
                        if (matched) {
                          return (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                {DayButtonContent}
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="flex flex-col justify-center items-center px-2 py-4 gap-2">
                                  <h1 className="text-sm font-bold text-primary">
                                    {matched.heading}
                                  </h1>
                                  <p className="text-xs">
                                    {matched.description}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    - {matched.owner}
                                  </p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          );
                        }

                        // Normal day (no tooltip)
                        return DayButtonContent;
                      },
                    }}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="list" className="w-full px-4">
              <div className="flex flex-col justify-start items-start gap-0 w-full px-8 py-4">
                <h1 className="font-geo text-3xl font-bold text-center leading-none">
                  All Scheduled Tasks
                </h1>
                <Separator className="mb-4" />
                <div className="w-full flex flex-col justify-start items-center gap-2">
                  {range.length === 0 ? (
                    <p className="text-center text-muted-foreground">
                      No tasks scheduled.
                    </p>
                  ) : (
                    range.map((r, idx) => (
                      <div
                        key={idx}
                        className="bg-secondary/60 hover:bg-secondary transition-all rounded-xl p-4 shadow-sm border flex flex-col justify-start items-start gap-2 w-full"
                      >
                        <div className="flex justify-between items-center w-full">
                          <h2 className="font-semibold text-primary text-sm">
                            {r.heading}
                          </h2>
                          <p className="text-xs text-muted-foreground">
                            {r.date.toDateString()}
                          </p>
                        </div>

                        <p className="text-sm text-foreground">
                          {r.description}
                        </p>

                        <div className="flex justify-between items-center w-full text-xs text-muted-foreground mt-1">
                          <span className="inline-flex gap-2 justify-center items-center">
                            <Clock /> {r.time}
                          </span>
                          <span className="inline-flex flex-row-reverse gap-2 justify-center items-center">
                            <User /> {r.owner}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex-1/4 flex flex-col justify-start items-start bg-card rounded-2xl shadow-xs shadow-primary py-8 px-4">
          <h1 className="font-geo text-3xl font-bold">Swap Requests</h1>
          <Separator />
          <ul className="flex flex-col justify-start items-start gap-2 w-full mt-4">
            {requests.map((req) => {
              return (
                <li
                  key={req._id}
                  className="bg-secondary py-4 px-2 w-full rounded-2xl flex flex-col justify-start items-start"
                >
                  <div>
                    <p className="text-muted-foreground text-xs">
                      From: {req.from}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xs"> {req.description}</p>
                    <div className="flex justify-center items-center gap-2">
                      <Button className="rounded-full">
                        <Check />
                      </Button>
                      <Button className="rounded-full" variant="destructive">
                        <X />
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
