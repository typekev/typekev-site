"use client";

import { PropsWithChildren } from "react";

import { r3f } from "@/helpers/global";

export const Three = ({ children }: PropsWithChildren) => {
  return <r3f.In>{children}</r3f.In>;
};
