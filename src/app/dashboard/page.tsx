"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileEdit,
  Wallet,
  BookOpen,
  GraduationCap,
  UserCheck,
  Bell,
  Search,
  ArrowLeft,
  TrendingUp,
  Plus,
  ChevronRight,
  Clock,
  Award,
  Target,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  Inbox,
  ChevronDown,
} from "lucide-react";

type View =
  | "overview"
  | "inquiries"
  | "students"
  | "bookings"
  | "content"
  | "staff"
  | "lessons"
  | "parent-portal"
  | "teacher-tools";

type Role = "secretary" | "teacher" | "directress";

const roles: Record<Role, { label: string; name: string; initials: string; color: string; bg: string }> = {
  secretary: { label: "Secretary", name: "Joy Cruz", initials: "JC", color: "#E84671", bg: "#FFE0EA" },
  teacher: { label: "Teacher", name: "Teacher Eliza", initials: "TE", color: "#2BAA8E", bg: "#D9F4EC" },
  directress: { label: "Directress", name: "Mrs. Aguilar", initials: "MA", color: "#C9A84C", bg: "#FBF1D6" },
};

const cmsItems = [
  { key: "inquiries" as View, label: "Inquiries", icon: Inbox, badge: 4, roles: ["secretary", "directress"] },
  { key: "students" as View, label: "Students & Clients", icon: Users, roles: ["secretary", "teacher", "directress"] },
  { key: "bookings" as View, label: "Bookings & Schedule", icon: Calendar, roles: ["secretary", "teacher", "directress"] },
  { key: "content" as View, label: "Website Content", icon: FileEdit, roles: ["directress"] },
  { key: "staff" as View, label: "Staff & Billing", icon: Wallet, roles: ["directress"] },
];

const lmsItems = [
  { key: "lessons" as View, label: "Lesson Library", icon: BookOpen, roles: ["teacher", "directress"] },
  { key: "parent-portal" as View, label: "Parent Portal", icon: UserCheck, roles: ["teacher", "directress"] },
  { key: "teacher-tools" as View, label: "Teacher Tools", icon: GraduationCap, roles: ["teacher", "directress"] },
];

