import React from "react";
import "./JobCard.css";

const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} className="highlight">
        {part}
      </span>
    ) : (
      part)
  );
};

const JobCard = ({ job, searchTerm }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">
        {highlightText(job.title, searchTerm)}
      </h3>
      <p className="job-company">
        {job.company} • {job.location}
      </p>
      <span className="job-badge">{job.type}</span>
    </div>
  );
};

export default JobCard;
