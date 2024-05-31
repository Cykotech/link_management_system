export interface TMaterial {
  name: string,
  imgSrc: string,
  ingredientProperties: Properties,
  cookingTags: Tags
}

type Properties = {
  heartsRecovered: number,
  cookingEffect: string,
  effectLevel: number,
  effectDuration: number,
  durationBoost: number,
  critChance: number
}

type Tags = {
  1: string,
  2: string,
  3: string,
  custom1: string,
  custom2: string
}

export async function getMaterials(): Promise<TMaterial[]> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxjYKCnx2VRAj7aphprnj6BMS36MQBEF9KSS8hBRJ8jqoAVhhQnZkEZLl5GRU304Z0/exec?type=materials"
    );
    const json = await response.json();
    json.forEach(material => {
      for (let property in material.ingredientProperties) {
        const numberValue = Number(material.ingredientProperties[property]);
        if (!Number.isNaN(numberValue)) {
          material.ingredientProperties[property] = numberValue;
        }
      }
    })
    return json;
  } catch (err) {
    console.log(err);
  }
}