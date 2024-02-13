"use client"
import Image from "next/image";
import { Hero } from "./../components/hero"

import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";


export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">  </main>
    </NextUIProvider>
  );
}
