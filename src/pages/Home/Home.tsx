import React, { useState } from 'react';
import xaxisLogo from '../../assets/images/xaxis.svg';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import Select from '@components/Select/Select';
import Modal from '@components/Modal/Modal';
import './home.scss';

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <img src={xaxisLogo} alt="logo" />
      <Button onClick={() => setOpen(true)}>button</Button>
      <Input value="input" />
      <Select
        options={[
          { label: 'option A', value: 'option A' },
          { label: 'option B', value: 'option B' },
          { label: 'option C', value: 'option C' },
        ]}
      />
      <Modal
        className="exampleModal"
        active={open}
        onClose={() => setOpen(false)}>
        <div>Modal example</div>
        <div>
          <Button onClick={() => setOpen(false)}>close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
