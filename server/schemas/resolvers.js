import models from '../seeders/Trick-Seeders/models/index.js';
const { TrickData, BoardRotation, BodyVarial, Flip, NumberOfFlips } = models;

const resolvers ={
    Query: {
        tricks: async (root, args, context) => {
            return TrickData.find()
        },
        trick: async (root, { _id }, context) => {
            return TrickData.find({ _id })
        },
        boardRotations: async (root, args, context) => {
            return BoardRotation.find();
        },
        bodyVarials: async (root, args, context) => {
            return BodyVarial.find();
        },
        flips: async (root, args, context) => {
            return Flip.find()
            .populate('numberOfFlips');
        },
        numberOfFlips: async (root, args, context) => {
            return NumberOfFlips.find();
        }

    },
    Trick: {
        boardRotation: async (obj, args, context) => {
            // console.log(obj._id);
            // BoardRotation.find({ br } )
            // .then((br) => br._id === obj.boardRotation_id);
        },
        // flip: (trick) => {

        // },
        // bodyVarial: (trick) => {

        // }

    },
};

export default resolvers;