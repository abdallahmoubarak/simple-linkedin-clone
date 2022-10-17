export const encodeImageFileAsURL = (element) => {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    console.log(reader.result);
  };
  reader.readAsDataURL(file);
};
