"use client"

import Image from "next/image";
import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";

export function Home() {
  return (
    <>
      Home Page
    </>
  );
}

export default withAuthenticator(Home) as React.ComponentType<WithAuthenticatorProps>;