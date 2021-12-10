import { FC, Dispatch, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tag } from "../../utilities/types";
import Icon from "../layout/Icon";
import { Action, FilterActions } from "../../utilities/reducers";
import { QuestionTypeLabels } from "../../utilities/enums";
import Select from "react-select";

type Props = {
  tags: Tag[];
  filters: any;
  dispatchFilters: Dispatch<Action>;
};

const questionTypes = Object.entries(QuestionTypeLabels).map(([value, label]) => ({ value: +value, label }));

const Filter: FC<Props> = ({ tags, filters, dispatchFilters }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-3">
      <div className="p-2 px-3 cursor-pointer bg-gray-200 flex justify-between" onClick={() => setOpen(!open)}>
        <div>
          <Icon icon="search" className="fa-lg relative mr-2" /> Search for Questions
        </div>
        {!open && <Icon icon="caret-down" className="fa-lg relative top-1" />}
        {open && <Icon icon="caret-up" className="fa-lg relative top-1" />}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
            <div className="h-90 p-5">
              <label className="block mb-1" htmlFor="searchString">
                Containing Text
              </label>
              <input
                type="text"
                className="mb-3 h-9"
                name="searchString"
                value={filters.searchString}
                onChange={e => dispatchFilters({ type: FilterActions.SetSearchString, payload: e.target.value })}
              />

              <label className="block mb-1" htmlFor="types">
                Question Types
              </label>
              <Select
                options={questionTypes}
                isMulti
                name="types"
                placeholder="Not filtered by type"
                className="react-select flex-grow mb-3"
                classNamePrefix="react-select"
                onChange={payload => {
                  dispatchFilters({ type: FilterActions.SetAllTypes, payload });
                  return payload;
                }}
              />

              <label className="block mb-1" htmlFor="tags">
                With Tags
              </label>
              <Select
                options={tags}
                isMulti
                placeholder="Not filtered by tags"
                name="tags"
                className="react-select flex-grow"
                classNamePrefix="react-select"
                getOptionLabel={({ text }) => text}
                getOptionValue={({ id }) => id}
                onChange={payload => {
                  dispatchFilters({ type: FilterActions.SetAllTags, payload });
                  return payload;
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
