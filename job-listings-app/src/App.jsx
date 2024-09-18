// src/App.jsx
import React, { useState, useEffect } from 'react';
import JobTable from './components/JobTable';
import SearchFilter from './components/SearchFilter';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import './index.css';

const { Header, Content } = Layout;

function App() {
  const [jobs, setJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('/jobs.json')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setDisplayJobs(data);
        const locs = Array.from(new Set(data.map((job) => job.location)));
        setLocations(locs);
      });
  }, []);

  const handleSearch = (value) => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(value.toLowerCase()) ||
        job.company.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayJobs(filtered);
  };

  const handleFilter = (value) => {
    const filtered = jobs.filter((job) => job.location === value);
    setDisplayJobs(value ? filtered : jobs);
  };

  return (
    <Layout>
      <Header>
        <h1 style={{ color: '#fff' }}>Job Listings</h1>
      </Header>
      <Content style={{ padding: '20px' }}>
        <SearchFilter
          onSearch={handleSearch}
          onFilter={handleFilter}
          filterOptions={locations}
        />
        <JobTable jobs={displayJobs} />
      </Content>
    </Layout>
  );
}

export default App;
