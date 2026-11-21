import { mkdir, writeFile } from "node:fs/promises";

const poem = `Two agents held keys.
One traced the hinges;
one listened at the walls.
No order passed.
They laid both keys down,
then picked the same one:
east, where the latch was warm.
Together they turned it.
The door opened;
neither could call it alone.`;

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", poem, "utf8");
