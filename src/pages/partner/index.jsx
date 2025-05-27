import React from 'react';
import Partner from '../../features/partner';

function PartnerPage() {
  const partnerData = [
    {
      id: 1,
      img: '/assets/images/partner/1.png'
    },
    {
      id: 2,
      img: '/assets/images/partner/2.png'
    },
    {
      id: 3,
      img: '/assets/images/partner/3.png'
    },
    {
      id: 4,
      img: '/assets/images/partner/4.png'
    },
    {
      id: 5,
      img: '/assets/images/partner/5.png'
    },
    {
      id: 6,
      img: '/assets/images/partner/6.png'
    },
    {
      id: 7,
      img: '/assets/images/partner/7.png'
    },
    {
      id: 8,
      img: '/assets/images/partner/8.png'
    },
    {
      id: 9,
      img: '/assets/images/partner/9.png'
    },
    {
      id: 10,
      img: '/assets/images/partner/10.png'
    },
    {
      id: 11,
      img: '/assets/images/partner/11.png'
    },
    {
      id: 12,
      img: '/assets/images/partner/12.png'
    },
    {
      id: 13,
      img: '/assets/images/partner/13.png'
    },
    {
      id: 14,
      img: '/assets/images/partner/14.png'
    },
    {
      id: 15,
      img: '/assets/images/partner/15.png'
    },
    {
      id: 16,
      img: '/assets/images/partner/16.png'
    },
    {
      id: 17,
      img: '/assets/images/partner/17.png'
    },
    {
      id: 18,
      img: '/assets/images/partner/18.png'
    }
  ];

  return (
    <div>
      <Partner data={partnerData} />
    </div>
  );
}

export default PartnerPage; 