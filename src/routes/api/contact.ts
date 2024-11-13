import { RequestHandler } from '@builder.io/qwik-city';
import mongoose from 'mongoose';

// Създаване на схема за контактите
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

// Модел за контактите
const Contact = mongoose.model('Contact', contactSchema);

// Свързване с MongoDB
const connectToDatabase = async () => {
  const mongoUrl = "mongodb+srv://damianiliev9:12345@spark.bjwwubz.mongodb.net/?retryWrites=true&w=majority&appName=Spark";
  if (!mongoUrl) {
    throw new Error('MongoDB URL е необходимо да бъде зададено');
  }

  await mongoose.connect(mongoUrl);
  console.log('Connected to MongoDB');
};

// Обработване на POST заявка (Без използване на `reply`)
export const onPost: RequestHandler = async ({ request }) => {
  // Свързване с базата данни
  await connectToDatabase();

  const { name, email, phone } = await request.json();
  try {
    // Създаване и запазване на нов контакт в MongoDB
    const newContact = new Contact({ name, email, phone });
    await newContact.save();
  } catch (error) {
    console.error('Error saving contact:', error);
    // При грешка също няма да бъде върнат отговор
  }
};