export default function Dashboard() {
  const [view, setView] = useState<View>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [role, setRole] = useState<Role>("secretary");
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  const currentRole = roles[role];
  const visibleCmsItems = cmsItems.filter((item) => item.roles.includes(role));
  const visibleLmsItems = lmsItems.filter((item) => item.roles.includes(role));

  return (
    <div
      className="min-h-screen bg-gray-50 flex"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-100 flex-shrink-0 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-5 border-b border-gray-100">
          <Link href="/proposal" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="R.E.A.D." className="h-8 w-auto object-contain" />
          </Link>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-2">
            Operations Dashboard
          </p>
        </div>

        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-200px)]">
          <button
            onClick={() => {
              setView("overview");
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              view === "overview"
                ? "bg-[#1A1A2E] text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <LayoutDashboard size={16} />
            Overview
          </button>

          {visibleCmsItems.length > 0 && (
            <div className="pt-4">
              <p className="px-3 text-[10px] font-bold text-[#E84671] uppercase tracking-[0.15em] mb-2">
                CMS
              </p>
              {visibleCmsItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setView(item.key);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    view === item.key
                      ? "bg-[#E84671]/10 text-[#E84671]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <item.icon size={16} />
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E84671] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {visibleLmsItems.length > 0 && (
            <div className="pt-4">
              <p className="px-3 text-[10px] font-bold text-[#2BAA8E] uppercase tracking-[0.15em] mb-2">
                LMS
              </p>
              {visibleLmsItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setView(item.key);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    view === item.key
                      ? "bg-[#2BAA8E]/10 text-[#2BAA8E]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-100 bg-white">
          <Link
            href="/proposal"
            className="flex items-center gap-2 px-3 py-2 text-xs text-gray-400 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft size={12} /> Back to proposal
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-100 h-16 flex items-center justify-between px-4 sm:px-6 gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 cursor-pointer"
            aria-label="Toggle sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <div className="flex-1 max-w-md relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              placeholder="Search students, lessons, bookings..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 rounded-lg border border-gray-100 focus:outline-none focus:border-gray-300"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 cursor-pointer hover:bg-gray-50 rounded-lg">
              <Bell size={16} className="text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E84671] rounded-full" />
            </button>

            {/* Role switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 rounded-lg p-1.5 -mr-1.5"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: currentRole.bg, color: currentRole.color }}
                >
                  {currentRole.initials}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-medium text-[#1A1A2E]">{currentRole.name}</p>
                  <p className="text-[10px] text-gray-400">{currentRole.label}</p>
                </div>
                <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
              </button>

              {roleMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden z-50">
                  <div className="p-3 border-b border-gray-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Switch Role View
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      Each role sees a tailored dashboard
                    </p>
                  </div>
                  {(Object.keys(roles) as Role[]).map((r) => {
                    const roleData = roles[r];
                    return (
                      <button
                        key={r}
                        onClick={() => {
                          setRole(r);
                          setRoleMenuOpen(false);
                          // If current view isn't visible to new role, reset to overview
                          const allItems = [...cmsItems, ...lmsItems];
                          const currentItem = allItems.find((i) => i.key === view);
                          if (currentItem && !currentItem.roles.includes(r)) {
                            setView("overview");
                          }
                        }}
                        className={`w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors cursor-pointer text-left ${
                          role === r ? "bg-gray-50" : ""
                        }`}
                      >
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: roleData.bg, color: roleData.color }}
                        >
                          {roleData.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-[#1A1A2E]">{roleData.name}</p>
                          <p className="text-[10px] text-gray-400">{roleData.label}</p>
                        </div>
                        {role === r && (
                          <CheckCircle2 size={14} style={{ color: roleData.color }} className="flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          {view === "overview" && <OverviewView role={role} />}
          {view === "inquiries" && <InquiriesView />}
          {view === "students" && <StudentsView />}
          {view === "bookings" && <BookingsView />}
          {view === "content" && <ContentView />}
          {view === "staff" && <StaffView />}
          {view === "lessons" && <LessonsView />}
          {view === "parent-portal" && <ParentPortalView />}
          {view === "teacher-tools" && <TeacherToolsView />}
        </main>
      </div>
    </div>
  );
}

/* OVERVIEW */
function OverviewView({ role }: { role: Role }) {
  const greetingName = roles[role].name;
  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-2xl font-semibold text-[#1A1A2E]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Welcome back, {greetingName} 👋
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Here&apos;s what&apos;s happening at R.E.A.D. today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Students", value: "127", change: "+8 this month", color: "#E8B731", icon: Users },
          { label: "Sessions This Week", value: "84", change: "12 upcoming today", color: "#2E7AB8", icon: Calendar },
          { label: "Avg. Reading Growth", value: "+1.4", change: "Levels per quarter", color: "#2BAA8E", icon: TrendingUp },
          { label: "Pending Payments", value: "₱48,500", change: "6 invoices", color: "#E84671", icon: Wallet },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
              >
                <stat.icon size={16} />
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {stat.value}
            </p>
            <p className="text-[10px] text-gray-400 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's schedule */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-[#1A1A2E]">Today&apos;s Schedule</h2>
            <button className="text-xs text-[#E84671] hover:underline cursor-pointer">View all →</button>
          </div>
          <div className="space-y-2">
            {[
              { time: "9:00 AM", student: "Sofia Mendoza", program: "Reading Enhancement", educator: "Teacher Eliza", status: "confirmed" },
              { time: "10:30 AM", student: "Mateo Santos", program: "Executive Function", educator: "Teacher Mia", status: "confirmed" },
              { time: "1:00 PM", student: "Isabella Cruz", program: "Early Learners", educator: "Teacher Joy", status: "pending" },
              { time: "3:00 PM", student: "Diego Reyes", program: "Academic Development", educator: "Teacher Eliza", status: "confirmed" },
              { time: "4:30 PM", student: "Lucia Garcia", program: "Reading Assessment", educator: "Teacher Mia", status: "confirmed" },
            ].map((session, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-xs font-semibold text-gray-400 w-16">{session.time}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#1A1A2E] truncate">{session.student}</p>
                  <p className="text-xs text-gray-400 truncate">
                    {session.program} &middot; {session.educator}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${
                    session.status === "confirmed"
                      ? "bg-[#2BAA8E]/10 text-[#2BAA8E]"
                      : "bg-[#E8B731]/10 text-[#E8B731]"
                  }`}
                >
                  {session.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h2 className="text-base font-semibold text-[#1A1A2E] mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { icon: CheckCircle2, color: "#2BAA8E", text: "Sofia M. completed Lesson 12 — Phonics III", time: "10 min ago" },
              { icon: Wallet, color: "#E84671", text: "Payment received from Cruz family — ₱8,500", time: "1 hour ago" },
              { icon: Users, color: "#2E7AB8", text: "New inquiry from Patricia Aguilar", time: "2 hours ago" },
              { icon: Award, color: "#E8B731", text: "Mateo S. reached Grade 4 reading level!", time: "Yesterday" },
              { icon: AlertCircle, color: "#E84671", text: "Diego R. session needs rescheduling", time: "Yesterday" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <item.icon size={13} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-700 leading-relaxed">{item.text}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* CMS: STUDENTS */
function StudentsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Students &amp; Clients
          </h1>
          <p className="text-sm text-gray-500 mt-1">Manage student profiles, assignments, and records.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#E84671] text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-[#D03E63]">
          <Plus size={14} />
          Add Student
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        {["All Students (127)", "Reading Enhancement", "Executive Function", "Early Learners", "Academic Dev"].map((f, i) => (
          <button
            key={f}
            className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
              i === 0 ? "bg-[#1A1A2E] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Student", "Program", "Educator", "Reading Level", "Next Session", "Status", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Sofia Mendoza", age: 8, program: "Reading Enhancement", educator: "Teacher Eliza", level: "Grade 3.5", next: "Today, 9:00 AM", status: "Active", color: "#E8B731" },
                { name: "Mateo Santos", age: 10, program: "Executive Function", educator: "Teacher Mia", level: "Grade 4.0", next: "Today, 10:30 AM", status: "Active", color: "#2E7AB8" },
                { name: "Isabella Cruz", age: 6, program: "Early Learners", educator: "Teacher Joy", level: "Grade 1.5", next: "Today, 1:00 PM", status: "Active", color: "#E84671" },
                { name: "Diego Reyes", age: 12, program: "Academic Development", educator: "Teacher Eliza", level: "Grade 5.5", next: "Today, 3:00 PM", status: "Active", color: "#2BAA8E" },
                { name: "Lucia Garcia", age: 7, program: "Reading Assessment", educator: "Teacher Mia", level: "Pending", next: "Today, 4:30 PM", status: "New", color: "#C9A84C" },
                { name: "Andres Tan", age: 9, program: "Reading Enhancement", educator: "Teacher Eliza", level: "Grade 3.0", next: "Tomorrow, 9:00 AM", status: "Active", color: "#E8B731" },
              ].map((s, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: s.color }}
                      >
                        {s.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1A1A2E]">{s.name}</p>
                        <p className="text-[11px] text-gray-400">Age {s.age}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-gray-600">{s.program}</td>
                  <td className="px-4 py-3.5 text-xs text-gray-600">{s.educator}</td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs font-medium text-[#1A1A2E]">{s.level}</span>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-gray-600">{s.next}</td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${
                        s.status === "Active" ? "bg-[#2BAA8E]/10 text-[#2BAA8E]" : "bg-[#E8B731]/10 text-[#E8B731]"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer">
                      <MoreHorizontal size={14} className="text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* CMS: BOOKINGS */
function BookingsView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = ["9:00", "10:00", "11:00", "1:00", "2:00", "3:00", "4:00", "5:00"];
  const sessions: Record<string, { name: string; program: string; color: string }> = {
    "Mon-9:00": { name: "Sofia M.", program: "Reading", color: "#E8B731" },
    "Mon-10:00": { name: "Mateo S.", program: "Exec Func", color: "#2E7AB8" },
    "Mon-1:00": { name: "Isabella C.", program: "Early Reading", color: "#E84671" },
    "Mon-3:00": { name: "Diego R.", program: "Academic", color: "#2BAA8E" },
    "Tue-10:00": { name: "Andres T.", program: "Reading", color: "#E8B731" },
    "Tue-2:00": { name: "Maria F.", program: "Reading", color: "#E8B731" },
    "Wed-9:00": { name: "Sofia M.", program: "Reading", color: "#E8B731" },
    "Wed-11:00": { name: "Lucas P.", program: "Early Reading", color: "#E84671" },
    "Thu-1:00": { name: "Anna L.", program: "Academic", color: "#2BAA8E" },
    "Thu-3:00": { name: "Diego R.", program: "Academic", color: "#2BAA8E" },
    "Fri-9:00": { name: "Mateo S.", program: "Exec Func", color: "#2E7AB8" },
    "Fri-2:00": { name: "Isabella C.", program: "Early Reading", color: "#E84671" },
    "Sat-10:00": { name: "Group Class", program: "Reading", color: "#C9A84C" },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Bookings &amp; Schedule
          </h1>
          <p className="text-sm text-gray-500 mt-1">Week of May 4 - May 9, 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-xs text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            ← Prev
          </button>
          <button className="px-3 py-2 text-xs font-medium bg-white border border-gray-200 rounded-lg cursor-pointer">
            This Week
          </button>
          <button className="px-3 py-2 text-xs text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            Next →
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#E84671] text-white text-xs font-medium rounded-lg cursor-pointer ml-2">
            <Plus size={12} />
            New Booking
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Header row */}
            <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50">
              <div className="px-3 py-3 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                Time
              </div>
              {days.map((day, i) => (
                <div key={day} className="px-3 py-3 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  {day} <span className="text-gray-300">{4 + i}</span>
                </div>
              ))}
            </div>

            {/* Time rows */}
            {hours.map((hour) => (
              <div key={hour} className="grid grid-cols-7 border-b border-gray-50 last:border-0">
                <div className="px-3 py-2 text-xs text-gray-400 border-r border-gray-50">
                  {hour}
                </div>
                {days.map((day) => {
                  const session = sessions[`${day}-${hour}`];
                  return (
                    <div key={`${day}-${hour}`} className="px-2 py-1.5 border-r border-gray-50 last:border-0 min-h-[50px]">
                      {session && (
                        <div
                          className="rounded-md p-2 cursor-pointer hover:opacity-80 transition-opacity"
                          style={{ backgroundColor: `${session.color}15`, borderLeft: `3px solid ${session.color}` }}
                        >
                          <p className="text-[11px] font-semibold text-[#1A1A2E] truncate">{session.name}</p>
                          <p className="text-[10px] text-gray-500 truncate">{session.program}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending requests */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h2 className="text-base font-semibold text-[#1A1A2E] mb-4">Pending Booking Requests</h2>
        <div className="space-y-2">
          {[
            { parent: "Patricia Aguilar", child: "Camila A. (5)", program: "Reading Assessment", requested: "May 12, 10AM" },
            { parent: "Marco Villanueva", child: "Sebastian V. (8)", program: "Reading Enhancement", requested: "May 13, 2PM" },
          ].map((req, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1A1A2E]">{req.parent}</p>
                <p className="text-xs text-gray-500">
                  {req.child} &middot; {req.program} &middot; {req.requested}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-xs bg-[#2BAA8E] text-white rounded-md cursor-pointer">Confirm</button>
                <button className="px-3 py-1.5 text-xs text-gray-500 border border-gray-200 rounded-md cursor-pointer">
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* CMS: WEBSITE CONTENT */
function ContentView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Website Content
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Edit your public website without touching code.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          { title: "Hero Section", desc: "Main headline, tagline, and CTA on the homepage", lastEdit: "2 days ago", count: "1 page" },
          { title: "Programs", desc: "Early Learners, Reading Enhancement, Academic Development", lastEdit: "1 week ago", count: "4 programs" },
          { title: "Testimonials", desc: "Parent voices and stories from Alabang families", lastEdit: "3 weeks ago", count: "8 testimonials" },
          { title: "Team Bios", desc: "Educators and staff profiles", lastEdit: "1 month ago", count: "12 members" },
          { title: "Blog Posts", desc: "Articles on reading, parenting, and learning", lastEdit: "1 week ago", count: "6 posts" },
          { title: "FAQs", desc: "Common questions parents ask", lastEdit: "Never", count: "0 entries" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#1A1A2E]">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
              <ChevronRight size={16} className="text-gray-300 group-hover:text-[#1A1A2E] transition-colors" />
            </div>
            <div className="flex items-center justify-between text-[10px] text-gray-400 pt-3 border-t border-gray-50">
              <span>{item.count}</span>
              <span>Last edit: {item.lastEdit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* CMS: STAFF & BILLING */
function StaffView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Staff &amp; Billing
        </h1>
        <p className="text-sm text-gray-500 mt-1">Hiring pipeline, payroll, and clinic finances.</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-gray-100">
        {["Team Members", "Hiring Pipeline", "Billing & Invoices", "Payroll"].map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors border-b-2 ${
              i === 2 ? "border-[#E84671] text-[#1A1A2E]" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Revenue This Month", value: "₱412,500", change: "+18% vs last month", color: "#2BAA8E" },
          { label: "Pending Invoices", value: "₱48,500", change: "6 invoices unpaid", color: "#E84671" },
          { label: "Paid via SaligPay", value: "₱285,000", change: "69% of revenue", color: "#C9A84C" },
          { label: "Active Educators", value: "12", change: "+1 hired this month", color: "#2E7AB8" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold" style={{ color: stat.color, fontFamily: "'Playfair Display', serif" }}>
              {stat.value}
            </p>
            <p className="text-[10px] text-gray-400 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent invoices */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#1A1A2E]">Recent Invoices</h2>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1A1A2E] text-white text-xs font-medium rounded-lg cursor-pointer">
            <Plus size={12} />
            Create Invoice
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Invoice #", "Client", "Amount", "Method", "Status", "Date"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { num: "INV-2026-0142", client: "Mendoza Family", amount: "₱8,500", method: "GCash via SaligPay", status: "Paid", color: "#2BAA8E" },
                { num: "INV-2026-0141", client: "Cruz Family", amount: "₱8,500", method: "Maya via SaligPay", status: "Paid", color: "#2BAA8E" },
                { num: "INV-2026-0140", client: "Reyes Family", amount: "₱12,000", method: "Bank Transfer", status: "Pending", color: "#E8B731" },
                { num: "INV-2026-0139", client: "Santos Family", amount: "₱8,500", method: "Card via SaligPay", status: "Paid", color: "#2BAA8E" },
                { num: "INV-2026-0138", client: "Tan Family", amount: "₱15,000", method: "GCash via SaligPay", status: "Overdue", color: "#E84671" },
              ].map((inv, i) => (
                <tr key={i} className="border-b border-gray-50">
                  <td className="px-4 py-3 text-xs font-medium text-[#1A1A2E]">{inv.num}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{inv.client}</td>
                  <td className="px-4 py-3 text-xs font-semibold text-[#1A1A2E]">{inv.amount}</td>
                  <td className="px-4 py-3 text-xs text-gray-500">{inv.method}</td>
                  <td className="px-4 py-3">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${inv.color}15`, color: inv.color }}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400">May {7 - i}, 2026</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* LMS: LESSON LIBRARY */
function LessonsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Lesson Library
          </h1>
          <p className="text-sm text-gray-500 mt-1">Curriculum organized by age group, level, and skill area.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#2BAA8E] text-white text-sm font-medium rounded-lg cursor-pointer">
          <Plus size={14} />
          New Lesson
        </button>
      </div>

      {/* Filter pills */}
      <div className="flex items-center gap-2 flex-wrap">
        {[
          { label: "All Lessons (84)", active: true },
          { label: "Phonics", color: "#E8B731" },
          { label: "Comprehension", color: "#2E7AB8" },
          { label: "Executive Function", color: "#E84671" },
          { label: "Writing", color: "#2BAA8E" },
          { label: "Sight Words", color: "#C9A84C" },
        ].map((f, i) => (
          <button
            key={i}
            className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
              f.active ? "bg-[#1A1A2E] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Lesson grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Phonics: Letter Sounds A-E", level: "Early Learners", duration: "20 min", color: "#E8B731", category: "Phonics", uses: 47 },
          { title: "Story Comprehension: Picture Books", level: "Ages 6-8", duration: "30 min", color: "#2E7AB8", category: "Comprehension", uses: 32 },
          { title: "Planning &amp; Time Management", level: "Ages 8-12", duration: "45 min", color: "#E84671", category: "Executive Function", uses: 28 },
          { title: "Sight Words: Level 2", level: "Ages 5-7", duration: "25 min", color: "#E8B731", category: "Phonics", uses: 41 },
          { title: "Creative Writing Prompts", level: "Ages 10+", duration: "40 min", color: "#2BAA8E", category: "Writing", uses: 19 },
          { title: "Sight Words: Set 3", level: "Early Learners", duration: "25 min", color: "#C9A84C", category: "Phonics", uses: 23 },
          { title: "Reading Fluency Drills", level: "Ages 7-10", duration: "30 min", color: "#2E7AB8", category: "Comprehension", uses: 56 },
          { title: "Working Memory Games", level: "Ages 6-12", duration: "20 min", color: "#E84671", category: "Executive Function", uses: 35 },
          { title: "Essay Structure Basics", level: "Ages 11+", duration: "45 min", color: "#2BAA8E", category: "Writing", uses: 14 },
        ].map((lesson, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                style={{ backgroundColor: `${lesson.color}15`, color: lesson.color }}
              >
                {lesson.category}
              </span>
              <span className="text-[10px] text-gray-400">{lesson.duration}</span>
            </div>
            <h3 className="text-sm font-semibold text-[#1A1A2E] mb-1" dangerouslySetInnerHTML={{ __html: lesson.title }} />
            <p className="text-xs text-gray-500 mb-4">{lesson.level}</p>
            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
              <span className="text-[10px] text-gray-400">Used {lesson.uses} times</span>
              <button className="text-xs font-medium text-[#2BAA8E] cursor-pointer hover:underline">
                Open →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* LMS: PARENT PORTAL */
function ParentPortalView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Parent Portal Preview
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          This is what parents see when they log in to track their child&apos;s progress.
        </p>
      </div>

      {/* Mock parent view */}
      <div className="bg-gradient-to-br from-[#FFF9F0] to-white rounded-2xl border border-[#F0EBE3] p-6">
        <div className="mb-6">
          <p className="text-xs text-gray-400">Welcome back,</p>
          <h2 className="text-xl font-semibold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mrs. Mendoza
          </h2>
        </div>

        {/* Child selector */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-full border-2 border-[#C9A84C]">
            <div className="w-7 h-7 rounded-full bg-[#E8B731] flex items-center justify-center text-xs font-bold text-white">
              SM
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1A1A2E]">Sofia, age 8</p>
              <p className="text-[10px] text-gray-400">Reading Enhancement</p>
            </div>
          </div>
          <button className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">+ Add Child</button>
        </div>

        {/* Progress cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Reading Level", value: "Grade 3.5", change: "+1.2 since Jan", color: "#2BAA8E" },
            { label: "Sessions Done", value: "24", change: "of 32 in package", color: "#E8B731" },
            { label: "Next Session", value: "Mon 9AM", change: "with Teacher Eliza", color: "#E84671" },
          ].map((c) => (
            <div key={c.label} className="bg-white rounded-xl p-4 border border-gray-100">
              <p className="text-[10px] text-gray-400 mb-1">{c.label}</p>
              <p className="text-2xl font-bold" style={{ color: c.color, fontFamily: "'Playfair Display', serif" }}>
                {c.value}
              </p>
              <p className="text-[10px] text-gray-400 mt-1">{c.change}</p>
            </div>
          ))}
        </div>

        {/* Progress chart */}
        <div className="bg-white rounded-xl p-5 border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-[#1A1A2E]">Reading Fluency Progress</h3>
            <span className="text-xs text-[#2BAA8E] font-medium">+78% growth</span>
          </div>

          {/* Simplified bar chart */}
          <div className="flex items-end gap-2 h-32">
            {[35, 42, 48, 55, 60, 68, 75, 82].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className="w-full rounded-t-md transition-all"
                  style={{
                    height: `${h}%`,
                    background: `linear-gradient(180deg, #E8B731, #2BAA8E)`,
                  }}
                />
                <span className="text-[10px] text-gray-400">{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent reports */}
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <h3 className="text-sm font-semibold text-[#1A1A2E] mb-4">Recent Session Notes</h3>
          <div className="space-y-3">
            {[
              { date: "May 5, 2026", note: "Sofia completed Phonics III with confidence. Showed strong improvement in vowel digraphs.", teacher: "Teacher Eliza" },
              { date: "May 2, 2026", note: "Worked on reading fluency. Read 'The Hungry Caterpillar' independently for the first time!", teacher: "Teacher Eliza" },
              { date: "Apr 28, 2026", note: "Comprehension assessment: Sofia is now reading at Grade 3.5 level. Recommendation to continue current pace.", teacher: "Teacher Mia" },
            ].map((n, i) => (
              <div key={i} className="border-l-2 border-[#C9A84C]/30 pl-3 py-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{n.date}</p>
                  <p className="text-[10px] text-gray-400">{n.teacher}</p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{n.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* LMS: TEACHER TOOLS */
function TeacherToolsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Teacher Tools
        </h1>
        <p className="text-sm text-gray-500 mt-1">Plan lessons, record observations, and generate reports.</p>
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: BookOpen, label: "New Lesson Plan", color: "#E8B731" },
          { icon: FileEdit, label: "Session Note", color: "#E84671" },
          { icon: Target, label: "Assign Homework", color: "#2BAA8E" },
          { icon: Award, label: "Generate Report", color: "#2E7AB8" },
        ].map((action, i) => (
          <button
            key={i}
            className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow text-left cursor-pointer"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
              style={{ backgroundColor: `${action.color}15`, color: action.color }}
            >
              <action.icon size={18} />
            </div>
            <p className="text-sm font-semibold text-[#1A1A2E]">{action.label}</p>
            <p className="text-[10px] text-gray-400 mt-1">Quick create</p>
          </button>
        ))}
      </div>

      {/* Today's session prep */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-[#1A1A2E]">Today&apos;s Session Prep</h2>
          <span className="text-xs text-gray-400">5 sessions today</span>
        </div>

        <div className="space-y-3">
          {[
            {
              time: "9:00 AM",
              student: "Sofia Mendoza",
              prep: "Phonics III lesson + sight word review (last week's homework)",
              notes: "Sofia is excited about the picture book series. Continue confidence building.",
              ready: true,
            },
            {
              time: "10:30 AM",
              student: "Mateo Santos",
              prep: "Working memory games + planning worksheet",
              notes: "Mateo&apos;s mom mentioned he&apos;s been struggling with homework planning at school.",
              ready: true,
            },
            {
              time: "1:00 PM",
              student: "Isabella Cruz",
              prep: "Articulation practice — R sounds, follow up from last session",
              notes: "Lesson plan needs to be finalized.",
              ready: false,
            },
          ].map((s, i) => (
            <div key={i} className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Clock size={14} className="text-gray-400" />
                  <span className="text-xs font-semibold text-[#1A1A2E]">{s.time}</span>
                  <span className="text-xs text-gray-500">&middot; {s.student}</span>
                </div>
                {s.ready ? (
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-[#2BAA8E]/10 text-[#2BAA8E]">
                    Ready
                  </span>
                ) : (
                  <button className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-[#E84671] text-white cursor-pointer">
                    Prep Now
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-700 mb-1">
                <span className="text-gray-400">Plan: </span>
                {s.prep}
              </p>
              <p
                className="text-xs text-gray-500 italic"
                dangerouslySetInnerHTML={{ __html: `Note: ${s.notes}` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Caseload overview */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h2 className="text-base font-semibold text-[#1A1A2E] mb-4">My Caseload</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { name: "Sofia Mendoza", level: "Grade 3.5", progress: 78, color: "#E8B731" },
            { name: "Mateo Santos", level: "Grade 4.0", progress: 65, color: "#2E7AB8" },
            { name: "Diego Reyes", level: "Grade 5.5", progress: 88, color: "#2BAA8E" },
            { name: "Andres Tan", level: "Grade 3.0", progress: 52, color: "#E84671" },
          ].map((s, i) => (
            <div key={i} className="border border-gray-100 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-[#1A1A2E]">{s.name}</p>
                <span className="text-[10px] text-gray-400">{s.level}</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${s.progress}%`, backgroundColor: s.color }}
                />
              </div>
              <p className="text-[10px] text-gray-400 mt-1">{s.progress}% of program goal</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


/* CMS: INQUIRIES (Secretary's primary inbox) */
function InquiriesView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-[#1A1A2E]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Inquiries Inbox
          </h1>
          <p className="text-sm text-gray-500 mt-1">New parent inquiries from the website form. Triage and convert to bookings.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E84671] text-white">4 New</span>
          <span className="text-xs text-gray-400">12 this week</span>
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex items-center gap-2 flex-wrap">
        {[
          { label: "All (12)", active: true },
          { label: "New (4)", color: "#E84671" },
          { label: "Contacted (5)", color: "#E8B731" },
          { label: "Scheduled (2)", color: "#2BAA8E" },
          { label: "Closed (1)", color: "#9CA3AF" },
        ].map((f, i) => (
          <button
            key={f.label}
            className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
              i === 0 ? "bg-[#1A1A2E] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Inquiry list */}
      <div className="space-y-2">
        {[
          {
            received: "Today, 2:14 PM",
            parent: "Patricia Aguilar",
            phone: "+63 917 234 5678",
            email: "p.aguilar@email.com",
            child: "Camila Aguilar",
            age: 5,
            school: "PAREF Woodrose",
            grade: "Kindergarten",
            schedule: "Weekday Mornings",
            concerns: "Camila is struggling with sight words and seems anxious during reading time at school. Looking for personalized support.",
            status: "new",
          },
          {
            received: "Today, 11:32 AM",
            parent: "Marco Villanueva",
            phone: "+63 918 555 1234",
            email: "m.villanueva@email.com",
            child: "Sebastian Villanueva",
            age: 8,
            school: "Beacon Academy",
            grade: "Grade 2",
            schedule: "Saturdays",
            concerns: "Wants to enroll Sebastian in your Reading Enhancement program. He's reading at Grade 1 level.",
            status: "new",
          },
          {
            received: "Yesterday",
            parent: "Andrea Lim",
            phone: "+63 920 888 9999",
            email: "alim@email.com",
            child: "Lucas Lim",
            age: 10,
            school: "Everest Academy",
            grade: "Grade 4",
            schedule: "Weekday Afternoons",
            concerns: "Friend recommended R.E.A.D. — would love to know more about your Academic Development program.",
            status: "contacted",
          },
        ].map((inq, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: ["#E84671", "#2E7AB8", "#2BAA8E", "#E8B731"][i % 4] }}
                >
                  {inq.parent.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A2E]">{inq.parent}</p>
                  <p className="text-[11px] text-gray-400">
                    {inq.phone} &middot; {inq.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${
                    inq.status === "new"
                      ? "bg-[#E84671]/10 text-[#E84671]"
                      : "bg-[#E8B731]/10 text-[#E8B731]"
                  }`}
                >
                  {inq.status}
                </span>
                <span className="text-[10px] text-gray-400">{inq.received}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3 text-xs">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Child</p>
                <p className="text-[#1A1A2E] font-medium">{inq.child}, {inq.age}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Grade Level</p>
                <p className="text-[#1A1A2E] font-medium">{inq.grade}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">School</p>
                <p className="text-[#1A1A2E] font-medium">{inq.school}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Preferred Schedule</p>
                <p className="text-[#1A1A2E] font-medium">{inq.schedule}</p>
              </div>
            </div>

            <div className="text-xs text-gray-500 italic leading-relaxed bg-gray-50 rounded-lg p-3 mb-4">
              &ldquo;{inq.concerns}&rdquo;
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button className="px-3 py-1.5 text-xs bg-[#2BAA8E] text-white rounded-md cursor-pointer font-medium">
                Schedule Assessment
              </button>
              <button className="px-3 py-1.5 text-xs bg-white border border-gray-200 text-gray-700 rounded-md cursor-pointer font-medium">
                Reply via Email
              </button>
              <button className="px-3 py-1.5 text-xs bg-white border border-gray-200 text-gray-700 rounded-md cursor-pointer font-medium">
                Send WhatsApp
              </button>
              <button className="px-3 py-1.5 text-xs text-gray-400 hover:text-gray-700 cursor-pointer">
                Mark as closed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
