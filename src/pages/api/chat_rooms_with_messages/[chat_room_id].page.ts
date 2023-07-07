import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

export const baseUrl = "https://rubybackend-xnabw36hha-as.a.run.app";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { chat_room_id } = req.query;

    try {
      const result = await axios.get(
        `${baseUrl}/chat_rooms_with_messages/${chat_room_id}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      return res.status(200).json(result.data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;