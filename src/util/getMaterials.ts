export async function getMaterials(): Promise<TMaterial[]> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxjYKCnx2VRAj7aphprnj6BMS36MQBEF9KSS8hBRJ8jqoAVhhQnZkEZLl5GRU304Z0/exec?type=materials"
    );
    const json = await response.json();
    json.forEach((material) => {
      for (let property in material.ingredientProperties) {
        const numberValue = Number(material.ingredientProperties[property]);
        if (!Number.isNaN(numberValue)) {
          material.ingredientProperties[property] = numberValue;
        }
      }
    });
    for (let materialId = 0; materialId < json.length; materialId++) {
      json[materialId].id = materialId;
    }
    return json;
  } catch (err) {
    console.log(err);
  }
}
