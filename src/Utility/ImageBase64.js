async function ImageBase64(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  const data = new Promise((resolved, reject) => {
    reader.onload = () => resolved(reader.result);
    reader.onerror = (err) => reject(err);
  });

  return data;
}

export default ImageBase64;
