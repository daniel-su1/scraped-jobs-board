// src/components/JobTable.jsx
import React from 'react';
import { Table } from 'antd';

const JobTable = ({ jobs }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      render: (text) => (
        <a href={`https://www.google.com/search?q=${encodeURIComponent(text)}+internships`} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Openings',
      dataIndex: 'openings',
      key: 'openings',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <a href={`https://www.google.com/search?q=${encodeURIComponent(record.company)}+internships`} target="_blank" rel="noopener noreferrer">
            Internships
          </a>
          {' | '}
          <a href={`https://www.google.com/search?q=${encodeURIComponent(record.company)}+linkedin`} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </>
      ),
    },
  ];

  return <Table dataSource={jobs} columns={columns} rowKey="jid" />;
};

export default JobTable;
