const MongoDbRepository = require("../repository/mongoDbRepository");

class NotesService {
  constructor() {
    this.notesRepository = new MongoDbRepository("Notes");
  }

  getNotes() {
    return this.notesRepository.getAll();
  }

  getNoteById({ _id }) {
    return this.notesRepository.getById(_id);
  }

  creatNote(content) {
    return this.notesRepository.create(content);
  }

  updateNoteById({ _id, content }) {
    return this.notesRepository.update(_id, { content });
  }

  deleteNoteById({ _id }) {
    return this.notesRepository.delete(_id);
  }
}

module.exports = NotesService;
