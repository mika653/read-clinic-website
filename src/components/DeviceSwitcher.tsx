"use client";

import { useState } from "react";

type Device = "mobile" | "tablet" | "desktop";

const deviceConfig = {
  mobile: { width: 375, height: 812, label: "iPhone 14", icon: PhoneIcon },
  tablet: { width: 768, height: 1024, label: "iPad", icon: TabletIcon },
  desktop: { width: 1280, height: 800, label: "Desktop", icon: DesktopIcon },
};

function PhoneIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "currentColor" : "#94a3b8"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function TabletIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "currentColor" : "#94a3b8"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function DesktopIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "currentColor" : "#94a3b8"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export default function DeviceSwitcher({
  children,
  conceptName,
  conceptNumber,
  accentColor = "#2E7AB8",
}: {
  children: (device: Device) => React.ReactNode;
  conceptName: string;
  conceptNumber: number;
  accentColor?: string;
}) {
  const [device, setDevice] = useState<Device>("mobile");
  const config = deviceConfig[device];

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </a>
            <div>
              <span
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: accentColor }}
              >
                Concept {conceptNumber}
              </span>
              <h1 className="text-sm font-semibold text-gray-900">
                {conceptName}
              </h1>
            </div>
          </div>

          {/* Device switcher pills */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            {(Object.keys(deviceConfig) as Device[]).map((d) => {
              const Icon = deviceConfig[d].icon;
              const isActive = device === d;
              return (
                <button
                  key={d}
                  onClick={() => setDevice(d)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon active={isActive} />
                  <span className="hidden sm:inline">
                    {deviceConfig[d].label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-gray-400">
            {config.width} x {config.height}
          </div>
        </div>
      </header>

      {/* Device frame area */}
      <div className="flex-1 flex items-start justify-center py-8 px-4 overflow-auto">
        <div
          className="device-frame relative bg-white shadow-2xl border border-gray-200 overflow-hidden transition-all duration-500 ease-out"
          style={{
            width: `min(${config.width}px, calc(100vw - 2rem))`,
            height: device === "desktop"
              ? `min(${config.height}px, calc(100vh - 6rem))`
              : `min(${config.height}px, calc(100vh - 8rem))`,
            borderRadius: device === "desktop" ? "1rem" : "2rem",
          }}
        >
          {/* Notch for mobile */}
          {device === "mobile" && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-10" />
          )}

          {/* Browser chrome for desktop */}
          {device === "desktop" && (
            <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5 flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 h-4 bg-white rounded text-[9px] text-gray-400 flex items-center px-2">
                readcenter.ph
              </div>
            </div>
          )}

          {/* Content */}
          <div
            className="device-content w-full overflow-y-auto overflow-x-hidden"
            style={{
              height: device === "desktop" ? "calc(100% - 2rem)" : "100%",
            }}
          >
            {children(device)}
          </div>
        </div>
      </div>
    </div>
  );
}
