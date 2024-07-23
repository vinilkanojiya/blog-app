import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BlogPostItem from '../BlogPostItem'; // Adjust the path if necessary

test('renders blog post item', () => {
  const post = {
    title: 'Test Post',
    description: 'Test Description',
    publishedAt: '2023-01-01',
  };

  const { getByText } = render(
    <Router>
      <BlogPostItem post={post} />
    </Router>
  );

  expect(getByText('Test Post')).toBeInTheDocument();
  expect(getByText('Test Description')).toBeInTheDocument();
  expect(getByText('1/1/2023')).toBeInTheDocument();
});
