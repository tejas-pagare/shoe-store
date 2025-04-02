This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




## prisma setup
=>  npm i -D prisma @prisma/client
=> npx prisma init
=> add database url in env file
=> npx prisma generate    (to grenerate a prisma client)
=> npx prisma migrate dev --name migratefilename_custom
=> npx prisma studio (to visualize data)
=> database polling
=> any changes made in prisma file should be migrate by running cmd =>npx prisma migrate dev --name migratefilename_custom




## Server Actions
Server Actions in Next.js (Beginner-Friendly Guide)
Server Actions in Next.js allow you to write functions that run directly on the server and call them from the client. They help in handling form submissions, database updates, and API requests without needing a separate API route.

🌟 Why Use Server Actions?
Less API Boilerplate – No need to create separate API routes for simple actions.

Better Security – Runs on the server, so sensitive logic (e.g., database operations) isn’t exposed to the client.

Improved Performance – Reduces client-server communication overhead.

🛠️ How to Use Server Actions
1️⃣ Enable Server Actions (Experimental)
In next.config.js, enable the experimental feature:

javascript
Copy
Edit
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
2️⃣ Define a Server Action
Server Actions are created inside server components or inside a server directory.

javascript
Copy
Edit
"use server"; // This makes it a server action

export async function addTask(task) {
  // Simulating a database save
  console.log(`Task added: ${task}`);
  return { success: true, message: "Task added successfully!" };
}
3️⃣ Call the Server Action from a Client Component
Client components can directly call server actions.


<!-- "use client";
import { useState } from "react";
import { addTask } from "./actions"; // Import the server action

export default function TaskForm() {
  const [task, setTask] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await addTask(task); // Calling server action
    alert(result.message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
} -->
🔥 Key Features
✔ No API Routes Needed – Directly call server actions from the client.
✔ Automatic Server Execution – The function runs only on the server.
✔ Works with Forms & Async Data Handling – Great for database operations, form submissions, etc.

💡 When to Use Server Actions?
✅ When you don’t need full API routes but still need to handle form submissions.
✅ When you need to interact with a database securely from the client.
✅ When you want faster and cleaner data fetching without extra API calls.


 Why No API Call is Made in Server Actions?
Direct Function Execution:

When a client component calls a server action, Next.js sends the request directly to the server function.

This does not involve a traditional fetch request or HTTP API route.

Uses Next.js Internal Mechanism:

The request is handled internally by Next.js using the use server directive.

Instead of exposing a REST or GraphQL API, the action is executed as a function call on the server.