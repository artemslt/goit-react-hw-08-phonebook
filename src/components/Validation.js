import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'numeric', function () {
  return this.matches(
    /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\\./0-9]*$/g,
    'The field should have digits only'
  );
});

export const contactsShema = Yup.object({
  name: Yup.string().required(),
  phone: Yup.string().numeric().required(),
});
