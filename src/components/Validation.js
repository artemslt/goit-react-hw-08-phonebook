import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'numeric', function () {
  return this.matches(/^\d+$/, 'The field should have digits only');
});

export const contactsShema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string().numeric().required(),
});
