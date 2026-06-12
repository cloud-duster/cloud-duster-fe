// Base URL for the Supabase Edge Function `api` (replaces the old Render server).
// Set VITE_API_URL in your env, e.g.
//   https://<project-ref>.supabase.co/functions/v1/api
const URL_API = import.meta.env.VITE_API_URL ?? "https://<project-ref>.supabase.co/functions/v1/api";

export { URL_API };
