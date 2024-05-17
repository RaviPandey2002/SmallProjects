const apiRequest = async (url = "", setListItems, errorMsg = "") => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error("Error occured while fetching");
    setListItems(await response.json());
  } catch (err) {
    errorMsg = err.message;
  } finally {
    return errorMsg;
  }
};

export default apiRequest;
