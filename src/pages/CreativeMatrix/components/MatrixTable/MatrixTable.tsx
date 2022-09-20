import React, { FC } from 'react';
import { Button } from '@components/index';
import { CreativeMatrix } from '@models/creativeMatrix.model';

interface MatrixTableProps {
  data: CreativeMatrix[];
}

const MatrixTable: FC<MatrixTableProps> = props => {
  const { data } = props;
  return (
    <section className="table">
      <ul className="headerTable">
        <li className="headerTable_item">ID</li>
        <li className="headerTable_item">Name</li>
        <li className="headerTable_item">Type</li>
        <li className="headerTable_item">Status</li>
        <li className="headerTable_item">Last update</li>
        <li className="headerTable_item headerTable_item__actions">Actions</li>
      </ul>
      {data?.map(matrix => (
        <ul key={matrix?.id} className="contentTable">
          <li className="contentTable_item">{matrix?.id}</li>
          <li className="contentTable_item">{matrix?.name}</li>
          <li className="contentTable_item">
            All channels (FB & IG, TikTok, SONA)
          </li>
          <li className="contentTable_item">{matrix?.status?.name}</li>
          <li className="contentTable_item">{matrix?.modified?.toString()}</li>
          <li className="contentTable_item contentTable_item__actions">
            <button className="iconActionsCreativeMatrix">
              <span className="iconXaxis iconXaxis-edit"></span>
              Edit
            </button>
            <button className="iconActionsCreativeMatrix">
              <span className="iconXaxis iconXaxis-edit"></span>
              Refresh
            </button>
            <button className="iconActionsCreativeMatrix">
              <span className="iconXaxis iconXaxis-edit"></span>
              Publish
            </button>
          </li>
        </ul>
      ))}
    </section>
  );
};

export default MatrixTable;
