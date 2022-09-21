import React from 'react';
import { Button, Select } from '@components/index';

const RuleAccordion = () => {
  return (
    <details className="accordion">
      <summary className="accordion_title">Rules</summary>
      <article className="cntItemAccordion cntItemAccordion_first">
        <header className="headerFieldsColumn">
          <ul className="list">
            <li className="list_item">Tigger Type</li>
            <li className="list_item">Condition</li>
            <li className="list_item">Value</li>
          </ul>
        </header>
        <section className="listCreateRule">
          <ul className="listSelect">
            <li className="listSelect_item">
              <Select
                value="KPI"
                options={[
                  { label: 'option A', value: 'option A' },
                  { label: 'option B', value: 'option B' },
                  { label: 'option C', value: 'option C' },
                ]}
                classNameSelect="selectRule"
              />
            </li>
            <li className="listSelect_item">
              <Select
                value="Equal to ( ===)"
                options={[
                  { label: 'option A', value: 'option A' },
                  { label: 'option B', value: 'option B' },
                  { label: 'option C', value: 'option C' },
                ]}
                classNameSelect="selectRule"
              />
            </li>
            <li className="listSelect_item">
              <Select
                value="Awarees"
                options={[
                  { label: 'option A', value: 'option A' },
                  { label: 'option B', value: 'option B' },
                  { label: 'option C', value: 'option C' },
                ]}
                classNameSelect="selectRule"
              />
            </li>
            <li className="listSelect_item listSelect_item__btn">
              <button className="btnRemoveRow">
                <span className="iconXaxis iconXaxis-trash-alt"></span>
              </button>
            </li>
          </ul>
          <div className="addListSelect">
            <Button hierarchy="secondary" className="addListSelect_btn">
              Or <span className="iconXaxis iconXaxis-plus"></span>
            </Button>
          </div>
        </section>
        <div className="andSection">
          <div className="andSection_line"></div>
          <div className="andSection_text">
            <p>And</p>
          </div>
        </div>
        <section className="listCreateRule">
          <ul className="listSelect">
            <li className="listSelect_item">
              <Select
                value="KPI"
                options={[
                  { label: 'option A', value: 'option A' },
                  { label: 'option B', value: 'option B' },
                  { label: 'option C', value: 'option C' },
                ]}
                classNameSelect="selectRule"
              />
            </li>
            <li className="listSelect_item">
              <Select
                value="Equal to ( ===)"
                options={[
                  { label: 'option A', value: 'option A' },
                  { label: 'option B', value: 'option B' },
                  { label: 'option C', value: 'option C' },
                ]}
                classNameSelect="selectRule"
              />
            </li>
            <li className="listSelect_item">
              <Select
                value="Awarees"
                options={[
                  { label: 'option A', value: 'option A' },
                  { label: 'option B', value: 'option B' },
                  { label: 'option C', value: 'option C' },
                ]}
                classNameSelect="selectRule"
              />
            </li>
            <li className="listSelect_item listSelect_item__btn">
              <button className="btnRemoveRow">
                <span className="iconXaxis iconXaxis-trash-alt"></span>
              </button>
            </li>
          </ul>
          <ul className="listSelect">
            <li className="listSelect_item">
              <Select
                value="KPI"
                options={[
                  { label: 'option A', value: 'option A' },
                  { label: 'option B', value: 'option B' },
                  { label: 'option C', value: 'option C' },
                ]}
                classNameSelect="selectRule"
              />
            </li>
            <li className="listSelect_item">
              <Select
                value="Equal to ( ===)"
                options={[
                  { label: 'option A', value: 'option A' },
                  { label: 'option B', value: 'option B' },
                  { label: 'option C', value: 'option C' },
                ]}
                classNameSelect="selectRule"
              />
            </li>
            <li className="listSelect_item">
              <Select
                value="Awarees"
                options={[
                  { label: 'option A', value: 'option A' },
                  { label: 'option B', value: 'option B' },
                  { label: 'option C', value: 'option C' },
                ]}
                classNameSelect="selectRule"
              />
            </li>
            <li>
              <button className="btnRemoveRow">
                <span className="iconXaxis iconXaxis-trash"></span>
              </button>
            </li>
          </ul>
          <div className="addListSelect">
            <Button hierarchy="secondary" className="addListSelect_btn">
              Or <span className="iconXaxis iconXaxis-plus"></span>
            </Button>
          </div>
        </section>
        <Button className="cntItemAccordion_btn">
          And <span className="iconXaxis iconXaxis-plus"></span>
        </Button>
      </article>
    </details>
  );
};

export default RuleAccordion;
