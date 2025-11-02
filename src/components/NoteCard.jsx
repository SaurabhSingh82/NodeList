import PropTypes from 'prop-types';

const NoteCard = ({ elem, editNote, deleteNote }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="group relative flex flex-col justify-between h-72 bg-cover rounded-2xl text-black pt-12 pb-6 px-6 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] transform transition-all duration-300 hover:scale-105 hover:rotate-1 shadow-2xl cursor-pointer">
      {/* Date Badge */}
      <div className="absolute top-3 right-4">
        <span className="text-xs font-semibold text-gray-600 bg-yellow-100 px-2 py-1 rounded-full">
          {formatDate(elem.updatedAt)}
        </span>
      </div>

      {/* Content */}
      <div className="w-full flex-1 overflow-hidden">
        <h3 className="leading-tight text-xl font-bold line-clamp-2 mb-3 pr-4">
          {elem.title}
        </h3>
        <p className="leading-relaxed text-sm font-medium text-gray-700 line-clamp-5">
          {elem.details || <span className="italic text-gray-500">No additional details...</span>}
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 w-full mt-4">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            editNote(elem.id);
          }} 
          className="flex-1 bg-blue-500 hover:bg-blue-600 py-2.5 text-sm rounded-lg font-bold text-white transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          Edit
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            deleteNote(elem.id);
          }} 
          className="flex-1 bg-red-500 hover:bg-red-600 py-2.5 text-sm rounded-lg font-bold text-white transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  elem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string,
    updatedAt: PropTypes.string
  }).isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default NoteCard;