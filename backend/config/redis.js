import { createClient } from "redis";

let client;

try {
  client = createClient({
    url: "redis://127.0.0.1:6379",
  });

  client.on("error", (err) => {
    console.log("⚠️ Redis Error:", err.message);
  });

  await client.connect();

  console.log("✅ Redis Connected");

} catch (err) {
  console.log("⚠️ Redis not running, skipping...");
  client = null;
}

export default client;