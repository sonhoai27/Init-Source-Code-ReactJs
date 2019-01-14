const ValidForm = (form, field) => {
  let flag = false;
  field.forEach(element => {
    if(form[element] && form[element] !== '') {
      flag = true;
    } else {
      flag = false;
      return flag;
    }
  })

  return flag;
}

export default ValidForm
