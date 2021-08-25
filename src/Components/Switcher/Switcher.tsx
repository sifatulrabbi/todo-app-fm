import React from 'react';
import { Container } from './switcher.styles';
import { Tab } from '../../App';

const Switcher: React.FC<Tab> = ({ tab, handleTabChange }) => {
   return (
      <Container>
         <button
            className={`switcher__btn ${tab === 'all' && 'active'}`}
            onClick={() => handleTabChange('all')}
         >
            All
         </button>
         <button
            className={`switcher__btn ${tab === 'active' && 'active'}`}
            onClick={() => handleTabChange('active')}
         >
            Active
         </button>
         <button
            className={`switcher__btn ${tab === 'completed' && 'active'}`}
            onClick={() => handleTabChange('completed')}
         >
            Completed
         </button>
      </Container>
   );
};

export default Switcher;
