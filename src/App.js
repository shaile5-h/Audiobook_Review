import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AudiobookList from './components/AudiobookList';
import AudiobookDetails from './components/AudiobookDetails';
import ReviewForm from './components/ReviewForm';
import Login from './components/Login'; 
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import './App.css';

const sampleAudiobooks = [
  {
    _id: "1",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki ",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/55fd17366fbd4d599ce5e474b2314ae6.png",
    description: "A personal finance classic comparing the author's two dads and their financial philosophies.",
    genre: "Finance",
    rating: 5,
    reviews: [],
  },
  {
    _id: "2",
    title: "Dil Bechara",
    author: "Shashank Khaitan",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/bec56fc02eae4a3cbfe7d9596eab1335.jpeg",
    description: "A touching audiobook adaptation of a heartwarming love story, exploring the themes of life and loss.",
    genre: "Mystery",
    rating: 2,
    reviews: [],
  },
  {
    _id: "3",
    title: "Imrove with Yoga",
    author: "Author T",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/7ee2df007d7a4961947bd5b76e8e469d.png",
    description: "An audiobook offering yoga techniques and practices to enhance digestive health and overall well-being.3",
    genre: "Health",
    rating: 3,
    reviews: []
  },
  {
    _id: "4",
    title: "Secret Billionaire",
    author: "Teymour Shahabi",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/c164ccfcc3074d919c0f69075084fdd0.png",
    description: "Description of Audiobook 4",
    genre: "Non-Fiction",
    rating: 4,
    reviews: []
  },
  {
    _id: "5",
    title: "Be Leader",
    author: " Teymour ",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/9c71c6c1cc8844f9b692a466c116e2e0.png",
    description: "A captivating story about hidden wealth, romance, and the intrigue of a mysterious billionaire's life.",
    genre: "Fiction",
    rating: 5,
    reviews: []
  },
  {
    _id: "6",
    title: "Shri Ram",
    author: "Guru Datta",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/3a4cd3d180a4435794ef467428e3f848.png",
    description: "An audiobook narrating the life and virtues of Lord Rama, exploring his journey and teachings.",
    genre: "Mythology",
    rating: 5,
    reviews: []
  },
  {
    _id: "7",
    title: "Shri Krishna ",
    author: "Guru Datta",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/10e01b8d24c545bdb5968ee2bf4b12e3.jpg",
    description: "Description of Audiobook An audiobook narrating the life and virtues of Lord Krishna, exploring his journey and teachings.",
    genre: "Mythology",
    rating: 5,
    reviews: []
  },
  {
    _id: "8",
    title: "Manthan",
    author: "Prabhu dayaal",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/dd1f46d95dcd4692923863a87d035b37.jpg",
    description: "A one-of-a-kind story called Manthan (The Churning) was funded by half a million dairy farmers themselves.",
    genre: "Non-Fiction",
    rating: 4,
    reviews: []
  },
  {
    _id: "9",
    title: "Kaal Bhairav Ka Rahasya",
    author: "Indra Sundar Rajan",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/e33cb0f1b2134801b4d4ad93f2ccf95a.jpg",
    description: "Description of Audiobook 9",
    genre: "Thriller",
    rating: 3,
    reviews: []
  },
  {
    _id: "10",
    title: "Psychology of success",
    author: "Sarvajeet Soni",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/515b3c7ab8284d76a415a4f48e6269c4.png",
    description: "The psychology of success in a career extends beyond mere cognitive abilities. It encompasses emotional intelligence, positive thinking, mindfulness, resilience, and a continual commitment to learning and adaptability.",
    genre: "Non-Fiction",
    rating: 5,
    reviews: []
  },
  {
    _id: "8",
    title: "Hidden CEO",
    author: "Rupal",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/7ea2f3cf14a842568ee7dcdbc443aa97.png",
    description: "A one-of-a-kind story called Manthan (The Churning) was funded by half a million dairy farmers themselves.",
    genre: "Romance",
    rating: 4,
    reviews: []
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAudiobooks = sampleAudiobooks.filter(audiobook =>
    audiobook.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <div className="header-left">
            <img src="https://cdn3.vectorstock.com/i/1000x1000/27/72/customer-reviews-icon-flat-design-vector-6972772.jpg" alt="KukuReview" className="logo" />
            <h1>KukuReview</h1>
          </div>
          <div className="header-center">
            <input
              type="text"
              placeholder="Search for an audiobook..."
              className="search-bar"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="header-right">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/login">Log in</Link> 
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<AudiobookList audiobooks={filteredAudiobooks} />} />
          <Route path="/audiobooks/:id" element={<AudiobookDetails audiobooks={sampleAudiobooks} />} />
          <Route path="/audiobooks/:id/review" element={<ReviewForm />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
      <Route path='/reset-password/:token' element={<ResetPassword/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;