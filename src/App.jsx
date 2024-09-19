import React, { useState, useEffect } from 'react';
import ProductCard from './components/productCard';
import list from './static/data.json';

const App = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  // Function to handle search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Update filteredList whenever searchQuery changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      // If search query is empty, clear the filteredList
      setFilteredList([]);
    } else {
      // Filter the list based on search query
      const updatedList = list.filter((item) =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
      );
      setFilteredList(updatedList);
    }
  }, [searchQuery]);

  return (
    <div className='flex flex-col min-h-screen bg-gray-100 py-6 sm:py-12'>
      <div className='relative py-3 sm:mx-auto container'>
        <div className={filteredList.length > 0 ?'': 'w-min mx-auto my-auto'}>
          <div className='relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20 '>
            <div className='mx-auto'>
              {/* Search input */}
              <div className='mb-6 flex justify-center'>
                <input
                  type='text'
                  placeholder='ابحث عن منتج'
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className='mx-auto px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300'
                />
              </div>

              {/* Show result count */}
              {searchQuery.length > 0 && (
                <div className='mb-4 text-center'>
                  <p className='text-sm text-gray-600'>
                    {filteredList.length > 0
                      ? `تم العثور على ${filteredList.length} منتج`
                      : 'لم يتم العثور على نتائج'}
                  </p>
                </div>
              )}

              {/* Grid of ProductCards */}
              {searchQuery.length > 0 && filteredList.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                  {filteredList.map((data) => (
                    <ProductCard key={data.id} data={data} />
                  ))}
                </div>
              ) : (
                searchQuery.length > 0 && (
                  <p className='text-center text-gray-500'>لم يتم العثور على منتجات</p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
