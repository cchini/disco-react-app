import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@components/index';
import MatrixTable from './components/MatrixTable/MatrixTable';
import TemplateCard from './components/TemplateCard/TemplateCard';
import TemplateModal from './components/TemplateModal/TemplateModal';
import {
  CreativeMatrix as Matrix,
  TemplateMatrix,
} from '@models/creativeMatrix.model';
import useFetchAndLoad from '@hooks/useFetchAndLoad';
import { useAsync } from '@hooks/useAsyncAxios';
import { getAllCreativeMatrix } from '@services/creativeMatrix.service';
import {
  allCreativeMatrixAdapter,
  templateListAdapter,
} from '@adapters/creativeMatrix.adapter';
import { DiscoPaths } from '@routes/models/path.model';
import { data as dataTemplate } from '@mocks/templateMatrix.mock';
import './creativeMatrix.scss';

const CreativeMatrix = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [templateSelected, setTempleteSelected] =
    useState<TemplateMatrix>(null);
  const [matrixList, setMatrixList] = useState<Matrix[]>([]);
  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () => await callEndpoint(getAllCreativeMatrix());
  useAsync(
    getApiData,
    response => setMatrixList(allCreativeMatrixAdapter(response)),
    () => {},
  );

  if (loading) return <div>Loading</div>;

  return (
    <>
      {/* Modal detail: Template matrix selected */}
      {templateSelected && (
        <TemplateModal
          activeModal={open}
          openModal={setOpen}
          data={templateSelected}
        />
      )}
      <section>
        <h1>Creative Matrix</h1>
        {/* Template section */}
        <section>
          <h2>Start with a Template</h2>
          <TemplateCard
            data={templateListAdapter(dataTemplate)}
            openModal={value => {
              setTempleteSelected(value);
              setOpen(true);
            }}
          />
        </section>
        {/* Creative matrix section */}
        <section>
          <div className="navTable">
            <div>
              <Input placeholder="Search" />
              <Button>Search</Button>
            </div>
            <Button onClick={() => navigate(`/${DiscoPaths.NewMatrixStep1}`)}>
              New
            </Button>
          </div>
          <MatrixTable data={matrixList} />
        </section>
      </section>
    </>
  );
};

export default CreativeMatrix;
