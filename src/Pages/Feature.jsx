import React, { useEffect, useMemo, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTable } from 'react-table';

const Feature = () => {
  const blogs = useLoaderData();

  const [topBlogs, setTopBlogs] = useState([]);

  useEffect(() => {
    if (blogs.length > 0) {
      const topPosts = blogs
        .map((blog) => ({
          ...blog,
          wordCount: blog.shortDescription.split(' ').length,
        }))
        .sort((a, b) => b.wordCount - a.wordCount)
        .slice(0, 10);
      setTopBlogs(topPosts);
    }
  }, [blogs]);

  const columns = useMemo(
    () => [
      {
        Header: 'Serial Number',
        accessor: 'serialNumber',
      },
      {
        Header: 'Blog Title',
        accessor: 'title',
      },
      {
        Header: 'Blog Owner',
        accessor: 'userName',
      },
      {
        Header: 'Blog Owner Profile Picture',
        accessor: 'userPhotoURL',
        Cell: ({ cell: { value } }) => (
          <img src={value} alt="Profile" className="h-10 w-10 rounded-full" />
        ),
      },
    ],
    []
  );

  const data = useMemo(() => topBlogs.map((blog, index) => ({ ...blog, serialNumber: index + 1 })), [topBlogs]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Top 10 Posts</h1>
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full bg-teal-100 border divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps()}
                    className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200" {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => (
                    <td key={index} className="py-4 px-6 whitespace-nowrap" {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feature;
