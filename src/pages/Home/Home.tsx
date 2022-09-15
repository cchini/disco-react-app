import React from 'react';
import xaxisLogo from '../../assets/images/xaxis.svg';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import Select from '@components/Select/Select';

const Home = () => (
  <div>
    <img src={xaxisLogo} alt="logo" />
    <Button>button</Button>
    <Input value="input" />
    <Select
      options={[
        { label: 'option A', value: 'option A' },
        { label: 'option B', value: 'option B' },
        { label: 'option C', value: 'option C' },
      ]}
    />
  </div>
);

export default Home;
