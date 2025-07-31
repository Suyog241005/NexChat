# NexChat

NexChat is a modern, full-stack Discord clone built with the latest web technologies. It offers real-time chat, voice, and video channels, robust authentication, and a beautiful, responsive UI. NexChat is designed for scalability, developer experience, and user delight.

---

## 🚀 Features

- **Real-Time Messaging:**  
  Enjoy instant text chat powered by WebSockets and Socket.IO for seamless, live communication.

- **Voice & Video Channels:**  
  Join audio and video rooms with LiveKit integration for high-quality, low-latency calls.

- **Authentication & Security:**  
  Secure sign-in and sign-up flows using Clerk, with role-based access control for servers and channels.

- **Media Sharing:**  
  Effortlessly upload and preview images and files in chat, with support for PDF and image previews.

- **Modern UI/UX:**  
  Clean, responsive design using Tailwind CSS and Radix UI, with dark mode support and smooth transitions.

- **Server & Channel Management:**  
  Create, join, and manage servers and channels, including text, voice, and video types.

- **Role Management:**  
  Assign roles (Admin, Moderator, Guest) to members for granular permissions.

- **Emoji & File Uploads:**  
  Express yourself with emoji picker and upload files directly in chat.

- **Optimized for Performance:**  
  Uses Next.js App Router, React 19, and Prisma for fast, scalable performance.

- **Developer Friendly:**  
  Modular codebase, TypeScript everywhere, and easy-to-extend architecture.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), React 19, Tailwind CSS, Radix UI
- **Backend:** Node.js, Next.js API routes, Prisma ORM, PostgreSQL
- **Auth:** Clerk
- **Real-Time:** Socket.IO, LiveKit
- **File Uploads:** UploadThing
- **State Management:** Zustand, React Query
- **Deployment:** Railway

---

## 🏆 Why NexChat?

- **Blazing Fast:** Real-time updates and optimized queries for a snappy experience.
- **Secure:** Modern authentication and authorization best practices.
- **Scalable:** Built for cloud deployment and horizontal scaling.
- **Customizable:** Easily add new features, themes, or integrations.
- **Open Source:** Learn from and contribute to a real-world, production-grade codebase.

---

## 🚦 Getting Started

1. **Clone the repo:**
   ```sh
   git clone https://github.com/yourusername/nexchat.git
   cd nexchat
   ```

2. **Install dependencies:**
   ```sh
   npm install
   
   ```

3. **Set up the database:**
   - Create a new PostgreSQL database.
   - Update the `DATABASE_URL` in the `.env` file with your database credentials.
   - Run `npx prisma migrate dev` to create the necessary tables.

4. **Start the development server:**
   ```sh
   npm run dev

   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



