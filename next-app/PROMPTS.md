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





## Activity 5: Securing the App with Supabase Auth

### Prompt 1

**What I asked:**

> Add Supabase Auth to my Next.js app. Create a login page, server actions for sign in and sign out, middleware to protect dashboard routes, and update the projects page so users only see their own projects. Use my existing Supabase setup and existing dashboard layout.

**What happened:**

> The Agent created and changed several files for authentication. It worked on the login page, auth actions, middleware, sidebar sign out, and Supabase server files. It did not work perfectly the first time, because some files were placed in the wrong folder and I had to fix missing imports.

### Prompt 2

**What I asked:**

> Fix the incorrect auth folder structure. There is an extra folder named ")" inside `src/app/(auth)/` causing imports to fail. Move all auth files into the correct folder structure: `src/app/(auth)/actions.ts` and `src/app/(auth)/login/page.tsx`. Then remove the extra ")" folder and fix any broken imports related to `@/app/(auth)/actions`.

**What happened:**

> The Agent fixed the folder structure so the sign out import could be found. I learned that file paths matter a lot in Next.js, especially with route groups like `(auth)`.

### Reflection

> The Agent handled `middleware.ts` by creating middleware that checks the user session before allowing access to protected pages. I did have to add files to the Working Set so the Agent had enough context, like the layout, sidebar, projects page, actions file, and Supabase files. I was surprised that adding authentication changed so many files because it affected login, logout, middleware, Supabase clients, the sidebar, and the project data. Middleware-based auth seems better than checking login status inside every page because it protects routes in one central place instead of repeating the same login check everywhere.




## Activity 6: Deployment, Webhooks, & AI-Testing

### Prompt 1

**What I asked:**

> Create Playwright tests for my Next.js app. Test the login page, authenticated user flow, and sidebar navigation links. Use role-based locators and make the tests work with the current Supabase auth setup.

**What happened:**

> The Agent created Playwright tests using role-based locators like `getByRole()`. It understood the login flow from the workspace context and created tests for the login page, successful authentication, and sidebar navigation. The tests did not fully pass on the first run because one locator matched multiple elements on the page.

### Prompt 2

**What I asked:**

> Fix the failing Playwright test for the Overview sidebar link. The test is matching both the sidebar and breadcrumb links. Update the locator so only the sidebar navigation item is tested.

**What happened:**

> The fix required a couple rounds of testing. The Agent updated the locator to target the sidebar specifically using `locator("ul").getByRole()`. After rerunning the tests, all 3 tests passed successfully. I also had to troubleshoot issues with Playwright, Tailwind resolution, Supabase environment variables, and Vercel deployment settings during the process.

### Reflection

> Having AI write and run tests makes me feel more confident before deploying because it automatically checks parts of the app that I might forget to test myself. The Agent caught an issue with duplicate “Overview” links that I probably would not have noticed during normal browser testing. Compared to manually clicking around in the browser, automated tests feel faster and more reliable because I can rerun them anytime after making changes.

### Course Reflection

> My prompting strategy improved a lot from Activity 1 to Activity 6. At the beginning I gave short prompts and usually had to fix things manually after. Now I give more detailed prompts with exact file names, project structure, and expected behavior. I also learned to explain errors back to the Agent so it could help troubleshoot problems faster. The most important thing I learned about AI coding tools is that the quality of the output depends heavily on the quality of the prompt and context you provide.