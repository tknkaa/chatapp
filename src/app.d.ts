// See https://svelte.dev/docs/kit/types#app.d.ts

import type { auth } from '$lib/auth';

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: typeof auth.$Infer.Session.user | null;
			session: typeof auth.$Infer.Session.session | null;
		}
	}
}

export {};
