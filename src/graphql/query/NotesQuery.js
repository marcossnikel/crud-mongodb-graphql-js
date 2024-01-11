const noteType = require("../noteTypes");
const NoteService = require("../../services/NotesService");
const { GraphQLList } = require("graphql");


const NotesQuery = {
    type: new GraphQLList(noteType),
    args: {},
    resolve: async () => {
        const noteService = new NoteService();
        const notes = await noteService.getNotes();
        return notes;
    }
}


module.exports = { NotesQuery }