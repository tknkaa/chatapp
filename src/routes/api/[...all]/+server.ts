import type { RequestHandler } from '@sveltejs/kit';
import { Hono } from 'hono';

const app = new Hono().basePath('/api');

app.get('/sse', (c) => {
	return c.text('Hello, GET');
});

app.post('/messages', (c) => {
	return c.text('Hello, POST');
});

export const GET: RequestHandler = ({ request }) => app.fetch(request);
export const POST: RequestHandler = ({ request }) => app.fetch(request);
