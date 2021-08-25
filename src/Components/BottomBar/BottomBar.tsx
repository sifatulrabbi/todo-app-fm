import React from 'react';
import Switcher from '../Switcher/Switcher';
import { Container } from './bottomBar.styles';
import { Tab } from '../../App';

const BottomBar: React.FC<Tab> = ({ tab, handleTabChange }) => {
   return (
      <Container>
         <Switcher tab={tab} handleTabChange={handleTabChange} />
      </Container>
   );
};

export default BottomBar;
