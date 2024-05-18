"use client"

import Image from "next/image";
import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { Heading } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';


Amplify.configure(config);

console.log('config', config)

export function Home({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <Heading level={1}>Welcome to the Dashboard App</Heading>
    </>
  );
}

export default withAuthenticator(Home) as React.ComponentType<WithAuthenticatorProps>;