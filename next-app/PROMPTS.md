## Activity 2: Building the Dashboard Shell

### Prompt 1
**What I asked:**
> Using the shadcn sidebar components in my components/ui folder, create a collapsible dashboard layout with a sidebar (app-sidebar.tsx), navigation links (Overview, Projects, Settings with lucide icons), breadcrumbs, and a main content area. Update layout.tsx to use SidebarProvider and keep the Developer Profile content from Activity 1 in page.tsx. Keep dark mode working.

**What happened:**
> The Agent created the app-sidebar.tsx file and added the navigation links with icons. It also updated layout.tsx to include the SidebarProvider and wrapped everything correctly. It added breadcrumbs at the top. My page.tsx file stayed the same so my Developer Profile content was still there.

### Prompt 2
**What I asked:**
> I asked the Agent to fix spacing and make sure the layout looked clean and worked properly.

**What happened:**
> The Agent adjusted the layout and spacing. It fixed the UI and everything looked better after that. It worked without any major issues.

### Reflection
> The Agent did not delete my Activity 1 code which was good. I made sure to review the changes before accepting them. I learned that you need to be clear when you want to keep existing code so it does not get overwritten. Checking the changes helped avoid problems.


## Activity 3: Server-Side Data with Supabase

### Prompt 1

**What I asked:**

> Create a projects page using Supabase that fetches project data from the database. Use a Server Component in Next.js App Router and display the data as cards. Each card should show the project title and description using Tailwind styling.

**What happened:**

> The Agent created a Server Component using async/await instead of useEffect which is what I usually use. It was able to fetch the data directly in the component and display it. At first I had a small connection issue with Supabase but the code itself was mostly correct. I just had to fix my environment variables and it worked.

### Prompt 2

**What I asked:**

> Fix the Supabase connection error and make sure the data is being fetched correctly from the server. Also adjust the card layout to look cleaner and more spaced out.

**What happened:**

> The Agent helped me fix the connection problem by pointing out the env variables issue. After that the data loaded fine. It also updated the card layout using Tailwind which made it look better and more organized. I learned that even small setup mistakes can break everything even if the code is right.

### Reflection

> Fetching data on the server feels way easier compared to using useEffect. Before I had to deal with state and loading stuff but now it just runs on the server and sends the data ready. One advantage is cleaner code and it feels faster. What surprised me is how simple it actually is in the App Router, it takes way less code than I thought.






## Activity 4.1: AI-Driven Forms & Validation

### Prompt 1

**What I asked:**

> Create a Zod schema in `src/lib/schemas.ts` for a project form. The schema should validate title, description, and status. Title must be at least 3 characters, description must be at least 10 characters, and status should only allow valid project statuses. Export both the schema and the inferred TypeScript type.

**What happened:**

> The Agent created the schema file and added validation rules for the form fields using Zod. It also exported both the schema and inferred type so they could be reused in the form and Server Action.

### Prompt 2

**What I asked:**

> Using the Zod schema from `src/lib/schemas.ts`, create a form component at `src/components/project-form.tsx`. Make it a Client Component using react-hook-form and zodResolver. Use shadcn/ui fields, input, textarea, and select. Show errors under each field, add a Create Project button, and show a sonner toast after successful submission. Also create a Server Action at `src/app/actions.ts` that validates the data again with Zod and inserts it into the Supabase projects table. Create `src/app/projects/new/page.tsx` to render the form, and add a New Project button to `src/app/projects/page.tsx` that links to `/projects/new`.

**What happened:**

> The Agent created multiple files for the form, server action, and new project page. It connected the form submission to the Server Action and included server-side validation with Zod. The `/projects/new` page was missing at first and gave a 404 error, so I had to ask the Agent to create the missing page.

### Prompt 3

**What I asked:**

> The `/projects/new` route is giving a 404 because the page does not exist yet. Create the missing route at `src/app/projects/new/page.tsx` and make it render the ProjectForm component from `src/components/project-form.tsx`.

**What happened:**

> The Agent created the missing folder and page file. After that, the route worked correctly and the form loaded.

### Reflection

> Using the Schema-First approach with Zod makes forms easier to manage because all the validation rules are written in one place. It helps prevent junk data from entering the database because invalid inputs are blocked before the data gets inserted into Supabase. In previous courses, I mostly used simple if-statements or basic HTML validation, but Zod feels more organized because the same validation works on both the client and server side.