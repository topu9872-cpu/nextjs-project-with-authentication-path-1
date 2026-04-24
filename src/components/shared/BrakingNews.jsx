import React from 'react';
import Marquee from 'react-fast-marquee';

const news=[
  { "id": 1, "title": "Global Markets Rally Amid Economic Recovery Hopes" },
  { "id": 2, "title": "New AI Breakthrough Promises Faster Medical Diagnoses" },
  { "id": 3, "title": "Severe Weather Alerts Issued Across Coastal Regions" },
  { "id": 4, "title": "National Team Secures Dramatic Victory in Final Match" },
  { "id": 5, "title": "Education Reform Bill Passed After Long Debate" }
]

const BrakingNews = () => {
  return (
    <div className='flex justify-between items-center container mx-auto bg-gray-300 '>
      <button className='btn btn-error '>Latest News</button>
      <Marquee pauseOnHover={true} speed={30}> 
        {news.map(item=>
          <span className='ml-20' key={item.id}>{item.title}</span>
        )}
      </Marquee>
    </div>
  );
};

export default BrakingNews;