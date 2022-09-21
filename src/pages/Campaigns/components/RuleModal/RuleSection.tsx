import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AppStore } from '@redux/store';
import { Button, Select } from '@components/index';
import { triggerTypes, conditions, days, dayParts } from '@mocks/rules.mock';
import { TriggerTypes } from '@models/public.model';
import { Rule } from '@models/campaigns.model';
import { modifyRules } from '@redux/states/campaigns.state';

interface RuleSectionProps {
  rule?: Rule;
}

const RuleSection: FC<RuleSectionProps> = props => {
  const { rule } = props;
  const store = useSelector((store: AppStore) => store.campaigns);
  const dispatch = useDispatch();
  const [triggerType, setTriggerType] = useState(null);
  const [condition, setCondition] = useState(null);

  const valuesTypes = () => {
    let options = [];
    if (triggerType) {
      if (triggerType?.value === TriggerTypes?.WeekDay) options = days;
      if (triggerType?.value === TriggerTypes?.DayPart) options = dayParts;
    }
    return options;
  };

  const addNewTriggerRule = () => {
    const rules = [...store?.rules];
    const findRule = rules.find(value => value?.id === rule?.id);
    if (findRule) {
      const cloneRule = { ...findRule };
      const cloneTrigger = [...cloneRule?.trigger];
      cloneTrigger.push({
        id: uuidv4(),
        trigger: { label: null, value: null },
        condition: { label: null, value: null },
        value: { label: null, value: null },
      });
      cloneRule.trigger = cloneTrigger;
      rules.splice(
        rules.findIndex(value => value?.id === rule?.id),
        1,
      );
      rules.push(cloneRule);
      dispatch(modifyRules(rules));
    }
  };

  return (
    <section className="listCreateRule">
      {rule?.trigger?.map(() => (
        <>
          <ul className="listSelect">
            <li className="listSelect_item">
              <Select
                value={triggerType}
                classNameSelect="selectRule"
                options={triggerTypes}
                onChange={value => setTriggerType(value)}
                isClearable={false}
              />
            </li>
            <li className="listSelect_item">
              <Select
                value={condition}
                classNameSelect="selectRule"
                options={conditions}
                onChange={value => setCondition(value)}
                isClearable={false}
              />
            </li>
            <li className="listSelect_item">
              <Select options={valuesTypes()} classNameSelect="selectRule" />
            </li>
            <li className="listSelect_item listSelect_item__btn">
              <button className="btnRemoveRow">
                <span className="iconXaxis iconXaxis-trash-alt"></span>
              </button>
            </li>
          </ul>
        </>
      ))}
      <div className="addListSelect">
        <Button
          hierarchy="secondary"
          className="addListSelect_btn"
          onClick={() => {
            addNewTriggerRule();
          }}>
          Or <span className="iconXaxis iconXaxis-plus"></span>
        </Button>
      </div>
    </section>
  );
};

export default RuleSection;
