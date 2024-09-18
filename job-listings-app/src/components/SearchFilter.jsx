// src/components/SearchFilter.jsx
import React from 'react';
import { Input, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;

const SearchFilter = ({ onSearch, onFilter, filterOptions }) => {
  return (
    <div style={{ marginBottom: 16, display: 'flex', gap: '1rem' }}>
      <Search placeholder="Search jobs" onSearch={onSearch} enterButton />
      <Select
        placeholder="Filter by location"
        onChange={onFilter}
        allowClear
        style={{ width: 200 }}
      >
        {filterOptions.map((option) => (
          <Option key={option} value={option}>
            {option || 'N/A'}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SearchFilter;
