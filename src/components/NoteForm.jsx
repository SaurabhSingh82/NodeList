import PropTypes from 'prop-types';

const NoteForm = ({ submitHandler, isEditing, cancelEdit, title, setTitle, details, setDetails }) => {
  return (
    <form onSubmit={submitHandler} className="flex gap-6 flex-col items-start max-w-2xl mx-auto">
      <h1 className="text-4xl mb-2 font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {isEditing !== null ? 'Edit Note' : 'Add New Note'}
      </h1>
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-300 mb-2">Note Title *</label>
        <input
          type="text"
          placeholder="Enter a meaningful title..."
          className="px-4 w-full font-medium py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-300 mb-2">Note Details</label>
        <textarea
          className="px-4 w-full font-medium h-40 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none outline-none"
          placeholder="Write your detailed notes here..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <div className="flex gap-3 w-full">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 active:scale-95 font-semibold w-full py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          {isEditing !== null ? 'Update Note' : 'Add Note'}
        </button>
        {isEditing !== null && (
          <button
            type="button"
            onClick={cancelEdit}
            className="bg-gray-600 hover:bg-gray-700 active:scale-95 font-semibold w-32 py-3 rounded-lg transition-all duration-200"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

NoteForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  isEditing: PropTypes.any,
  cancelEdit: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func.isRequired,
  details: PropTypes.string,
  setDetails: PropTypes.func.isRequired,
};

NoteForm.defaultProps = {
  isEditing: null,
  cancelEdit: () => {},
  title: '',
  details: '',
};

export default NoteForm;
