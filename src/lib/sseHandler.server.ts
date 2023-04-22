import EventEmitter from 'events';
import { createClient, type RedisClientType } from 'redis';

import * as dotenv from 'dotenv';
import { browser, building } from '$app/environment';
dotenv.config();

export type sseData = {
	id: string;
	message: string;
};

// create a new eventEmitter
const msgEmitter = new EventEmitter();

// disable the connection to redis at build time
export let redis: RedisClientType;
if (!browser && !building) {
	// connect to redis
	redis = createClient({ url: process.env.REDIS_URL });
	await redis.connect();

	// duplicate the client for the subsription
	const subscriber = redis.duplicate();
	await subscriber.connect();

	// subscribe to the pub-sub
	await subscriber.pSubscribe('*' as string, (message: string, channel: string) => {
		// check if there is a user subscribed to the channel
		if (msgEmitter.listenerCount(channel) > 0) {
			// emit the message to the listener of the channel
			msgEmitter.emit(channel, message);
		}
	});
}

export const sseServer = (channelId: string) => {
	// create a variable for the arrow function (used in the removeListener)
	let listener: (msg: string) => void;

	// create a new text encoder and send a message to the client
	const encoder = new TextEncoder();

	// create the redableStream
	const stream = new ReadableStream({
		async start(controller) {
			// encode the input and send a message to a client
			const sendMsg = (msg: string) => controller.enqueue(encoder.encode('data: ' + msg + '\n' + '\n'));

			// listen to new message and send them to a client
			listener = (msg) => sendMsg(msg);
			msgEmitter.addListener(channelId, listener);
		},
		cancel() {
			// remove the listener
			msgEmitter.removeListener(channelId, listener);
		}
	});

	// return the message stream and set the headers
	return new Response(stream, {
		headers: { 'Content-Type': 'text/event-stream', Connection: 'keep-alive', 'Cache-Control': 'no-cache' }
	});
};
