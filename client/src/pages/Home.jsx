import React, { useState } from "react";
import Searchbox from "../components/Searchbox/Searchbox";
import Table from "../components/Table/Table";

const Home = ({ user, login, logout }) => {
  const [superTags, setSuperTags] = useState([
    "Fellowship",
    "Internship",
    "Research",
    "Program",
    "Scholarship",
    "Mentorship",
    "Conference",
  ]);
  const [tags, setTags] = useState([
    "Female",
    "Backend",
    "Frontend",
    "Full-stack",
    "Software",
    "Machine Learning",
    "Data Science",
    "Marketing",
    "Python",
    "Bitcoin",
    "Blockchain",
    "Social-Impact",
    "Open-Source",
    "Community",
    "AWS",
    "Finance",
    "Leadership",
    "Physics",
    "Underrepresented",
    "Volunteer",
    "Google Cloud",
    "Asia-Pacific",
  ]);
  const [query, setQuery] = useState("");

  const [selectedSuperTags, setSelectedSuperTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelect = (tag, isSuperTag) => {
    if (isSuperTag) {
      setSelectedSuperTags([...selectedSuperTags, tag]);
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleTagDeselect = (tag, isSuperTag) => {
    if (isSuperTag) {
      setSelectedSuperTags(selectedSuperTags.filter((t) => t !== tag));
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-6 lg:px-[5%]">
      <div className="hidden lg:block lg:w-[20%]"></div>
      <div className="flex-grow lg:w-[60%]">
        <Searchbox
          tags={tags}
          superTags={superTags}
          selectedSuperTags={selectedSuperTags}
          selectedTags={selectedTags}
          handleTagDeselect={handleTagDeselect}
          handleTagSelect={handleTagSelect}
          query={query}
          setQuery={setQuery}
          setTags={setTags}
          setSuperTags={setSuperTags}
          setSelectedTags={setSelectedTags}
          user={user}
          login={login}
        />
        <Table
          selectedSuperTags={selectedSuperTags}
          selectedTags={selectedTags}
          handleTagDeselect={handleTagDeselect}
          handleTagSelect={handleTagSelect}
          query={query}
          user={user}
          login={login}
        />
      </div>
      <div className="lg:w-[20%] lg:pl-0 flex flex-col items-center justify-start gap-5 mt-6 lg:mt-0">
        <div className="w-full bg-blue-50 p-5 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 font-medium mb-2">
            <span className="material-icons">tips_and_updates</span>
            Tip
          </div>
          <div className="text-gray-700">
            Bookmark opportunities to receive reminders about deadlines on your email.
          </div>
        </div>
        <div className="w-full bg-blue-50 p-5 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 font-medium mb-2">
            <span className="material-icons">tips_and_updates</span>
            Tip
          </div>
          <div className="text-gray-700">
            We'll send you emails about new opportunities. If you can't find them, check your spam folder.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
