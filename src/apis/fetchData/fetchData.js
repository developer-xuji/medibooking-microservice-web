import instance from "../../lib/instance/instance";

const fetchData = (url, parameter) => {
  const param = parameter ? "?" + parameter.name + "=" + parameter.value : "";
  console.log(url + param);
  const fetchedData = instance
    .get(url + param)
    .then((response) => response.data);
  return fetchedData;
};

export default fetchData;
