import PropTypes from 'prop-types';
import NoteCard from './NoteCard';

const NotesList = ({ filteredTasks, editNote, deleteNote }) => {
  return (
    <div className="h-full">
      {filteredTasks.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-8xl mb-6 opacity-50">📝</div>
          <h3 className="text-2xl font-semibold text-gray-400 mb-4">
            No notes found
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Create your first note using the form on the left, or try adjusting your search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-2">
          {filteredTasks.map((elem, idx) => (
            <NoteCard 
              key={elem.id || idx} 
              elem={elem} 
              editNote={editNote} 
              deleteNote={deleteNote} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

NotesList.propTypes = {
  filteredTasks: PropTypes.arrayOf(PropTypes.object),
  editNote: PropTypes.func,
  deleteNote: PropTypes.func,
};

NotesList.defaultProps = {
  filteredTasks: [],
  editNote: () => {},
  deleteNote: () => {},
};

export default NotesList;