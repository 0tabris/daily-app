# daily_

An innovative application designed to enhance real-time collaboration and document management, utilizing cutting-edge technologies for a seamless, secure, and engaging user experience.

## Overview

**daily_** leverages a robust stack including Next.js for the frontend, Supabase for backend services, and Stripe for subscription management, creating a secure and scalable platform. The frontend architecture utilizes server-side rendering and static site generation capabilities of Next.js, styled with Tailwind CSS for a responsive UI. The backend, powered by Supabase, offers real-time database functionalities, authentication, and secure payment handling through Stripe.

## Features

- **Real-time Collaboration**: Enables users to see each other's cursors and text selections in real-time within documents.
- **Secure Authentication**: Custom authentication flow with 2FA email invitations, built on Supabase's robust authentication mechanisms.
- **Subscription Management**: Integrated with Stripe for handling monthly subscriptions, allowing users to manage their subscription plans and payment methods directly.
- **Responsive Design**: Tailored UI that supports light/dark mode, ensuring a great user experience across devices.

## Getting started

### Requirements

- Node.js installed on your system.
- A Supabase account and project for backend services.
- A Stripe account for handling subscriptions.

### Quickstart

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in the project root.
3. Set up your `.env.local` file with your Supabase and Stripe keys.
4. Start the development server with `npm run dev`.

Navigate to `http://localhost:3001` to view the application.

### License

Copyright (c) 2024.