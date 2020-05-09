import React, { useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';

const TestPicker = () => {
  const [subjects, setSubjects] = useState(['ACT', 'SAT', 'SAT II']);
  const [tests, setTests] = useState({
    act: ['ACT 1', 'ACT 2', 'ACT 3'],
    sat: ['SAT 1', 'SAT 2', 'SAT 3'],
    satSubjectMathII: ['MATHII 1', 'MATHII 2', 'MATHII 3'],
  });

  return (
    <FormControl>
      <NativeSelect defaultValue=''>
        {subjects.map((subject, idx) => (
          <option key={idx} value={subject}>
            {subject}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default TestPicker;
