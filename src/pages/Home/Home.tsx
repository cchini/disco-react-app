import React, { useState } from 'react';
import xaxisLogo from '../../assets/images/xaxis.svg';
import { Button, Input, Select, Modal } from '@components/index';
import Layout from '../common/Layout/Layout';
import './home.scss';

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
