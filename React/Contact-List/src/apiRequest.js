const apiRequest = async (url = "", optionsObj = null, errorMsg = "") => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("Please reload the page!!");
  } catch (err) {
    errorMsg = err;
  } finally {
    return errorMsg;
  }
};

export default apiRequest;
