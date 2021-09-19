import type { NextApiRequest, NextApiResponse } from 'next';

import { MongoClient } from 'mongodb';
import config from './../../config/prod.json';

// 2d2suVhhrAxiwmNg
// nextblog
type Data = {
  message: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // Store it in a database
    let newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(config.dbConnectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
    }

    const db = client?.db();

    try {
      await db?.collection('messages').insertOne(newMessage);
    } catch (error) {
      client?.close();
      res.status(500).json({ message: 'Storing message failed!' });
    } finally {
      client?.close();
    }

    res
      .status(201)
      .json({ message: 'Successfully stored message!', data: newMessage });
  }
}
