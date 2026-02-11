import React, { useState } from "react";
import jobsData from "./data/Jobs";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredJobs = jobsData
    .filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (job) =>
        locationFilter === "All" || job.location === locationFilter
    )
    .filter(
      (job) =>
        typeFilter === "All" || job.type === typeFilter
    );

  return (
    <div className="app-container">
      <h1 className="app-title">Job Board</h1>

      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      <div className="job-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              searchTerm={searchTerm}
            />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
