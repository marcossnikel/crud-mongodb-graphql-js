const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

const noteType = new GraphQLObjectType({
  name: "Note",
  fields: {
    _id: { type: GraphQLID },
    content: { type: GraphQLString },
  },
});

module.exports = noteType;
