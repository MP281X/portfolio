import { sseServer } from '$lib/sseHandler.server';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	return sseServer('sse');
};
