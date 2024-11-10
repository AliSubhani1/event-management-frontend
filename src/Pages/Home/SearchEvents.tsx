import React, { useState, useEffect } from 'react';
import useDebounce from '../../CustomHooks/UseDebounc'; 
import SearchImage from '../../Assets/svg/search.svg'

const SearchEvents = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  // ToDo: Update typescript type here later when real API will be used
  const [events, setEvents] = useState<any[]>([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
      fetchEvents(debouncedSearchTerm);
    
  }, [debouncedSearchTerm]);

  const fetchEvents = async (query: string) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      console.log('data=', data);
      setEvents(data.products || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <>
    <div className="bg-blue-0 p-6 w-screen ">
        <div className='text-left text-white-0'>
            <h3 className="text-2xl font-bold">Events</h3>
            <p className="text-gray-700 mb-4">Book the ticket of ongoing events</p>
        </div>
<div className='flex justify-center'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search events..."
        className="border p-2 w-full mb-4 max-w-[400px] rounded-sm text-black"
      />
      </div>
    </div>
          <div>
          {events.length > 0 ? (
            <ul>
              {events.map((event, index) => (
                <>
                <p key={index} className="border-b py-2">
                  {event.title} 
                </p>
                <p>{event.description}</p>
                <img className='w-[80px]' src={event.images[0]} alt="" />
                </>
              ))}
            </ul>
          ) : (
            <div className='flex mt-8 flex-col items-center justify-center gap-4'>
                <img src={SearchImage} alt="" />
                <h3 className='text-xl font-bold'>No results found</h3>
                <p className='text-center'>OOPS! We couldn't found any results. Please try again later.</p>
                
            </div>

          )}
        </div>
        </>
  );
};

export default SearchEvents;
