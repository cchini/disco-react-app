import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from '@components/index';
import TemplatePlatform from './TemplatePlatform';
import { DiscoPaths } from '@routes/models/path.model';

interface TemplateModalProps {
  data?: any;
  openModal: (open: boolean) => void;
  activeModal: boolean;
}

const TemplateModal: FC<TemplateModalProps> = props => {
  const { data, openModal, activeModal } = props;
  const navigate = useNavigate();
  return (
    <Modal
      className="modalDetails"
      active={activeModal}
      onClose={() => openModal(false)}
      header={
        <header className="headerModal">
          <div>
            <p>Template</p>
            <h3>Title</h3>
          </div>
          <Button onClick={() => openModal(false)}>X</Button>
        </header>
      }>
      <section className="modalContent">
        <TemplatePlatform />
      </section>
      <footer className="footerModal">
        <Button onClick={() => navigate(`/${DiscoPaths.NewMatrixStep2}`)}>
          Select
        </Button>
        <Button onClick={() => openModal(false)}>Cancel</Button>
      </footer>
    </Modal>
  );
};

export default TemplateModal;
