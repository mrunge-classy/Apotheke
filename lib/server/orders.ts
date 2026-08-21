import { readJsonFile, writeJsonFile } from "./data-store";
import type { Order } from "../types";

const FILE = "orders.json";

function generateOrderId() {
  const now = new Date();
  const year = now.getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `ASP-${year}-${rand}`;
}

export async function createOrder(order: Omit<Order, "id" | "createdAt">): Promise<Order> {
  const orders = await readJsonFile<Order[]>(FILE, []);

  let id = generateOrderId();
  while (orders.some((o) => o.id === id)) {
    id = generateOrderId();
  }

  const fullOrder: Order = {
    ...order,
    id,
    createdAt: new Date().toISOString(),
  };

  orders.push(fullOrder);
  await writeJsonFile(FILE, orders);
  return fullOrder;
}

export async function getOrder(id: string): Promise<Order | undefined> {
  const orders = await readJsonFile<Order[]>(FILE, []);
  return orders.find((o) => o.id === id);
}
