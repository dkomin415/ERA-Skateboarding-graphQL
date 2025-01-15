import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post'
            }
        ],
        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        album: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Album'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);


// create the User model using User
const User = model('User', UserSchema);

export default User;