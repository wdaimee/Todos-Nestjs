import React from 'react';

export const DeleteShadow: React.FC<{className?: string}> = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <defs>
       <filter id="filter1" x="0" y="0">
           <feOffset result="offOut" in="SourceAlpha" dx="3" dy="3" />
           <feFlood floodColor="#808080" />
           <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
           <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
       </filter>
    </defs>
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" fill="currentColor" filter="url(#filter1)"/>
</svg>