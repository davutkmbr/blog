import fs from "fs";

export default {
  get: async function (key: string) {
    try {
      const path = `./cache/${key}.json`;
      const { birthtime } = await fs.statSync(path);

      if (
        Math.abs(new Date(birthtime).getTime() - new Date().getTime()) /
          3600000 >
        0.1
      ) {
        await fs.unlinkSync(path);
        return null;
      }

      return JSON.parse(await fs.readFileSync(path, "utf8"));
    } catch (error) {
      return null;
    }
  },

  set: async function (key: string, value: any) {
    await fs.appendFileSync(`./cache/${key}.json`, JSON.stringify(value));

    return value;
  },
};
