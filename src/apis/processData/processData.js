import instance from "../../lib/instance/instance";

const processData = (url, method, parameterList, body) => {
  let param = "";
  if (parameterList !== null && parameterList !== undefined) {
    param += "/search?";
    parameterList.forEach((element) => {
      param += element.name + "=" + element.value + "&";
    });
    param = param.substring(0, param.lastIndexOf("&"));
  }

  const processing = (processing_url) => {
    console.log(processing_url);
    switch (method) {
      case "get":
        return instance.get(processing_url, body);
      case "post":
        return instance.post(processing_url, body);
      case "put":
        return instance.put(processing_url, body);
      default:
        return null;
    }
  };
  if (processing !== null)
    return processing(url + param).then((response) => response.data);
};

export default processData;
