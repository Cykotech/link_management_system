export async function getMaterials(): Promise<TMaterial[]> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxdwFZR3NKwIeV1V9g3Ei0AkU7uj7_exUdni94HTQ7PK1flIQgin2EBl7UhYDKYugw/exec?type=materials"
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
