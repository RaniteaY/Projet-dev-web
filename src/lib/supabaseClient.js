import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://clcsnqhqseekhffdrdag.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsY3NucWhxc2Vla2hmZmRyZGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwNzk4NDEsImV4cCI6MTk4MTY1NTg0MX0.bVVDNLtXVFE2uhQLA-e03WQEvRUIYdSPV1y-yaUDc_4'
);
