const noteType = require("../noteTypes");

const { GraphQLID, GraphQLNonNull, GraphQLString } = require("graphql");

const NotesServices = require("../../services/NotesService");

const CreateNoteMutation = {
  type: noteType,
  args: {
    content: { type: GraphQLString },
  },
  resolve: async (_, { content }) => {
    const noteService = new NotesServices();
    const newNote = await noteService.creatNote({ content });
    return newNote;
  },
};

const DeleteNoteMutation = {
  type: noteType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: async (_, { _id }) => {
    const noteService = new NotesServices();
    const response = await noteService.deleteNoteById({ _id });

    if (response.ok) {
      return { _id };
    }
  },
};

const UpdateNoteMutation = {
  type: noteType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    content: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { _id, content }) => {
    const noteService = new NotesServices();
    const response = await noteService.updateNoteById({ _id, content });

    if (response.ok) {
      return { _id, content };
    }
  },
};

module.exports = { CreateNoteMutation, DeleteNoteMutation, UpdateNoteMutation };
