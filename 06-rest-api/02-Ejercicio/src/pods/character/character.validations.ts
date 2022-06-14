import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { minNumber } from '@lemoncode/fonk-min-number-validator';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    bestSentences: [Validators.required],
    status: [Validators.required],
    species: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
