import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function AdminPage() {
  const supabase = await createClient();

  // ensure user is logged in
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login')
  }

  return (
  <div>
    <h1>admin page</h1>
    <p>Hello {data.user.email}</p>
  </div>
  );
}
