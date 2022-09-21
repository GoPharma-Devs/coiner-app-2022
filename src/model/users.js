import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    ocupation: {
      type: String,
      required: true,
    },
    enrollment: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    terms: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.User || model('User', userSchema);
