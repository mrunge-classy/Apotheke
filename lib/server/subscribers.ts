import { readJsonFile, writeJsonFile } from "./data-store";

const FILE = "subscribers.json";

type Subscriber = { email: string; subscribedAt: string };

export async function addSubscriber(email: string): Promise<{ alreadySubscribed: boolean }> {
  const subscribers = await readJsonFile<Subscriber[]>(FILE, []);
  const normalized = email.trim().toLowerCase();
  const exists = subscribers.some((s) => s.email === normalized);
  if (exists) return { alreadySubscribed: true };

  subscribers.push({ email: normalized, subscribedAt: new Date().toISOString() });
  await writeJsonFile(FILE, subscribers);
  return { alreadySubscribed: false };
}
