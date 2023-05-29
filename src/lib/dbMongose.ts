import { Schema, model, connect } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

const User = model<IUser>('User', userSchema);

run().catch(err => console.log(err));

async function run() {
  const uri = process.env.MONGODB_URI
  await connect(uri!);

  const user = new User({
    name: 'Bill',
    email: 'bill@initech.com',
    avatar: 'https://i.imgur.com/dM7Thhn.png'
  });
  await user.save();

  console.log(user.email);
}
