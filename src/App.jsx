import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Intro from './pages/Intro';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Please enter a title for your note');
      return;
    }

    if (isEditing !== null) {
      // Update note
      setNotes(notes.map(note => 
        note.id === isEditing 
          ? { ...note, title, details, updatedAt: new Date().toISOString() }
          : note
      ));
    } else {
      // Add new note
      const newNote = {
        id: Date.now().toString(),
        title,
        details,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setNotes([newNote, ...notes]);
    }

    // Reset form
    setTitle('');
    setDetails('');
    setIsEditing(null);
  };

  const editNote = (id) => {
    const noteToEdit = notes.find(note => note.id === id);
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setDetails(noteToEdit.details);
      setIsEditing(id);
    }
  };

  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== id));
      if (isEditing === id) {
        setTitle('');
        setDetails('');
        setIsEditing(null);
      }
    }
  };

  const cancelEdit = () => {
    setTitle('');
    setDetails('');
    setIsEditing(null);
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    note.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'
    }`}>
      <Router>
        <Header 
          toggleTheme={toggleTheme} 
          isDarkMode={isDarkMode} 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          notesCount={notes.length}
        />
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col lg:flex-row gap-8 min-h-[70vh]">
                {/* Left Side - Note Form */}
                <div className="lg:w-2/5">
                  <div className={`sticky top-24 rounded-2xl p-6 shadow-2xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 border border-gray-700' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <NoteForm 
                      submitHandler={submitHandler}
                      title={title}
                      setTitle={setTitle}
                      details={details}
                      setDetails={setDetails}
                      isEditing={isEditing}
                      cancelEdit={cancelEdit}
                    />
                  </div>
                </div>

                {/* Right Side - Notes List */}
                <div className="lg:w-3/5">
                  <div className={`rounded-2xl p-6 shadow-2xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 border border-gray-700' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Your Notes {notes.length > 0 && `(${notes.length})`}
                      </h2>
                      {searchTerm && (
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                          Found {filteredNotes.length} note{filteredNotes.length !== 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                    <NotesList 
                      filteredTasks={filteredNotes} 
                      editNote={editNote} 
                      deleteNote={deleteNote} 
                    />
                  </div>
                </div>
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/intro" element={<Intro />} />
          </Routes>
        </main>
        
        <Footer />
      </Router>
    </div>
  );
};

export default App;